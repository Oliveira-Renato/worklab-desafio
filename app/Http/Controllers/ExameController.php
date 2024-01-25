<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExameController extends Controller
{
    public function index()
    {
        $exames = Exame::all();
        return response()->json($exames);
    }
    public function store(Request $request)
    {
        $exame = Exame::create($request->all());
        return response()->json($exame, 201);
    }

    public function show($id)
    {
        $exame = Exame::findOrFail($id);
        return response()->json($exame);
    }

    public function update(Request $request, $id)
    {
        $exame = Exame::findOrFail($id);
        $exame->update($request->all());
        return response()->json($exame, 200);
    }

    public function destroy($id)
    {
        $exame = Exame::findOrFail($id);
        $exame->delete();
        return response()->json(null, 204);
    }
}
