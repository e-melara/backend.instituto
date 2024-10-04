<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CargaAcademicaHistory extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'details'   => 'array'
    ];

    public function carga_academica() {
        return $this->belongsTo(CargaAcademica::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
