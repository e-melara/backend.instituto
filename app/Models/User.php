<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Log;
use Laravel\Sanctum\HasApiTokens;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    protected $fillable = [
        // 'name',
        'email',
        'password',
        'last_login',
        'is_suspended',
        'token_valid_after',
        'two_factor_status',
        'verified',
    ];

    protected $hidden = [
        'password',
    ];

    protected $casts = [
        // 'password' => 'hashed',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        $persona = self::getUsertablesType($this->persona());
        $permissionViaRoles = collect($this->getAllPermissions());
        return [
            "roles" => $permissionViaRoles->map(function($rol) {
                return $rol->name;
            }),
            "perfil"=> $this->getRoleNames(),
            "persona" => $persona,
        ];
    }

    public function rol(): BelongsToMany
    {
        return $this->belongsToMany(Rol::class);
    }

    public function persona(): HasOne
    {
        return $this->HasOne(UserPersona::class);
    }

    private function getUsertablesType(HasOne $persona) {
        $usertable = $persona->first();
        if(strcmp($usertable->usertable_type, 'App\\Models\\Alumno')) {
            $alumno = $usertable->usertable()->first();
            return [
                "nombre" => $alumno->nombres,
                "apellido" => $alumno->apellidos,
            ];
        } else if(strcmp($usertable->usertable_type, 'App\\Models\\Docente')) {
            $docente = $usertable->usertable()->first();
            return [
                "nombre" => $docente->nombres,
                "apellido" => $docente->apellidos,
            ];
        } else {
            return null;
        }
    }
}
