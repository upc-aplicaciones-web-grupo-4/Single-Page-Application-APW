<template>
  <!--<div class="header-container"><headerClinical></headerClinical></div>-->
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
  margin-top: 200px; /* Añade un margen superior para separarlo del encabezado */
}

.patient-data {
  /* Estilos para el componente de datos del paciente */
 /* Espacio entre el componente y el otro componente */
  width: 20%;
  display:flex;
}

.other-component {
  /* Estilos para el otro componente */
  display:flex;
  flex-direction: column;
  width:80%;
  background: #A788AB;
  border-radius: 8px;
}
.header-container{
  background: #A788AB;
  display: flex;
  width:100%;
}
</style>