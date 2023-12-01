<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class LoginRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|string|exists:users|max:255',
            'password' => 'required|string|min:6',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'message' => 'Credenciales no validas',
            'errors' => $validator->errors(),
        ]));
    }

    public function messages() : array
    {
        return [
            'email.required' => 'Usuarios es requerido',
            'email.exists' => 'Usuario incorrecto',
            'password.required' => 'Contraseña es requerida',
            'password.min' => 'La contraseña debe tener al menos 6 caracteres',
        ];
    }
}
