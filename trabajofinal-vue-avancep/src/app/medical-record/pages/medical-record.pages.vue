<template>
  <header></header>
  <div class="container">
    <div class="patient-data">
      <patient-data></patient-data>
    </div>
    <div class="other-component">
      <clinicalHistory></clinicalHistory>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import header from "@/app/medical-record/components/header.vue"
import patientData from "@/app/medical-record/components/patient-data.vue"
import clinicalHistory from "@/app/medical-record/components/clinical-history.vue"

export default {
  components: {
    header,
    patientData,
    clinicalHistory
  },
}
</script>

<style>
@import 'primevue/resources/themes/saga-blue/theme.css';
@import 'primevue/resources/primevue.min.css';

.container {
  display: flex;
  margin-top: 20px; /* Añade un margen superior para separarlo del encabezado */
}

.patient-data {
  /* Estilos para el componente de datos del paciente */
  flex: 1;
  margin-left: 20px; /* Espacio entre el componente y el otro componente */
  margin-right: -50%;
}

.other-component {
  /* Estilos para el otro componente */
  margin-right: 30px;
  background: #A788AB;
  border-radius: 8px;
  flex: 1;
}
</style>