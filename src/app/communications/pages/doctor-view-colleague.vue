<script setup>
import { ref } from 'vue';
import { DoctorsApiService } from "../services/doctors-api.service.js";
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import SpaceAssignPatient from "@/app/communications/components/space-assign-patient.vue";
import HourpickerProfileColleague from "@/app/communications/components/hourpicker-profile-colleague.vue";
import DatepickerProfileColleague from "@/app/communications/components/datepicker-profile-colleague.vue";

const apiService = new DoctorsApiService();
const searchEmail = ref('');
const doctorData = ref(null);
const visible = ref(false);

const searchDoctor = async () => {
  try {
    const doctor = await apiService.getDoctorByEmail(searchEmail.value);
    if (doctor.error) {
      // Display a user-friendly message when a doctor is not found
      alert('Doctor not found. Please check the email and try again.');
    } else {
      doctorData.value = doctor;
      visible.value = true; // Show the dialog
    }
  } catch (error) {
    console.error('Error searching doctor:', error);
  }
};

</script>
<template>
  <div>
    <div class="search-container">
      <input v-model="searchEmail" @keyup.enter="searchDoctor" placeholder="Enter doctor's email" class="search-input">
    </div>
    <Dialog v-model:visible="visible" modal header="Doctor Information" :style="{ width: '90rem' }">

      <div class="grid-container">
        <div class="grid-item" style="grid-column: span 1; grid-row: span 2; font-size: 20px;">
          <h3>Perfil:</h3>
          <img :src="doctorData.image" alt="Profile Image" width="250" class="rounded-image"/>
        </div>
        <div class="grid-item" style="grid-column: span 2; grid-row: span 2; font-size: 20px;">
          <h3>Information:</h3>
          <p>Name: {{ doctorData.name }}</p>
          <p>Lastname: {{ doctorData.lastname }}</p>
          <p>Email: {{ doctorData.email }}</p>
          <p>School N°: {{ doctorData.college_number }}</p>
        </div>
        <div class="grid-item" style="grid-column: span 1; grid-row: span 1; ">
          <h2>Titles: </h2>
          <img :src="doctorData.title" alt="Title Image" width="250" class="rounded-image"/>
        </div>
        <div class="grid-item" style="grid-column: span 1; grid-row: span 1;">
            <Button label="Send Message" class="custom-button-2" />
        </div>
        <div class="grid-item" style="grid-column: span 1; grid-row: span 1;">
          <h3>Select the date</h3>
          <datepicker-profile-colleague> </datepicker-profile-colleague>
        </div>
        <div class="grid-item" style="grid-column: span 1; grid-row: span 1;">
          <h3>Select the hour</h3>
          <hourpicker-profile-colleague></hourpicker-profile-colleague>
        </div>
        <div class="grid-item" style="grid-column: span 1; grid-row: span 1;">
          <h3>Select the patient</h3>
          <space-assign-patient></space-assign-patient>
        </div>
        <div class="grid-item" style="grid-column: span 1; grid-row: span 1;">
          <h3>Save the appointment</h3>
          <Button label="Save" class="custom-button-1" />
        </div>
      </div>

    </Dialog>
  </div>
</template>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin: 20px;
}

.grid-item {
  padding: 10px;
  border-radius: 5px;
}



.search-input {
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
  width: 300px;
}

.search-input:focus {
  border-color: #A788AB;
}

.custom-button-1,
.custom-button-2{
  padding: 10px 20px;
  font-size: 16px;
  background-color: #A788AB;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

</style>