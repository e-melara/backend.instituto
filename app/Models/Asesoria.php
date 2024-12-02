<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

use App\Models\VCargaAcademicaMateria;

class Asesoria extends Model
{
    use HasFactory, SoftDeletes;

    const ASESORIA_ESTADO_ENVIADA = '007';
    const ASESORIA_ESTADO_EN_ACADEMICA = '008';
    const ASESORIA_ESTADO_EN_PAGADURIA = '009';
    const ASESORIA_ESTADO_APROBADA = '001';
    const ASESORIA_ESTADO_RECHAZADA = '004';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'carnet',
        'ciclo_id',
        'estado_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'carnet' => 'string',
        'ciclo_id' => 'integer',
        'estado_id' => 'integer',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function alumno(): BelongsTo
    {
        return $this->belongsTo(Alumno::class, 'carnet');
    }

    public function ciclo(): BelongsTo
    {
        return $this->belongsTo(Ciclo::class);
    }

    public function estado(): BelongsTo
    {
        return $this->belongsTo(Estado::class);
    }

    public function detalles() {
        return $this->hasMany(AsesoriaDetalle::class);
    }
}
