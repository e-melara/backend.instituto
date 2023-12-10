<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\belongsToMany;

class Alumno extends Model
{
    use HasFactory;
    
    protected $primaryKey = 'carnet';
    public $incrementing = false;
    protected $keyType = 'string';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombres',
        'apellidos',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
    ];

    public function userPersonas(): MorphMany
    {
        return $this->morphMany(UserPersona::class, 'userpersonaable');
    }
    
    public function pensum(): belongsToMany
    {
        return $this->belongsToMany(Pensum::class, 'alumno_pensums', 'carnet', 'pensum_id');
    }
}
