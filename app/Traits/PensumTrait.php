<?php

namespace App\Traits;

use App\Models\Ciclo;
use App\Models\Asesoria;
use App\Models\CargaAcademica;

use App\Models\VCargaAcademicaMateria;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

trait PensumTrait
{
    public $APROBADO = 'A';
    public $CURSANDO = 'C';
    public $PENDIENTE = 'P';
    public $REQUISITOS = 'R';
    public $REPROBADA = 'RR';

    public $APROBADO_ID = 1;
    public $CURSANDO_ID = 3;

    public function checkAsesoria($pensum, $carnet) : array
    {
        $materiasCursando = $pensum->where('estado', $this->CURSANDO)->count();
        if($materiasCursando > 0) {
            return [
                'status' => 'STUDENT_IS_STUDYING'
            ];
        }

        $subjectsFailds = $pensum->where('estado', $this->REPROBADA)->count();
        if($subjectsFailds > 0) {
            return [
                'status' => 'STUDENT_HAVE_SUBJECTS_FAILED'
            ];
        }

        $asesoriaActiva = Asesoria::where(function($query) use($carnet) {
            $query->where('carnet', $carnet)
                ->where('ciclo_id', $this->getActiveCycle())
                ->where('estado_id', '<>', 4);
        })->first();
        $haveNotToActiveEnrolled = !is_null($asesoriaActiva);

        return [
            "enrolled" => $haveNotToActiveEnrolled ?
                VCargaAcademicaMateria::whereIn('id', $asesoriaActiva->detalles->pluck('carga_academica_id'))
                    ->select(
                        DB::raw('case when horario_id = 1 then "A" when horario_id = 2 then "B" else "C" end as horario'),
                        'nombre_materia as subject_name',
                        'codigo_materia as subject_code',
                        DB::raw('CONCAT(nombres_docente, " ", apellidos_docente) as teacher_names'),
                    )
                    ->get() :
                [],
            'status' => $haveNotToActiveEnrolled ? 'STUDENT_HAS_TO_ACTIVE_ENROLLED' : 'STUDENT_CAN_ENROLL',
            'text'   => $haveNotToActiveEnrolled ? 'VER INSCRIPCIÓN' : 'INICIAR INSCRIPCIÓN',
            'estado' => $haveNotToActiveEnrolled ? $asesoriaActiva->estado_id : 0
        ];
    }

    public function checkTheSubjects($carnet, $pensum) {
        $_pensum = collect($pensum);
        $subjectsStatus = collect([
            'approved' => collect(),
            'studying' => collect(),
            'failed' => collect(),
            'countApproved' => 0,
            'countStudying' => 0
        ]);

        DB::table('alumno_notas_historial_notas')
            ->select('estado_id', 'materia_id')
            ->where('carnet', $carnet)
            ->get()
            ->groupBy('estado_id')
            ->each(function($groupedSubjects, $key) use ($subjectsStatus) {
                if($key === $this->APROBADO_ID) {
                    $subjectsStatus['approved'] = $groupedSubjects->pluck('materia_id');
                    $subjectsStatus['countApproved'] = $groupedSubjects->count();
                } else if($key === $this->CURSANDO_ID) {
                    $subjectsStatus['studying'] = $groupedSubjects->pluck('materia_id');
                    $subjectsStatus['countStudying'] = $groupedSubjects->count();
                } else if($key === 2) {
                    $subjectsStatus['failed'] = $groupedSubjects->pluck('materia_id');
                }
            });

        $_pensum->each(function($item) use ($subjectsStatus) {
            if($subjectsStatus['approved'] && $subjectsStatus['approved']->contains($item->materia_id)) {
                $item->estado = $this->APROBADO;
            } else if($subjectsStatus['studying'] && $subjectsStatus['studying']->contains($item->materia_id)) {
                $item->estado = $this->CURSANDO;
            } else if($subjectsStatus['failed'] && $subjectsStatus['failed']->contains($item->materia_id)) {
                $item->estado = $this->REPROBADA;
            } else if($item->prerrequisito == '0') {
                $item->estado = $this->REQUISITOS;
            } else {
                $item->estado = $this->PENDIENTE;
            }
        });

        $orderSubjectsApproved = $_pensum->where('estado', $this->APROBADO)->values()->pluck('no_orden');
        foreach ($_pensum as $value) {
            if($value->estado === $this->PENDIENTE) {
                $preRequisites = array_map('intval', explode(',', $value->prerrequisito));
                $isValidSubjectEnrolled = collect($preRequisites)->every(function($preRequisite) use ($orderSubjectsApproved) {
                    return $orderSubjectsApproved->contains($preRequisite);
                });
                if($isValidSubjectEnrolled) {
                    $value->estado = $this->REQUISITOS;
                }
            }
        }

        return $_pensum;
    }

    public function getPossibleAcademicLoads($pensum = array(), $seccion) {
        $activeCycle = $this->getActiveCycle();
        $horarioId = strcmp($seccion, 'A') === 0 ? 1 : 2;
        $subjectsIds = collect($pensum)->where('estado', $this->REQUISITOS)->pluck('materia_id')->all();
        $academicLoads = CargaAcademica::whereIn('materia_id', $subjectsIds)
            ->with(['materia', 'docente', 'horario'])
            ->where('ciclo_id', $activeCycle)
            ->where('horario_id', $horarioId)
            ->orderBy('materia_id', 'desc')
            ->get();

        return $academicLoads;
    }

    public function getActiveCycle() {
        $cycle = Ciclo::where('estado', 'A')->orderBy('created_at', 'desc')->first();
        if($cycle) {
            return $cycle->id;
        }
        return null;
    }
}
