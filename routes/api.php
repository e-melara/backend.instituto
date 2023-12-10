<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;

// Controllers
use App\Http\Controllers\API\V1\AlumnoController;
use App\Http\Controllers\API\V1\RefreshTokenController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('logout', 'logout');
});

Route::group(['prefix' => 'v1'], function () {
    Route::middleware('jwt.refresh')->group(function () {
        Route::controller(RefreshTokenController::class)->group(function () {
            Route::get('refresh', 'refresh');
        });
    });
    Route::group(['prefix' => 'alumno'], function () {
        Route::controller(AlumnoController::class)->group(function () {
            Route::get('{id}/pensum', 'pensum');
        });
    });
});
