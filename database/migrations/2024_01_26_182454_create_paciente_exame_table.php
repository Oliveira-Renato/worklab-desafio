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
        Schema::create('paciente_exame', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('paciente_numero_atendimento');
            $table->string('exame_codigo');
            $table->timestamps();

            $table->foreign('paciente_numero_atendimento')->references('numero_atendimento')->on('pacientes');
            $table->foreign('exame_codigo')->references('codigo')->on('exames');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('paciente_exame');
    }
};
