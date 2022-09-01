<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class VerificationCardRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'cvv' => 'required|numeric|between:1,999',
            'name' => 'required|max:25',
            'year' => 'required|numeric|between:22,99',
            'month' => 'required|numeric|between:01,12'
        ];
    }
}
