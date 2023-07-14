<?php

namespace Database\Seeders;

use App\Models\Pensum;
use Illuminate\Database\Seeder;

class PensumSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Pensum::factory()->count(5)->create();
    }
}
