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
            // Adicionar nova coluna paciente_numero_atendimento
            $table->string('paciente_numero_atendimento');

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
        // Remover a coluna paciente_numero_atendimento e a chave estrangeira
        Schema::table('exames', function (Blueprint $table) {
            $table->dropForeign(['paciente_numero_atendimento']);
            $table->dropColumn('paciente_numero_atendimento');
        });
    }
};
