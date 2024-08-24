<?php

namespace App\Http\Controllers\API\V1;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

use App\Models\Nota;
use App\Models\Alumno;
use App\Models\Asesoria;
use App\Traits\PensumTrait;
use App\Models\AsesoriaDetalle;
use App\Models\CargaAcademica;
use App\Http\Resources\EnrollmentPlanCollection;

class AlumnoController extends Controller
{
    use PensumTrait;

    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    /**
     * @param string $carnet
     * @param $pensum
     * @return mixed
     */
    public function pensum($id) {
        try {
            $carnet = $id;
            if(strcmp($carnet, 'me') === 0) {
                $carnet = Auth::user()->persona->usertable->carnet;
            }

            $alumno = Alumno::find($carnet);
            if(is_null($alumno)) {
                return self::response_error([], 'No se encontró el alumno', 404);
            }

            $carrera = $alumno->pensum->last()->carrera;
            $pensum = $alumno->pensum->last()->pensumDetalles->load('materia');
            $collectionSubjects = self::checkTheSubjects($carnet, $pensum);

            return self::response_http([
                'carrera' => $carrera,
                'pensum' => new EnrollmentPlanCollection(collect($collectionSubjects))
            ]);

//
//             $pensum = $alumno->pensum->last()->pensumDetalles->load('materia');
//             $resumeSummary = self::checkTheSubjects($carnet, $pensum);

//             $materiasAInscribir = [];
// //            $cicloAInscribir = self::getCicloInscribir($nivel);
// //            $pensum = $pensum->map(function($item) use ($cicloAInscribir, &$materiasAInscribir) {
// //                $estado = $item->no_ciclo === $cicloAInscribir;
// //                if($estado) {
// //                    $materiasAInscribir[] = $item->materia->id;
// //                }
// //                return [
// //                    'creditos' => $item->uv,
// //                    'no_ciclo'  => $item->no_ciclo,
// //                    'semestre' => $item->ciclo,
// //                    'no_orden' => $item->no_orden,
// //                    'pensum_materia_id' => $item->id,
// //                    'pensum_id' => $item->pensum_id,
// //                    'materia_id' => $item->materia->id,
// //                    'nombre_materia' => $item->materia->nombre,
// //                    'codigo_materia' => $item->materia->codigo,
// //                    'requisitos' => $item->prerrequisito,
// //                    'estado' => $estado ? 'INSCRIBIR' : ''
// //                ];
// //            });

//             // TODO: pendiente agregar el ciclo activo
//             $cargasAcademicas = CargaAcademica::whereIn('materia_id', $materiasAInscribir)
//                 ->with(['horario', 'materia', 'docente'])
//                 ->get()
//                 ->map(function($item) {
//                     return [
//                         "id"            => $item->id,
//                         "docente_id"    => $item->docente_id,
//                         "materia_id"    => $item->materia_id,
//                         "horario_id"    => $item->horario_id,
//                         "ciclo_id"      => $item->ciclo_id,
//                         "horario"       => $item->horario,
//                         "materia"       => [
//                             "nombre"    => $item->materia->nombre,
//                             "codigo"    => $item->materia->codigo
//                         ],
//                         "docente"       => [
//                             "nombre"    => $item->docente->nombres,
//                             "apellido"  => $item->docente->apellidos
//                         ]
//                     ];
//                 });

//             // verificando si el alumno posee asesoria activas
//             $asesoriaActiva = Asesoria::where('carnet', $carnet)->with(['estado'])->first();

//             $array = [
//                 'carrera' => [
//                     'id' => $carrera->id,
//                     'nombre' => $carrera->nombre,
//                     'codigo' => $carrera->codigo
//                 ],
//                 'pensum' =>  EnrollmentPlanCollection::collection(collect($resumeSummary)),
//                 'asesoria_activa' => isset($asesoriaActiva) ? 1 : 0,
//                 'aseroria'  => $asesoriaActiva,
//                 'cargas_academicas' => $cargasAcademicas
//             ];

//             if(isset($asesoriaActiva)) {
//                 $array['asesoria_detalle'] = AsesoriaDetalle::where('asesoria_id', $asesoriaActiva->id)
//                     ->with(['cargaAcademica' => function($q) {
//                         $q->with(['materia', 'docente']);
//                     }])
//                     ->get()
//                     ->map(function($detalle) {
//                         return [
//                             'materia_codigo'    => $detalle->cargaAcademica->materia->codigo,
//                             'materia_nombre'    => $detalle->cargaAcademica->materia->nombre,
//                             'docente_nombres' => $detalle->cargaAcademica->docente->nombres,
//                             'docente_apellidos' => $detalle->cargaAcademica->docente->apellidos,
//                         ];
//                     });
//             }
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Error al obtener el pensum del alumno',
                'error' => $th->getMessage()
            ], 500);
        }
    }
}
