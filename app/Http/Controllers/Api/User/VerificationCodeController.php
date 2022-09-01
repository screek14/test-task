<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\VerificationCodeRequest;
use App\Notifications\UserCodeNotification;
use App\VerificationCode;
use Carbon\Carbon;

class VerificationCodeController extends Controller
{
    public function __invoke(VerificationCodeRequest $request)
    {
        if ($verificationCode = VerificationCode::where('code', $request->code)->first()) {
            if ($verificationCode->due_date > now()) {
                $verificationCode->delete();
                return response()->json(['success' => true]);
            }
            $user = $verificationCode->user;

            $verificationCode->delete();
            $verificationCode = VerificationCode::create([
                'user_id' => $user->id,
                'code' => rand(10000, 99999),
                'due_date' => Carbon::now()->addMinutes(5)
            ]);
            $user->notify(new UserCodeNotification($verificationCode->code));

            return response()->json(['success' => false, 'message' => 'Code has expired'], 400);
        }
        return response()->json(['success' => false, 'message' => 'Something went wrong'], 400);
    }
}
