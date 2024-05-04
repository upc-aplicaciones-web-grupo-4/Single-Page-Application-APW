<script setup>
import { ref } from 'vue';
import { DoctorsApiService } from "../services/doctors-api.service.js";
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

const apiService = new DoctorsApiService();
const searchEmail = ref('');
const doctorData = ref(null);
const visible = ref(false);

const searchDoctor = async () => {
  try {
    const doctor = await apiService.getDoctorByEmail(searchEmail.value);
    if (doctor) {
      doctorData.value = doctor;
      visible.value = true; // Mostrar el diálogo
    } else {
      // Mostrar mensaje de error si el doctor no se encuentra
      console.error('Doctor not found');
    }
  } catch (error) {
    console.error('Error searching doctor:', error);
  }
};

const closeModal = () => {
  visible.value = false; // Cerrar el diálogo
};
</script>
<template>
  <div>
    <input v-model="searchEmail" @keyup.enter="searchDoctor" placeholder="Enter doctor's email">
    <Button label="Show" @click="searchDoctor" />

    <Dialog v-model:visible="visible" modal header="Doctor Information" :style="{ width: '90rem' }">

      <div class="group-total" v-if="doctorData">
        <div class="column-left">
          <div class="cont">
            <div class="card flex justify-content-center">
              <img :src="doctorData.image" alt="Profile Image" width="250" class="rounded-image"/>
            </div>
          </div>
        </div>

        <div class="column-middle">
          <div class="information">
            <div>
              <!-- Use doctorData to display doctor's information -->
              <p>Name: {{ doctorData.name }}</p>
              <p>Lastname: {{ doctorData.lastname }}</p>
              <p>Email: {{ doctorData.email }}</p>
              <p>School N: {{ doctorData.college_number }}</p>
            </div>
          </div>
        </div>

        <div class="column-right">
          <div>
            <h2>Titles: </h2>
            <div class="card flex justify-content-center">
              <img :src="doctorData.title" alt="Title Image" width="250" class="rounded-image"/>
            </div>
          </div>
        </div>
      </div>

    </Dialog>
  </div>
</template>
