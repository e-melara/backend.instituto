<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;

// Controllers
use App\Http\Controllers\API\V1\AlumnoMateria;
use App\Http\Controllers\API\V1\AlumnoController;
use App\Http\Controllers\API\V1\PensumController;
use App\Http\Controllers\API\V1\RefreshTokenController;
use App\Http\Controllers\API\V1\MateriasDocentesController;

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
    Route::post('change/password', 'changePassword');
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
        Route::controller(AlumnoMateria::class)->group(function () {
            Route::get('materias', 'getMaterias');
            Route::get('materias/{id}', 'getMateria');
        });
    });
    Route::group(['prefix' => 'pensum'], function(){
        Route::controller(PensumController::class)->group(function() {
            Route::post('/', 'store');
        });
    });
    Route::group(['prefix' => 'materias'], function() {
        Route::controller(MateriasDocentesController::class)->group(function() {
            Route::get('/docentes', 'getMateriasDocentes');
            Route::get('/{id_carga}/carga', 'getAlumnosCargasAcademica');
            Route::get('/{materia}', 'getMateriasNotes');
        });
    });
});
