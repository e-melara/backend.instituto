<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Alumno;
use App\Models\Asesoria;
use App\Models\Ciclo;
use App\Models\Estado;

class AsesoriaFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Asesoria::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'alumno_id' => Alumno::factory(),
            'ciclo_id' => Ciclo::factory(),
            'estado_id' => Estado::factory(),
        ];
    }
}
