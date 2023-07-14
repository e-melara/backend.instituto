<?php

namespace Database\Seeders;

use App\Models\CargaAcademica;
use Illuminate\Database\Seeder;

class CargaAcademicaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CargaAcademica::factory()->count(5)->create();
    }
}
