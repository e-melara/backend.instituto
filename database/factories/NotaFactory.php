<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\AsesoriaDetalle;
use App\Models\Nota;

class NotaFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Nota::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'asesoria_detalle_id' => AsesoriaDetalle::factory(),
            'nota' => $this->faker->randomFloat(0, 0, 9999999999.),
        ];
    }
}
