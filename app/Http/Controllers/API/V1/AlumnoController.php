<?php

namespace App\Http\Controllers\API\V1;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

use App\Models\Nota;
use App\Models\Alumno;
use App\Models\Asesoria;
use App\Traits\PensumTrait;
use App\Models\AsesoriaDetalle;
use App\Models\CargaAcademica;
use App\Http\Controllers\Controller;
use App\Http\Resources\AcademicLoadsCollection;
use App\Http\Resources\EnrollmentPlanCollection;

class AlumnoController extends Controller
{
    use PensumTrait;

    public function __construct()
    {
        $this->middleware('jwt.auth');
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
            if($activeAdvice) {
                $academicLoads = $this->getPossibleAcademicLoads($collectionSubjects);
            }

            Log::info($carnet);

            $responseToTheRequest = [
                'carrera' => $carrera,
                'activeAdvice' => $activeAdvice,
                'academicLoads' => new AcademicLoadsCollection(collect($academicLoads)),
                'pensum' => new EnrollmentPlanCollection(collect($collectionSubjects))
            ];

            return self::response_http($responseToTheRequest);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Error al obtener el pensum del alumno',
                'error' => $th->getMessage()
            ], 500);
        }
    }
}
