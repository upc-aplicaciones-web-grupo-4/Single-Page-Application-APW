<template>
  <headerClinical></headerClinical>
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
import headerClinical from "@/app/medical-record/components/header.vue"
import patientData from "@/app/medical-record/components/patient-data.vue"
import clinicalHistory from "@/app/medical-record/components/clinical-history.vue"


export default {
  components: {
    headerClinical,
    patientData,
    clinicalHistory
  },
}
</script>

<style>
.container {
  display: flex;
  margin-top: 20px; /* Añade un margen superior para separarlo del encabezado */
  box-sizing: border-box;
}

.patient-data {
  /* Estilos para el componente de datos del paciente */
  flex: 1;
  margin-left: 20px; /* Espacio entre el componente y el otro componente */
  width: 20%;
  box-sizing: border-box;
}

.other-component {
  /* Estilos para el otro componente */
  margin-right: 30px;
  display:flex;
  width:80%;
  background: #A788AB;
  border-radius: 8px;
  flex: 1;
  box-sizing: border-box;
}
</style>