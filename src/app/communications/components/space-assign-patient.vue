<script setup>
import { ref } from "vue";
import Dropdown from 'primevue/dropdown'; // Asegúrate de que esta ruta sea correcta

const selectedPatient = ref();

const patients = ref([
  {name: 'Patient1', code: 'P1'},
  {name: 'Patient2', code: 'P2'},
  {name: 'Patient3', code: 'P3'},
  {name: 'Patient4', code: 'P4'},
  {name: 'Patient5', code: 'P5'}
]);

</script>

<template>
  <div class="card flex justify-content-center">
    <Dropdown v-model="selectedPatient" :options="patients" optionLabel="name" placeholder="select a patient" checkmark
              :highlightOnSelect="false" class="w-full md:w-14rem"/>
  </div>
</template>

<style scoped>

</style>