<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Carrera;
use App\Models\Pensum;
use App\Models\Plan;

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
            'plan_id' => Plan::factory(),
            'carrera_id' => Carrera::factory(),
        ];
    }
}
