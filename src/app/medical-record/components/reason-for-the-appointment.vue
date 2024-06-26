<template>
  <div class="reason-component">
    <div class="box">{{ reason.description }}</div>
    <button label="Edit" class="edit-button"></button>
  </div>
  <p>Current ilness</p>
  <p>Symptoms:</p>
  <div class="reason-component">
    <div class="box">{{ reason.symptoms }}</div>
    <button label="Edit" class="edit-button"></button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getReasonsForTheAppointmentByMedicalRecordId } from '../services/reason-for-the-appointment.service.js';

export default {
  components: {
  },
  setup() {
    const reason = ref({ id:'', description: '', symptoms: '' });

    onMounted(async () => {
      const medicalRecordId = 1; // Reemplaza esto con el ID de registro médico correcto
      const response = await getReasonsForTheAppointmentByMedicalRecordId(medicalRecordId);
      reason.value = response.data;
    });

    return { reason };
  }
}
</script>

<!-- El resto de tu código -->
<style scoped>
.reason-component {
  display: flex;
  justify-content: space-between;
}

.box {
  width: 80%;
  height: 200px;
  background-color: #fff;
  border: 1px solid #ddd;
  margin: 10px;
}

p {
  margin: 10px;
}

.edit-button {
  width: 20%;
  height: 40px;
  background-color: #dfcae1;
  color: #000000;
  border: none;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  margin: 10px;
}
</style>