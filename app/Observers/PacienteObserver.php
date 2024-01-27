<?php

namespace App\Observers;

use App\Models\Paciente;

class PacienteObserver
{
    /**
     * Handle the Paciente "created" event.
     *
     * @param  \App\Models\Paciente  $paciente
     * @return void
     */
    public function creating(Paciente $paciente)
    {
        // Gera o próximo número de atendimento
        $paciente->numero_atendimento = Paciente::max('numero_atendimento') + 1;
    }

    /**
     * Handle the Paciente "updated" event.
     *
     * @param  \App\Models\Paciente  $paciente
     * @return void
     */
    public function updated(Paciente $paciente)
    {
        //
    }

    /**
     * Handle the Paciente "deleted" event.
     *
     * @param  \App\Models\Paciente  $paciente
     * @return void
     */
    public function deleted(Paciente $paciente)
    {
        //
    }

    /**
     * Handle the Paciente "restored" event.
     *
     * @param  \App\Models\Paciente  $paciente
     * @return void
     */
    public function restored(Paciente $paciente)
    {
        //
    }

    /**
     * Handle the Paciente "force deleted" event.
     *
     * @param  \App\Models\Paciente  $paciente
     * @return void
     */
    public function forceDeleted(Paciente $paciente)
    {
        //
    }
}
