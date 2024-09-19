<?php

namespace App\Http\Controllers\API\V1;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

use App\Models\Nota;
use App\Models\Ciclo;
use App\Models\AlumnoNotaCargaAcademica as NotaView;
use App\Traits\PensumTrait;
use Illuminate\Http\Request;

class AlumnoMateria extends Controller
{
    use PensumTrait;

    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    public function getMaterias(Request $request) {
        $carnet = Auth::user()->persona->usertable->carnet;
        $query = NotaView::query();

         $query->where('carnet', $carnet)->with(['docente' => function($q) {
            $q->select('id', 'nombres', 'apellidos');
        }, 'alumno'=> function($q) {
            $q->select('carnet', 'nombres', 'apellidos');
        } ]);

        if($request->has('all') && strcmp($request->input('all'), '0') == 0) {
            $ciclo = $this->getActiveCycle();
            if($ciclo) {
                $query->where('ciclo_id', $ciclo);
            }
        }

        $notas  = $query->get();
        return response()->json([
            'materias' => $notas,
        ], 200);
    }

    public function getMateria($id) {
        try {
            return response()->json([
                'materia'  => Nota::find($id),
                'nota'     => NotaView::find($id)
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al obtener la materia'], 500);
        }
    }
}
