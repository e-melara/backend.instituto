<?php

namespace App\Http\Controllers\API\V1;

use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class RefreshTokenController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.refresh');
    }

    public function refresh()
    {
        try {
            $token = JWTAuth::parseToken()->refresh();
        } catch (\Throwable $th) {
            return response()->json(['error' => 'Token inválido'], 401);
        }
        
        return response()->json(compact('token'));
    }
}
