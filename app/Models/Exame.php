<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exame extends Model
{
    protected $fillable = ['descricao', 'valor'];
    public function paciente()
    {
        return $this->belongsTo(Exame::class);
    }
}
