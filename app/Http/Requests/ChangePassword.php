<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ChangePassword extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'current_password' => 'required|string|min:8',
            'new_password' => 'required|string|min:8',
            'new_confirm_password'  => 'required_with:new_password|same:new_password',
        ];
    }

    public function messages() : array
    {
        return [
            'current_password.required' => 'Contraseña actual es requerida',
            'current_password.min' => 'La contraseña actual debe tener al menos 8 caracteres',
            'new_password.required' => 'Nueva contraseña es requerida',
            'new_password.min' => 'La nueva contraseña debe tener al menos 8 caracteres',
            'new_password.confirmed' => 'Las contraseñas no coinciden',
            'new_confirm_password.required_with' => 'Confirmar nueva contraseña es requerida',
            'new_confirm_password.same' => 'Las contraseñas no coinciden',
        ];
    }

    public function failedValidation(Validator $validator) {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $validator->errors(),
        ])->setStatusCode(422));
    }
}
