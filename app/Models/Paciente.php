<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Paciente extends Model
{
    protected $fillable = ['nome_completo', 'sexo', 'email', 'celular'];

    public function exames()
    {
        return $this->hasMany(Exame::class, 'paciente_numero_atendimento', 'numero_atendimento');
    }
}
