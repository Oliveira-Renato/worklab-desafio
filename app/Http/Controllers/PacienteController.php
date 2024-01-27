<?php

namespace App\Http\Controllers;

use App\Models\Paciente;
use Illuminate\Http\Request;

class PacienteController extends Controller
{
    //
    public function index()
    {
        $paciente = Paciente::with('exames')->get();
        return response()->json($paciente);
    }
    public function store(Request $request)
    {
        $paciente = Paciente::create($request->all());
        return response()->json($paciente, 201);
    }

    public function show($numeroAtendimento)
    {
        $paciente = Paciente::where('numero_atendimento', $numeroAtendimento)->first();
        return response()->json($paciente);
    }

    public function update(Request $request, $numeroAtendimento)
    {
        $paciente = Paciente::findOrFail($numeroAtendimento);
        $paciente->update($request->all());
        return response()->json($paciente, 200);
    }

    public function destroy($numeroAtendimento)
    {
        $paciente = Paciente::findOrFail($numeroAtendimento);
        $paciente->delete();
        return response()->json(null, 204);
    }
}
