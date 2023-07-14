<?php

namespace Database\Seeders;

use App\Models\Ciclo;
use Illuminate\Database\Seeder;

class CicloSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Ciclo::factory()->count(5)->create();
    }
}
