<?php

namespace App\Http\Controllers\API\V1;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Resources\AlumnoMateriaResource;

use App\Models\Nota;
use App\Models\AlumnoNotaMateriaView as NotaView;

class AlumnoMateria extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    public function getMaterias() {
        $carnet = Auth::user()->persona->usertable->carnet;
        $notas  = NotaView::where('carnet', $carnet)->get();

        return new AlumnoMateriaResource($notas);
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
