<?php

namespace App\Http\Controllers\API\V1;

use App\Models\Materia;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Nota;
use App\Models\CargaAcademica;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;

class MateriasDocentesController extends Controller
{
    public function getMateriasDocentes(Request $request) {
        $docente = Auth::user()->persona->usertable;
        $cargas = CargaAcademica::where('docente_id', $docente->id)
            ->whereNull('deleted_at')
            ->with(['materia', 'horario'])
            ->get();

        return response()->json([
            "cargas" => $cargas,
        ]);
    }

    public function getAlumnosCargasAcademica(Request $request, $carga_id) {
        $notas = Nota::where('carga_academica_id', $carga_id)
            ->with(['alumno' => function($query) {
                $query->select('apellidos', 'carnet', 'nombres');
            }])
            ->select('id', 'carnet', 'estado_id', 'carga_academica_id')
            ->get();

        return response()->json([
            'notas' => $notas
        ]);
    }

    public function getMateriasNotes($materia): JsonResponse
    {
        $m = Materia::find($materia);
        $config = $m->configuracion_nota()->first();

        $arrayAssocColumns = array(
            'parcial' => 'Parcial',
            'trabcam' => 'Trabajo de campo',
            'exacort' => 'Examen corto',
            'exafina' => 'Examen final',
            'lab' => 'Laboratorio',
        );

        $exclude = collect([
            'id', 'ncolumnas', 'notaciclo', 'notafinal_teoria', 'notapract1', 'notafinal_teoria_repo', 'notafinal_teoriatotal',
            'notapract2', 'notafinal_practica', 'notafinal_teoria+practica', 'examenreposicion', 'notapract4', 'notapract3'
        ]);
        $arrayLabs = [];
        $arrayResponse = collect([]);
        $arrayPracticas = collect([]);

        try {
            collect($config)->filter(function($item, $key) {
                return !(strcasecmp($item, '-') === 0 || str_contains($key, 'x100'));
            })->forget($exclude)->groupBy(function($item, $key) {
                return substr($key, 0, 7);
            })->each(function($item, $key) use (&$arrayResponse, $arrayAssocColumns, &$arrayLabs, $arrayPracticas) {
                $keyAssoc = @$arrayAssocColumns[$key];
                if (!str_starts_with($key, 'lab') && isset($keyAssoc)) {
                    if(count($item) === 1) {
                        $arrayResponse->put($keyAssoc, $item[0]);
                    } else {
                        $array = [];
                        foreach ($item as $key => $v) {
                            $name = $keyAssoc . ' ' . ($key + 1);
                            $array[$name] = $v;
                        }
                        $arrayResponse->put($keyAssoc, $array);
                    }
                } else if(str_starts_with($key, 'lab')) {
                    $indexLab = intval(substr($key, 3, 1));
                    $arrayLabs['Laboratorio '.$indexLab] = $item[0];
                } else {
                    $arrayPracticas->put( mb_strtoupper($key, 'UTF-8') , $item[0]);
                }
            });

            if(count($arrayLabs) > 0) {
                $arrayResponse->put('Laboratorios', $arrayLabs);
            }

            if ($arrayPracticas->count() > 0) {
                $arrayResponse->put('Practicas', $arrayPracticas);
            }

            return response()->json([
                'notas' => $arrayResponse,
            ]);
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            return response()->json([
                'message' => 'Error al obtener la configuración de notas, pongase en contacto con el administrador del sistema.'
            ], 500);
        }
    }
}
