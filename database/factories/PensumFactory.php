<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Carrera;
use App\Models\Pensum;

class PensumFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Pensum::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'plan' => $this->faker->regexify('[A-Za-z0-9]{10}'),
            'carrera_id' => Carrera::factory(),
            'nombre' => $this->faker->regexify('[A-Za-z0-9]{50}'),
        ];
    }
}
