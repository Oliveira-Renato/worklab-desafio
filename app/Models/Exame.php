<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exame extends Model
{
    protected $fillable = ['codigo', 'descricao', 'valor'];
    public function paciente()
    {
        //return $this->belongsTo(Exame::class);
        return $this->belongsToMany(Paciente::class, 'paciente_exame', 'exame_codigo', 'paciente_numero_atendimento');
    }
}
