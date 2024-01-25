<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('exames', function (Blueprint $table) {
            // Remover a chave estrangeira existente
            $table->dropForeign(['paciente_id']);

            // Adicionar nova chave estrangeira usando numero_atendimento
            $table->foreign('paciente_numero_atendimento')->references('numero_atendimento')->on('pacientes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

    }
};
