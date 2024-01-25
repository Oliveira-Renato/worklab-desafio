<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exame extends Model
{
    protected $fillable = ['codigo', 'descricao', 'valor', 'paciente_numero_atendimento'];
    public function paciente()
    {
        return $this->belongsTo(Exame::class);
    }
}
