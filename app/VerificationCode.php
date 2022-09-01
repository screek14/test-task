<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VerificationCode extends Model
{
    protected $fillable = [
        'user_id',
        'code',
        'due_date'
    ];

    public function user()
    {
        return $this->hasOne(User::class);
    }
}
