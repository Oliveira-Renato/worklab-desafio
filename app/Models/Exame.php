<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exame extends Model
{
    use HasFactory;
    protected $primaryKey = 'id'; // Especifica o nome da chave primária

    protected $fillable = ['codigo', 'descricao', 'valor']; // Define os campos que podem ser preenchidos em massa

    // Define o relacionamento many-to-many com o modelo Paciente
    public function pacientes()
    {
        return $this->belongsToMany(Paciente::class, 'paciente_exame', 'exame_id', 'paciente_numero_atendimento');
    }
}