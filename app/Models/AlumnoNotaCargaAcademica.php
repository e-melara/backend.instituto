<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AlumnoNotaCargaAcademica extends Model
{
    use HasFactory;

    protected $table = 'alumno_notas_cargas_academicas';

    public function docente()
    {
        return $this->belongsTo(Docente::class, 'docente_id');
    }

    public function alumno()
    {
        return $this->belongsTo(Alumno::class, 'carnet');
    }
}
