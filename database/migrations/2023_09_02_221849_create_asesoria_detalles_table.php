<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('asesoria_detalles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('asesoria_id');
            $table->unsignedBigInteger('carga_academica_id');
            $table->unsignedBigInteger('estado_id');
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asesoria_detalles');
    }
};
