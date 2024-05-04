<script setup>
import { ref } from "vue";

import Dropdown from 'primevue/dropdown';

const selectedSchedule = ref();

const schedule = ref([
  { name: ' 9 - 10 am', code: 'H1' },
  { name: '10 - 11 am', code: 'H2' },
  { name: '11 - 12 pm', code: 'H3' },
]);
</script>

<template>
  <div class="card flex justify-content-center">
    <Dropdown v-model="selectedSchedule" :options="schedule" optionLabel="name" placeholder="Select a Schedule" checkmark :highlightOnSelect="false" class="w-full md:w-14rem" />
  </div>
</template>

<style scoped>

</style>