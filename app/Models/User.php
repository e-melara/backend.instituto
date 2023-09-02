<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
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
        $permissionViaRoles = collect($this->getAllPermissions());
        return [
            "roles" => $permissionViaRoles->map(function($rol) {
                return $rol->name;
            }),
            "perfil"=> $this->getRoleNames()
        ];
    }

    public function rol(): BelongsToMany
    {
        return $this->belongsToMany(Rol::class);
    }
}
