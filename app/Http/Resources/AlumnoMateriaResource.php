<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class AlumnoMateriaResource extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->collection->map(function ($nota) {
            return [
                'id' => $nota->id,
                'carnet' => $nota->carnet,
                'materia' => $nota->nombre,
                'codigo' => $nota->codigo,
                'config' => $nota->id_config_nota,
                'porcentaje' => $nota->id_porcentaje_nota,
            ];
        })->toArray();
    }
}
