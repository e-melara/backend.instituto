<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {}

    public function store(Request $request)
    {}

    public function show(string $id)
    {
        return User::find($id);
    }

    public function update(Request $request, string $id)
    {}
    
    public function destroy(string $id)
    {}
}
