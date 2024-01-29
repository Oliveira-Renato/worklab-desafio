<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paciente extends Model
{
    use HasFactory;
    protected $fillable = ['numero_atendimento', 'nome_completo', 'sexo', 'email', 'celular']; // Define os campos que podem ser preenchidos em massa

    // Define o relacionamento many-to-many com o modelo Exame
    public function exames()
    {
        return $this->belongsToMany(Exame::class, 'paciente_exame', 'paciente_numero_atendimento', 'exame_id');
    }
}