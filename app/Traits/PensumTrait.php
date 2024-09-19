<?php

namespace App\Traits;

use App\Models\CargaAcademica;
use App\Models\Ciclo;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

trait PensumTrait
{
    public const APROBADO = 'A';
    public const CURSANDO = 'C';
    public const PENDIENTE = 'P';
    public const REQUISITOS = 'R';
    public const REPROBADA = 'RR';

    public const APROBADO_ID = 1;
    public const CURSANDO_ID = 3;

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
                if($key === self::APROBADO_ID) {
                    $subjectsStatus['approved'] = $groupedSubjects->pluck('materia_id');
                    $subjectsStatus['countApproved'] = $groupedSubjects->count();
                } else if($key === self::CURSANDO_ID) {
                    $subjectsStatus['studying'] = $groupedSubjects->pluck('materia_id');
                    $subjectsStatus['countStudying'] = $groupedSubjects->count();
                } else if($key === 2) {
                    $subjectsStatus['failed'] = $groupedSubjects->pluck('materia_id');
                }
            });

        Log::info('Subjects Status: ' . json_encode($subjectsStatus['studying']));
        $_pensum->each(function($item) use ($subjectsStatus) {
            if($subjectsStatus['countApproved'] > 0 && $subjectsStatus['approved']->contains($item->materia_id)) {
                $item->estado = self::APROBADO;
            } else if($subjectsStatus['countStudying'] > 0 && $subjectsStatus['studying']->contains($item->materia_id)) {
                $item->estado = self::CURSANDO;
            } else {
                if($item->prerrequisito == '0') {
                    $item->estado = self::REQUISITOS;
                } else {
                    $arrayRequisitos = array_map('intval',explode(',', $item->prerrequisito));
                    $isApproved = collect($arrayRequisitos)->every(function($requisito) use ($subjectsStatus) {
                        return $subjectsStatus['approved']->contains($requisito);
                    });
                    if($isApproved) {
                        $item->estado = self::REQUISITOS;
                    } else {
                        if(@isset($subjectsStatus['failed']) && $subjectsStatus['failed']->contains($item->materia_id)) {
                            $item->estado = self::REPROBADA;
                        } else {
                            $item->estado = self::PENDIENTE;
                        }
                    }
                }
            }
        });
        return $_pensum;
    }

    public function getPossibleAcademicLoads($pensum = array()) {
        $activeCycle = $this->getActiveCycle();
        $subjectsIds = collect($pensum)->where('estado', self::REQUISITOS)->pluck('materia_id')->all();
        $academicLoads = CargaAcademica::whereIn('materia_id', $subjectsIds)
            ->with(['materia', 'docente'])
            ->where('ciclo_id', $activeCycle)
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
