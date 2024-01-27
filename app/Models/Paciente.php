<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Paciente extends Model
{
    protected $fillable = ['nome_completo', 'sexo', 'email', 'celular'];

    public function exames()
    {
        return $this->belongsToMany(Exame::class, 'paciente_exame', 'paciente_numero_atendimento', 'exame_codigo');
    }
}