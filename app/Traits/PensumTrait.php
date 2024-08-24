<?php

namespace App\Traits;

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
                }
            });
            
        $_pensum->each(function($item) use ($subjectsStatus) {
            if($subjectsStatus['countApproved'] > 0 && $subjectsStatus['approved']->contains($item->materia_id)) {
                $item->estado = self::APROBADO;
            } else if($subjectsStatus['countStudying'] > 0 && $subjectsStatus['studying']->contains($item->materia_id)) {
                $item->estado = self::CURSANDO;
            } else {
                if($item->prerrequisito == '0') {
                    $item->estado = self::REQUISITOS;
                } else {
                    if($subjectsStatus['countApproved'] === 0) {
                        $item->estado = self::PENDIENTE;
                    } else {

                    }
                    // $approved = $subjectsStatus['approved']->toArray();
                    // $requisitosArray = array_map('intval',explode(',', $item->prerrequisito));
                    // Log::alert("Approved" . json_encode($approved));
                    // Log::alert("Requisitos" . json_encode($requisitosArray));
                    // $isApproved = collect($requisitosArray)->every(function($requisito) use ($approved) {
                    //    return in_array($requisito, $approved) ? true : false;
                    // });
                    // if($isApproved) {
                    //     $item->estado = self::REQUISITOS;
                    // } else {
                    //     $item->estado = self::PENDIENTE;
                    // }
                }
            }
        });

        return $_pensum;
    }
}

// private function checkTheSubjects(string $carnet, $pensum)  {


//     $approvedSubjects = collect();
//     $subjectsStudying = collect();
//     $groupedSubjects = $subjects->groupBy('estado_id');

//     if($groupedSubjects->has(1)) {
//         $approvedSubjects = $groupedSubjects->get(1)->pluck('materia_id');
//         $approvedSubjects = $approvedSubjects->toArray();
//     }

//     if($groupedSubjects->has(3)) {
//         $subjectsStudying = $groupedSubjects->get(3)->pluck('materia_id');
//         $subjectsStudying = $subjectsStudying->toArray();
//     }

//     Log::info('Materias aprobadas: ' . json_encode($approvedSubjects));
//     Log::info('Materias cursando: ' . json_encode($subjectsStudying));

    // $pensum->each(function(&$pensum) use ($subjectsStudying, $approvedSubjects) {
    //     if(count($approvedSubjects) > 0 && in_array($pensum->materia_id, $approvedSubjects)) {
    //         $pensum->estado = 'A';
    //     } else if( count($subjectsStudying) > 0 && in_array($pensum->materia_id, $subjectsStudying)) {
    //         $pensum->estado = 'C';
    //     } else {
    //         if($pensum->requisitos == '0') {
    //             $pensum->estado = 'R';
    //         } else {
    //             if(count($approvedSubjects) === 0 ) {
    //                 $pensum->estado = 'P';
    //             } else {
    //                 $requisitos = array_map('intval', explode(',', $pensum->prerrequisito));
    //                 $isApproved = collect($requisitos)->every(function($requisito) use ($approvedSubjects) {
    //                     return in_array($requisito, $approvedSubjects);
    //                 });
    //                 $pensum->estado = $isApproved ? 'R' : 'P';
    //             }
    //         }
    //     }
    // });

//     return $pensum;
// }