<?php

namespace App\Http\Controllers;

use App\Models\Exame;
use App\Models\Paciente;

class PacienteExameController extends Controller
{
    public function vincularExame($numeroAtendimento, $codigoExame)
    {
        // Busca o paciente pelo número de atendimento
        $paciente = Paciente::where('numero_atendimento', $numeroAtendimento)->first();

        // Verifica se o paciente foi encontrado
        if (!$paciente) {
            return response()->json(['error' => 'Paciente ' . $paciente . ' não encontrado'], 404);
        }

        // Busca o exame pelo código
        $exame = Exame::where('codigo', $codigoExame)->first();

        // Verifica se o exame foi encontrado
        if (!$exame) {
            return response()->json(['error' => 'Exame não encontrado'], 404);
        }

        // Vincula o exame ao paciente usando o relacionamento many-to-many
        $paciente->exames()->attach($exame->id);

        // Resposta de sucesso
        return response()->json(['message' => 'Exame vinculado com sucesso'], 200);
    }
}
