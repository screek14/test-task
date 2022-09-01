<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\RegistrationRequest;
use App\User;
use Mockery\Exception;

class RegistrationController extends Controller
{
    public function __invoke(RegistrationRequest $request)
    {
        try {
            if (User::where('email', $request->email)->exists()) {
                throw new Exception('User with this email exists');
            }

            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'customer_id' => rand(100000000,999999999)
            ]);

            return response()->json(['success' => true]);
        } catch (\Throwable $exception) {
            return response()->json(['success' => false, 'error' => $exception->getMessage()], 400);
        }
    }
}
