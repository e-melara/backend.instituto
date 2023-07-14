<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\CargaAcademica;
use App\Models\Ciclo;
use App\Models\Docente;
use App\Models\Horario;
use App\Models\Materia;

class CargaAcademicaFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CargaAcademica::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'docente_id' => Docente::factory(),
            'materia_id' => Materia::factory(),
            'horario_id' => Horario::factory(),
            'ciclo_id' => Ciclo::factory(),
        ];
    }
}
