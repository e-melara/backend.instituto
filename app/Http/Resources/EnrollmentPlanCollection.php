<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Log;

/**
 * Class EnrollmentPlanCollection
 * @package App\Http\Resources
 */

class EnrollmentPlanCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request)
    {
        return $this->collection->transform(function($collection) {
            $requisitos = isset($collection->prerrequisito) ?
                explode(',', $collection->prerrequisito) :
                [0];

            return [
                'id' => $collection->id,
                'uv' => $collection->uv,
                'ciclo' => $collection->ciclo,
                'estado' => $collection->estado,
                'no_ciclo' => $collection->no_ciclo,
                'no_orden' => $collection->no_orden,
                'requisitos' => $collection->prerrequisito,
                'curso_id' => $collection->materia->id,
                'curso_codigo' => $collection->materia->codigo,
                'curso_nombre' => $collection->materia->nombre,
                'requisitos_array' => array_map('intval', $requisitos),
            ];
        });
    }
}
