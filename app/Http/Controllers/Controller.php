<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function response_http($data = array(), $message = 'Data berhasil diambil', $status = 200) {
        return response()->json([
            'ok' => true,
            'message' => $message,
            'data' => $data
        ], $status);
    }

    public function response_error($error = array(), $message = 'Data gagal diambil', $status = 400) {
        return response()->json([
            'ok' => false,
            'message' => $message,
            'error' => $error
        ], $status);
    }
}
