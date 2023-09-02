<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Docente;

class DocenteFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Docente::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'nombres' => $this->faker->name(),
            'apellidos' => $this->faker->lastName(),
        ];
    }
}
