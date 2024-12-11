<?php

namespace App\Http\Controllers\API\V1;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

use App\Models\Nota;
use App\Models\Alumno;
use App\Traits\PensumTrait;
use App\Models\CargaAcademica;
use App\Http\Controllers\Controller;
use App\Http\Resources\AcademicLoadsCollection;
use App\Http\Resources\EnrollmentPlanCollection;
use App\Models\Materia;

class AlumnoController extends Controller
{
    use PensumTrait;

    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    public function egreso() {
        $carnet = Auth::user()->persona->usertable->carnet;
        $responseToTheRequest = Nota::where('carnet', $carnet)
            ->whereHas('cargaAcademica', function($query) {
                $query->whereHas('materia', function($query) {
                    $query->where('is_egresado', true);
                });
            })
            ->with([
                'cargaAcademica' => function($q) {
                    $q->select('id', 'materia_id');
                    $q->with(['materia' => function($q) {
                        $q->select('id', 'nombre', 'codigo');
                    }]);
                },
                'estado' => function($q) {
                    $q->select('id', 'nombre');
                }
            ])
            ->select('carga_academica_id', 'estado_id', 'nota_1', 'nota_2', 'nota_3', 'nota_4', 'carnet')
            ->get();

        return self::response_http($responseToTheRequest);
    }

    /**
     * @param string $carnet
     * @param $pensum
     * @return mixed
     */
    public function pensum($id) {
        try {
            $carnet = $id;
            if(strcmp($carnet, 'me') === 0) {
                $carnet = Auth::user()->persona->usertable->carnet;
            }

            $alumno = Alumno::find($carnet);
            if(is_null($alumno)) {
                return self::response_error([], 'No se encontró el alumno', 404);
            }

            $carrera = $alumno->pensum->last()->carrera;
            $pensum = $alumno->pensum->last()->pensumDetalles->load('materia');
            $collectionSubjects = self::checkTheSubjects($carnet, $pensum);

            $academicLoads = [];
            $activeAdvice = $this->checkAsesoria($collectionSubjects, $carnet);
            if($activeAdvice['status'] === 'STUDENT_CAN_ENROLL') {
                $academicLoads = $this->getPossibleAcademicLoads($collectionSubjects, $alumno->seccion);
            }


            $responseToTheRequest = [
                'carrera' => $carrera,
                'activeAdvice' => $activeAdvice,
                'academicLoads' => new AcademicLoadsCollection(collect($academicLoads)),
                'pensum' => new EnrollmentPlanCollection(collect($collectionSubjects))
            ];

            if(strcmp($carnet, 'me') != 0){
                $responseToTheRequest['student'] = $alumno->only(['carnet', 'nombres', 'apellidos']);
            }

            return self::response_http($responseToTheRequest);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Error al obtener el pensum del alumno',
                'error' => $th->getMessage()
            ], 500);
        }
    }
}
