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
        Schema::create('carga_academica_histories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('carga_academica_id')->constrained('carga_academicas')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreignId('user_created')->constrained('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->string('key_note', 30);

            $table->json('details');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carga_academica_histories');
    }
};
