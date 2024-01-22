<?php

namespace App\Http\Controllers\API\V1;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Nota;
use App\Models\CargaAcademica;
use App\Http\Controllers\Controller;

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
}
