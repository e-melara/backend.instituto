<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Ciclo;

class CicloFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Ciclo::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'nombre' => $this->faker->year() . ' - ' . $this->faker->randomDigit(),
            'codigo' => $this->faker->regexify('[A-Za-z0-9]{5}'),
        ];
    }
}
