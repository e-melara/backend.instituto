<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * @OA\Post(
     *     path="/login",
     *     tags={"Login"},
     *     summary="Login user",
     *     description="Return user token",
     *     @OA\RequestBody(
     *        @OA\JsonContent(ref="#/components/schemas/LoginUserSchema")
     *     ),
     *     @OA\Response(response="200", description="Token", @OA\JsonContent(ref="#/components/schemas/LoginResponseSchema")),
     * )
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = request(['email', 'password']);;
        // $token = Auth::attempt($credentials);
        $token = auth()->attempt($credentials);

        if (!$token) {
            return response()->json([
                'message' => 'Credenciales no validas',
            ], 401);
        }

        // $user = Auth::user();
        return response()->json([
            // 'user' => $user,
            'token' => $token,
        ]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'last_login' => 'login_last',
            'is_suspended' => false,
            'token_valid_after' => 'sdfds51fds',
            'two_factor_status' => false,
            'verified' => true,
        ]);

        return response()->json([
            'message' => 'User created successfully',
            'user' => $user
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            // 'user' => Auth::user(),
            'token' => Auth::refresh(),
        ]);
    }
}
