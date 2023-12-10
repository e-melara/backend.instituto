<?php

namespace App\Http\Controllers\API\V1;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

use App\Models\Alumno;

class AlumnoController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }
    
    public function pensum($id) {
        try {
            DB::connection()->enableQueryLog();
            $carnet = $id;
            if(strcmp($carnet, 'me') === 0) {
                $carnet = Auth::user()->persona->usertable->carnet;
            }

            $alumno = Alumno::where('carnet', $carnet)->whereHas('pensum')->first();
            $queries = DB::getQueryLog();
            if(is_null($alumno)) {
                return response()->json([
                    'message' => 'El alumno no tiene pensum',
                ], 404);
            }

            $carrera = $alumno->pensum->last()->carrera;

            $pensum = $alumno->pensum->last()->pensumDetalles->load('materia');
            $pensum = $pensum->map(function($item) {
                return [
                    'creditos' => $item->uv,
                    'semestre' => $item->ciclo,
                    'no_orden' => $item->no_orden,
                    'pensum_materia_id' => $item->id,
                    'pensum_id' => $item->pensum_id,
                    'materia_id' => $item->materia->id,
                    'nombre_materia' => $item->materia->nombre,
                    'codigo_materia' => $item->materia->codigo,
                    'requisitos' => $item->prerrequisito,
                ];
            });

            Log::info($queries);
            return response()->json([
                'carrera' => [
                    'id' => $carrera->id,
                    'nombre' => $carrera->nombre,
                    'codigo' => $carrera->codigo
                ],
                'pensum' => $pensum
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Error al obtener el pensum del alumno',
                'error' => $th->getMessage()
            ], 500);
        }
    }
}
