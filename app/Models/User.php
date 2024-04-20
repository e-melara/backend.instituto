<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;
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

    // public function rol(): BelongsToMany
    // {
    //     return $this->belongsToMany(Rol::class);
    // }

    public function persona(): HasOne
    {
        return $this->HasOne(UserPersona::class);
    }

    private function getUsertablesType(HasOne $persona) {
        $usertable = $persona->first();
        $type = $usertable->usertable_type;

        switch ($type) {
            case 'App\Models\Alumno':
            case 'App\Models\Docente':
                $persona = $usertable->usertable()->first();
                return [
                    "nombre" => $persona->nombres,
                    "apellido" => $persona->apellidos,
                ];
            default:
                return null;
        }
    }
}
