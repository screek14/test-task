<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\VerificationCardRequest;

class VerificationCardController extends Controller
{
    public function __invoke(VerificationCardRequest $request)
    {
        return response()->json(['success' => true]);
    }
}
