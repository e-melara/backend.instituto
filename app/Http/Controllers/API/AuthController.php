<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = request(['email', 'password']);;
        $token = JWTAuth::attempt($credentials);

        if (!$token) {
            return response()->json([
                'message' => 'Credenciales no validas',
            ], 401);
        }
        return response()->json(compact('token'));
    }

    public function logout()
    {
        Auth::logout();
        JWTAuth::invalidate(); 
        return response()->json([
            'message' => 'Successfully logged out',
        ]);
    }
}
