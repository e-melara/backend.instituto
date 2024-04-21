<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Materia extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre',
        'codigo',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
    ];

    public function configuracion_nota()
    {
        return $this->hasOne(ConfiguracionNota::class, 'id', 'id_config_nota');
    }

    public function configuracion_porcentaje ()
    {
        return $this->hasOne(ConfiguracionPorcentaje::class, 'id', 'id_porcentaje_nota');
    }
}
