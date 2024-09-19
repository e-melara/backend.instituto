<?php

namespace App\Http\Controllers\API\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

use App\Models\Ciclo;
use App\Models\Estado;
use App\Models\Asesoria;
use App\Models\AsesoriaDetalle;
use Illuminate\Support\Facades\DB;

class PensumController extends Controller
{
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
}
