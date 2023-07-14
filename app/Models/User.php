<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;
use Spatie\Permission\Traits\HasRoles;

/**
 * @OA\Schema(
 *     schema="UserSchema",
 *     @OA\Property(property="id", type="integer", readOnly="true", example="1"),
 *     @OA\Property(property="email", type="string", readOnly="true", format="email", description="User unique email address", example="user@gmail.com"),
 *     @OA\Property(property="last_login", type="string"),
 *     @OA\Property(property="is_suspended", type="bool"),
 *     @OA\Property(property="token_valid_after", type="string"),
 *     @OA\Property(property="two_factor_status", type="bool"),
 *     @OA\Property(property="verified", type="bool"),
 *     @OA\Property(property="created_at", type="string"),
 *     @OA\Property(property="updated_at", type="string"),
 * )
 *
 * @OA\Schema(
 *     schema="LoginUserSchema",
 *     @OA\Property(property="email", type="string", example="user@gmail.com"),
 *     @OA\Property(property="password", type="string"),
 * )
 *
 * @OA\Schema(
 *     schema="LoginResponseSchema",
 *     @OA\Property(property="token", type="string", readOnly="true", description="token"),
 * )
 *
 * Class User
 *
 */

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
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

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        // 'password' => 'hashed',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
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
