<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\LoginRequest;
use App\Notifications\UserCodeNotification;
use App\User;
use App\VerificationCode;
use Carbon\Carbon;

class LoginController extends Controller
{
    public function __invoke(LoginRequest $request)
    {
        $userExist = User::where('customer_id', $request->get('customerId'))->first();

        if ($userExist) {
            $verificationCode = VerificationCode::create([
                'user_id' => $userExist->id,
                'code' => rand(10000, 99999),
                'due_date' => Carbon::now()->addMinutes(5)
            ]);

            $userExist->notify(new UserCodeNotification($verificationCode->code));

            return response()->json(['result' => true, 'user' => $userExist]);
        }

        return response()->json(['result' => false, 'message' => 'Something went wrong.'], 400);
    }
}
