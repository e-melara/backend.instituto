<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\Asesoria;
use Illuminate\Http\Request;

class AsesoriaController extends Controller
{
    public function getList(Request $request) {
        $estado = $request->input('estado') ?? '9';
        $perPage = $request->input('per_page') ?? 10;

        $query = Asesoria::query();

        $query->where('estado_id', $estado);
        $query->when($request->input('q'), function($query, $search) {
            $query->where('carnet', 'like', '%'.$search.'%')
                ->orWhereHas('alumno', function($query) use ($search) {
                    $query->where('nombres', 'like', '%'.$search.'%')
                        ->orWhere('apellidos', 'like', '%'.$search.'%');
                });
        });

        $query->with(['alumno' => function($query) {
            $query->select('carnet', 'nombres', 'apellidos');
            $query->with(['pensum' => function($query) {
                $query->with(['carrera' => function($query) {
                    $query->select('id', 'nombre');
                }]);
            }]);
        }]);

        return response()->json(
            $query->paginate($perPage)
         );
    }
}
