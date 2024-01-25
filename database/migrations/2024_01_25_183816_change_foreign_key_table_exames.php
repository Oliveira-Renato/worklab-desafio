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
            //$table->dropForeign(['paciente_id']);

            // Remover a coluna paciente_id
            $table->dropColumn('paciente_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Recriar a coluna paciente_id, se necessário
        Schema::table('exames', function (Blueprint $table) {
            $table->unsignedBigInteger('paciente_id');
            $table->foreign('paciente_id')->references('id')->on('pacientes');
        });
    }
};


