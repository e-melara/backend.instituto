<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class AcademicLoadsCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request)
    {
        return $this->collection->transform(function($collection) {
            return [
                'id' => $collection->id,
                'ciclo' => $collection->ciclo_id,
                'horario' => $collection->horario_id,
                'teacher_names' => $collection->docente->nombres,
                'teacher_lasts' => $collection->docente->apellidos,
                'subject_name' => $collection->materia->nombre,
                'subject_code' => $collection->materia->codigo,
            ];
        });
    }
}
