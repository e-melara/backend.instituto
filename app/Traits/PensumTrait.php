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

        $asesoriaActiva = Asesoria::where(function($query) use($carnet) {
            $query->where('carnet', $carnet)->where('ciclo_id', $this->getActiveCycle());
        })->first();
        $haveNotToActiveEnrolled = !is_null($asesoriaActiva);

        return [
            "enrolled" => $haveNotToActiveEnrolled ?
                VCargaAcademicaMateria::whereIn('id', $asesoriaActiva->detalles->pluck('carga_academica_id'))
                    ->select('nombre_materia', 'nombres_docente', 'materia_id', 'codigo_materia', 'apellidos_docente', 'id')
                    ->get() :
                [],
            'status' => $haveNotToActiveEnrolled ? 'STUDENT_HAS_TO_ACTIVE_ENROLLED' : 'STUDENT_CAN_ENROLL'
        ];
    }

    public function checkTheSubjects($carnet, $pensum) {
        $_pensum = collect($pensum);
        $subjectsStatus = collect([
            'approved' => collect(),
            'studying' => collect(),
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
            if($subjectsStatus['countApproved'] > 0 && $subjectsStatus['approved']->contains($item->materia_id)) {
                $item->estado = $this->APROBADO;
            } else if($subjectsStatus['countStudying'] > 0 && $subjectsStatus['studying']->contains($item->materia_id)) {
                $item->estado = $this->CURSANDO;
            } else {
                if($item->prerrequisito == '0') {
                    $item->estado = $this->REQUISITOS;
                } else {
                    $arrayRequisitos = array_map('intval',explode(',', $item->prerrequisito));
                    $isApproved = collect($arrayRequisitos)->every(function($requisito) use ($subjectsStatus) {
                        return $subjectsStatus['approved']->contains($requisito);
                    });
                    if($isApproved) {
                        $item->estado = $this->REQUISITOS;
                    } else {
                        if(@isset($subjectsStatus['failed']) && $subjectsStatus['failed']->contains($item->materia_id)) {
                            $item->estado = $this->REPROBADA;
                        } else {
                            $item->estado = $this->PENDIENTE;
                        }
                    }
                }
            }
        });
        return $_pensum;
    }

    public function getPossibleAcademicLoads($pensum = array()) {
        $activeCycle = $this->getActiveCycle();
        $subjectsIds = collect($pensum)->where('estado', $this->REQUISITOS)->pluck('materia_id')->all();
        $academicLoads = CargaAcademica::whereIn('materia_id', $subjectsIds)
            ->with(['materia', 'docente'])
            ->where('ciclo_id', $activeCycle)
            ->orderBy('materia_id', 'desc')
            ->get();

        return $academicLoads;
    }

    public function getActiveCycle() {
        $cycle = Ciclo::where('estado', 'A')->first();
        if($cycle) {
            return $cycle->id;
        }
        return null;
    }
}
