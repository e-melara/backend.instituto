<?php

namespace App\Http\Controllers\API\V1;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

use App\Models\Nota;
use App\Models\Materia;
use App\Traits\PensumTrait;
use App\Models\CargaAcademica;
use App\Models\CargaAcademicaHistory;
use App\Http\Controllers\Controller;
use App\Models\Alumno;

class MateriasDocentesController extends Controller
{
    use PensumTrait;
    public function getMateriasDocentes(Request $request) {
        $docente = Auth::user()->persona->usertable;

        $cargas = CargaAcademica::where('docente_id', $docente->id)
            ->whereNull('deleted_at')
            ->where('ciclo_id', $this->getActiveCycle())
            ->with(['materia' => function($q) {
                $q->with(['carrera']);
            }, 'horario'])
            ->get();

        return response()->json([
            "cargas" => $cargas,
        ]);
    }

    public function getAlumnosCargasAcademica(Request $request, $carga_id) {
        $notas = Nota::where('carga_academica_id', $carga_id)
            ->with(['alumno' => function($query) {
                $query->select('apellidos', 'carnet', 'nombres');
            }, 'estado'])
            ->orderBy('carnet')
            ->get();

        return response()->json([
            'notas' => $notas
        ]);
    }

    public function getMateriasNotes($carga_academica_id): JsonResponse
    {
        $cargaAcademica = CargaAcademica::where('id', $carga_academica_id)
            ->with(['materia' => function($q) {
                $q->select('id','nombre', 'codigo');
            }, 'docente' => function($q) {
                $q->select('id','nombres', 'apellidos');
            }])
            ->first();

        $m = Materia::find($cargaAcademica->materia->id);
        $config = $m->configuracion_nota()->first();
        $porcentaje = $m->configuracion_porcentaje()->first();

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
        $arrayResponse = collect();
        $arrayPracticas = collect();

        try {
            $notaNotInclude = collect(explode(',', $cargaAcademica->notes_add));
            collect($config)->filter(function($item, $key) {
                return !(strcasecmp($item, '-') === 0 || str_contains($key, 'x100'));
            })->forget($exclude)->groupBy(function($item, $key) {
                return substr($key, 0, 7);
            })->each(function($item, $key) use (&$arrayResponse, $arrayAssocColumns, &$arrayLabs, $arrayPracticas, $notaNotInclude) {
                $keyAssoc = @$arrayAssocColumns[$key];
                if (!str_starts_with($key, 'lab') && isset($keyAssoc)) {
                    if(count($item) === 1) {
                        if (!in_array($item[0], $notaNotInclude->toArray())) {
                            $arrayResponse->put($keyAssoc, $item[0]);
                        }
                    } else {
                        $array = [];
                        foreach ($item as $key => $v) {
                            if(!in_array($v, $notaNotInclude->toArray())) {
                                $name = $keyAssoc . ' ' . ($key + 1);
                                $array[$name] = $v;
                            }
                        }
                        if(count($array) > 0)
                            $arrayResponse->put($keyAssoc, $array);
                    }
                } else if(str_starts_with($key, 'lab')) {
                    if(!in_array($item[0], $notaNotInclude->toArray())) {
                        $indexLab = intval(substr($key, 3, 1));
                        $arrayLabs['Laboratorio '.$indexLab] = $item[0];
                    }
                } else {
                    if(!in_array($item[0], $notaNotInclude->toArray()))
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
                'config' => $porcentaje->id,
                'notas' => $arrayResponse,
                'docente'   => $cargaAcademica->docente,
                'materia'   => $cargaAcademica->materia
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Error al obtener la configuración de notas, pongase en contacto con el administrador del sistema.'
            ], 500);
        }
    }

    private function updateAvgNote(int $carga_academica_id) {
        $cargaAcademica = CargaAcademica::where('id', $carga_academica_id)->with(['materia' => function($q) {
            $q->with('configuracion_porcentaje');
        }])->first();

        $collectioMateria = collect($cargaAcademica->materia->configuracion_porcentaje);

        $configPorcentaje = $collectioMateria->diff(['promedio'])->filter(function($item, $key) {
            return (str_ends_with($key, '_config') && $item !== '0' && !is_null($item));
        });

        if ($configPorcentaje->isNotEmpty()) {
            $rawQueryUpdateNote = "UPDATE notas SET ";
            $rawQueryUpdateAvgEnd = "UPDATE notas SET ";

            $configNotaFinal = $configPorcentaje->filter(function ($item, $key) {
                return str_starts_with($key, 'nota_final_');
            });

            $configPorcentaje->forget($configNotaFinal->keys());
            $configPorcentaje->each(function($config) use (&$rawQueryUpdateNote) {
                $rawQueryUpdateNote .= sprintf('%s, ', $config);
            });

            $configNotaFinal->each(function ($config) use (&$rawQueryUpdateAvgEnd) {
                $rawQueryUpdateAvgEnd .= sprintf('%s, ', $config);
            });

            $rawQueryUpdateNote = substr($rawQueryUpdateNote, 0, -2). sprintf(' WHERE carga_academica_id = %u', $carga_academica_id);
            $rawQueryUpdateAvgEnd = substr($rawQueryUpdateAvgEnd, 0, -2). sprintf(' WHERE carga_academica_id = %u', $carga_academica_id);
            // primero actualizamos los valores de los promedios pequeños
            DB::statement($rawQueryUpdateNote);
            // y luego actualizamos el promedio final
            DB::statement($rawQueryUpdateAvgEnd);

            // verificando si exite promedio
            $columPromedio = trim($collectioMateria->get('promedio'));
            if(isset($columPromedio) && !empty($columPromedio)) {
                $queryUpdateNote = "UPDATE notas SET estado_id = 1 where $columPromedio >= 6 and carga_academica_id = ? and estado_id = ?";
                DB::update($queryUpdateNote, [$carga_academica_id, 3]);
            }
        }
    }

    private function saveHistoryNote(Request $request, $carga_id) {
        $user = Auth::user();
        $notes = $request->input('notes');
        $keyNote = $request->input('name_note');

        CargaAcademicaHistory::create([
            'key_note' => $keyNote,
            'user_created' => $user->id,
            'carga_academica_id' => $carga_id,
            'details' => $notes
        ]);
    }

    public function updateMateriasNotes(Request $request, $carga_academica_id)
    {
        $keyNote = $request->input('key_note');
        $notes = $request->input('notes');
        DB::beginTransaction();
        try {
            // guardado el historial de las notas
            $this->saveHistoryNote($request, $carga_academica_id);

            $notesCollect = collect($notes);
            $rawQueryCase = sprintf('UPDATE notas SET %s = CASE ',
                $keyNote);
            $notesCollect->each(function($note) use (&$rawQueryCase) {
                $rawQueryCase .= sprintf('WHEN carnet = \'%s\' THEN %s ', $note['carnet'], $note['valor']);
            });

            $carnets = $notesCollect->pluck('carnet')->implode(function($carnet) {
                return sprintf('\'%s\'', $carnet);
            }, ',');
            $rawQueryCase .= sprintf('END WHERE carga_academica_id = %s and carnet in (%s)', $carga_academica_id, $carnets);

            DB::statement($rawQueryCase);

            // funcion para actualizar el promedio de notas
            self::updateAvgNote($carga_academica_id);

            $cargaAcademica = CargaAcademica::find($carga_academica_id);

            if($cargaAcademica->notes_add === null):
                $cargaAcademica->notes_add = $keyNote;
            else:
                $cargaAcademica->notes_add = $cargaAcademica->notes_add . ',' . $keyNote;
            endif;
            $cargaAcademica->save();
            DB::commit();
            return response()->json(data: [
                'message' => 'Notas actualizadas correctamente.',
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error($th->getMessage());
            return response()->json([
                'message' => 'Error al actualizar las notas, pongase en contacto con el administrador del sistema.'
            ], 500);
        }
    }

    public function getMateriasNotesHistory(Request $request, $carga_id) {
        $all = CargaAcademicaHistory::where('carga_academica_id', $carga_id)
            ->select('id', 'created_at', 'key_note')
            ->get();

        return response()->json([
            'history' => $all
        ]);
    }

    private function getNameFileMateria($materia) {
        $nameFile = $materia->codigo.'_'.$materia->nombre;
        $nameFile = str_replace(' ', '_', $nameFile);
        return sprintf('%s_%s.pdf', time(), strtoupper($nameFile));
    }

    public function downloadPDFHistory(Request $request, $carga_academica_history) {
        $historial = CargaAcademicaHistory::find($carga_academica_history);
        $carga_academica = $historial->carga_academica;

        $collect = collect($historial->details);
        $carnets = $collect->pluck('carnet');
        $groupBy = $collect->groupBy('carnet');

        $alumnos = Alumno::whereIn('carnet', $carnets)
            ->select('carnet', 'nombres', 'apellidos')
            ->get()
            ->map(function($alumno) use ($groupBy) {
                $nota = $groupBy->get($alumno->carnet);
                return [
                    'carnet' => $alumno->carnet,
                    'nombres' => $alumno->nombres . ' '. $alumno->apellidos,
                    'nota' => $nota[0]['valor']
                ];
            });

        $pdf = PDF::loadView('pdf.carga_academica_history', compact('historial', 'carga_academica', 'alumnos'))
            ->setPaper('letter', 'portrait');

        return $pdf->download($this->getNameFileMateria($carga_academica->materia));
    }
}
