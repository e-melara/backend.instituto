<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\AlumnoPensum;

class AlumnoPensumFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = AlumnoPensum::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'alumno_id' => $this->faker->numberBetween(-10000, 10000),
            'pensum_id' => $this->faker->numberBetween(-10000, 10000),
            'active' => $this->faker->boolean,
        ];
    }
}
