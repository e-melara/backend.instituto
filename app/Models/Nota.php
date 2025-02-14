<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Nota extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'carnet',
        'estado_id',
        'carga_academica_id',
        'deleted_at',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'estado_id' => 'integer',
        'carga_academica_id' => 'integer',
        'carnet' => 'string',
    ];

    public function alumno(): BelongsTo
    {
        return $this->belongsTo(Alumno::class, 'carnet')
            ->orderBy('carnet');
    }

    public function cargaAcademica(): BelongsTo
    {
        return $this->belongsTo(CargaAcademica::class);
    }

    public function estado(): BelongsTo
    {
        return $this->belongsTo(Estado::class);
    }
}
