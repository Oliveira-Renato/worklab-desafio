<?php

namespace App\Http\Controllers;

use App\Models\Exame;
use App\Models\Paciente;

class PacienteExameController extends Controller
{
    public function vincularExame($numeroAtendimento, $codigoExame)
    {
        $paciente = Paciente::where('numero_atendimento', $numeroAtendimento)->first();

        if (!$paciente) {
            return response()->json(['error' => 'Paciente ' . $paciente . ' não encontrado'], 404);
        }

        $exame = Exame::where('codigo', $codigoExame)->first();

        if (!$exame) {
            return response()->json(['error' => 'Exame não encontrado'], 404);
        }

        $paciente->exames()->attach($exame->id, [
            'paciente_numero_atendimento' => $paciente->numero_atendimento,
            'exame_codigo' => $exame->codigo,
        ]);

        return response()->json(['message' => 'Exame vinculado com sucesso'], 200);
    }
}
