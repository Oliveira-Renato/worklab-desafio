<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exame extends Model
{
    use HasFactory;
    protected $primaryKey = 'id';

    protected $fillable = ['codigo', 'descricao', 'valor'];

    public function pacientes()
    {
        return $this->belongsToMany(Paciente::class, 'paciente_exame', 'exame_id', 'paciente_numero_atendimento');
    }
}