<?php

namespace App\Http\Controllers;

use App\Models\Paciente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


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
        $paciente = Paciente::with('exames')->where('numero_atendimento', $numeroAtendimento)->first();
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

    public function ultimoNumeroAtendimento()
    {
        $ultimoNumeroAtendimento = DB::table('pacientes')->latest('numero_atendimento')->value('numero_atendimento');

        return response()->json($ultimoNumeroAtendimento);
    }

}
