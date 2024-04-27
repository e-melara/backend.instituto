<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

use App\Models\User;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\ChangePassword;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login(LoginRequest $request)
    {
        try {
            $credentials = request(['email', 'password']);
            $token = JWTAuth::attempt($credentials);

            if (!$token) {
                throw new \Exception('Credenciales no validas');
            }
            return response()->json(compact('token'));
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Credenciales no validas',
            ], 401);
        }
    }

    public function logout()
    {
        Auth::logout();
        JWTAuth::invalidate();
        return response()->json([
            'message' => 'Successfully logged out',
        ]);
    }

    public function changePassword(ChangePassword $request)
    {
        $id = Auth::user()->id;
        $credentials = $request->only(['new_password', 'current_password', 'new_confirm_password']);

        $auth = User::find($id);
        if(!Hash::check($credentials['current_password'], $auth->password)) {
            return response()->json([
                'message' => 'Contraseña actual es incorrecta',
            ], 500);
        }

        if(Hash::check($credentials['new_password'], $auth->password)) {
            return response()->json([
                'message' => 'La nueva contraseña no puede ser igual a la actual',
            ], 500);
        }

        $auth->password = Hash::make($credentials['new_password']);
        $auth->save();

        return response()->json([
            'message' => 'Contraseña actualizada correctamente',
        ]);
    }
}
