<?php

namespace App\Http\Controllers\API\V1;

use App\Models\AlumnoNotaCargaAcademica;
use App\Models\Nota;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

use App\Models\Ciclo;
use App\Models\Estado;
use App\Models\Asesoria;
use App\Traits\PensumTrait;
use App\Models\AsesoriaDetalle;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PensumController extends Controller
{
    use PensumTrait;

    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    public function store(Request $request) {
        $all = $request->input('ids');
        $carnet = Auth::user()->persona->usertable->carnet;

        $estado = Estado::where('codigo',Estado::ENVIADA)->first();
        $ciclo  = Ciclo::where('estado', 'A')->first();

        $count = Asesoria::where('carnet', $carnet)->count();
        if($count > 0){
            return response()->json([
                'message' => 'El alumno ya posee una asesoria en proceso'
            ], 503);
        }

        DB::beginTransaction();
        try {
            $asesoria = Asesoria::create([
                "carnet"        => $carnet,
                "estado_id"     => $estado->id,
                'ciclo_id'      => $ciclo->id,
            ]);

            collect($all)->each(function($carga) use ($asesoria) {
                AsesoriaDetalle::create([
                    'estado_id'    => 3,
                    'asesoria_id'   => $asesoria->id,
                    'carga_academica_id'    => $carga,
                ]);
            });

            DB::commit();
            return response()->json([
                "message" => "Asesoria realizada con exito",
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                "message" => $th->getMessage(),
            ], 503);
        }
    }

    function getAsesoriaFilter(Request $request)  {
        return Asesoria::with(['alumno' => function($query) {
            $query->select('carnet', 'apellidos', 'nombres')->with(['pensum' => function ($q) {
                $q->with(['carrera' => function($q) {
                    $q->select('id', 'nombre');
                }]);
            }]);
        }, 'estado' => function($q) { $q->select('id','nombre'); }])->get()
            ->map(function($item) {
                return [
                    'pensum_id' => $item->id,
                    'carnet_alumno' => $item->alumno->carnet,
                    'nombres_alumno' => $item->alumno->nombres,
                    'apellidos_alumno' => $item->alumno->apellidos,
                ];
            });
    }

    public function enrolled(Request $request) : JsonResponse
    {
        $ids = $request->input('ids');
        $cicloActivo = $this->getActiveCycle();
        $carnet = Auth::user()->persona->usertable->carnet;

        try {
            $notas = AlumnoNotaCargaAcademica::where(function($query) use ($carnet, $cicloActivo) {
                $query->where('carnet', $carnet)
                    ->where('ciclo_id', $cicloActivo)
                    ->whereNotNull('deleted_at');
            })->count();

            if($notas > 0) {
                return $this->response_error([], 'El alumno ya posee materias registradas en el ciclo activo.', 503);
            }

            $asesorias = Asesoria::where('carnet', $carnet)->first();
            if($asesorias) {
                return $this->response_error([], 'El alumno ya posee una asesoria registrada en el ciclo activo.', 503);
            }

            DB::beginTransaction();
            $asesoria = Asesoria::create([
                'carnet' => $carnet,
                'ciclo_id' => $cicloActivo,
                'estado_id' => Asesoria::ASESORIA_ESTADO_ENVIADA,
            ]);

            $idsCollections = collect($ids)->map(function($id) {
                return[
                    'carga_academica_id' => $id,
                    'estado_id' => Asesoria::ASESORIA_ESTADO_APROBADA,
                ];
            });
            $asesoria->detalles()->createMany($idsCollections->toArray());
            DB::commit();
            return $this->response_http([],'¡Proceso completado con éxito! La asesoría ha sido creada y se ha enviado para revisión administrativa.');
        } catch (\Throwable $th) {
            DB::rollBack();
            return $this->response_error([$th->getMessage()], 'El servidor está experimentando dificultades. Por favor, comunícate con el administrador para obtener asistencia.', 503);
        }
    }

    public function updateAsesoria (Request $request, $id)
    {
        DB::beginTransaction();
        try {
            $estado = Estado::where('codigo', $request->input('status'))->first();
            Asesoria::where('id', $id)->update([
                'estado_id' => $estado->id,
            ]);

            if($estado->codigo == Estado::FINALIZADA) {
                $asesoria = Asesoria::where('id', $id)->with(['detalles'])->first();
                $carnet = $asesoria->carnet;

                $cargasAcademicas = $asesoria->detalles->map(function($detalle) use ($carnet) {
                    return [
                        'estado_id' => 3,
                        'carnet' => $carnet,
                        'matricula_id' => 1,
                        'deleted_at' => null,
                        'carga_academica_id' => $detalle->carga_academica_id,
                    ];
                });

                $asesoria->estado_id = 1;
                $asesoria->save();
                DB::table('notas')->insert($cargasAcademicas->toArray());
                DB::table('cuotas')->insert([
                    'carnet' => $carnet,
                    'ciclolectivo' => $asesoria->ciclo_id,
                    'cuota1' => 'PENDIENTE',
                    'cuota2' => 'PENDIENTE',
                    'cuota3' => 'PENDIENTE',
                    'cuota4' => 'PENDIENTE',
                    'cuota5' => 'PENDIENTE',
                    'cuota6' => 'PENDIENTE',
                ]);
                DB::commit();
                return response()->json([
                    'message' => 'Operación exitosa: La aceptacion de la asesoría se ha procesado sin inconvenientes'
                ]);
            }

            DB::commit();
            return response()->json([
                'message' => 'Operación exitosa: La aceptacion de la asesoría se ha procesado sin inconvenientes'
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error($th->getMessage());
            return response()->json([
                'message' => 'Tenemos problemas con el servidor, intente mas tarde'
            ], 503);
        }
    }
}
