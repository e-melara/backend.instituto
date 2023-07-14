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
        'asesoria_detalle_id',
        'nota',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'asesoria_detalle_id' => 'integer',
        'nota' => 'float',
    ];

    public function asesoriaDetalle(): BelongsTo
    {
        return $this->belongsTo(AsesoriaDetalle::class);
    }
}
