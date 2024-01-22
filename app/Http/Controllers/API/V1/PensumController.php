<?php

namespace App\Http\Controllers\API\V1;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

use App\Models\Asesoria;
use App\Models\AsesoriaDetalle;

class PensumController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    public function store(Request $request) {
        $all = $request->all();
        $carnet = Auth::user()->persona->usertable->carnet;

        // $asesoria = Asesoria::create([
        //     "carnet"        => $carnet,
        //     "estado_id"     => ""
        // ]);

        return response()->json([
            "message" => "message for controller"
        ]);
    }
}
