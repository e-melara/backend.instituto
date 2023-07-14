<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Asesoria;
use App\Models\AsesoriaDetalle;
use App\Models\CargaAcademica;
use App\Models\Estado;

class AsesoriaDetalleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = AsesoriaDetalle::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'asesoria_id' => Asesoria::factory(),
            'carga_academica_id' => CargaAcademica::factory(),
            'estado_id' => Estado::factory(),
        ];
    }
}
