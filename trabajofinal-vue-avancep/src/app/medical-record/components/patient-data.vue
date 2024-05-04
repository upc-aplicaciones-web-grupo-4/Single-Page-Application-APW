<template>
  <div class="patient-data-container">
    <h3>Patient's data</h3>
    <div class="patient-icon">
      <!-- Aquí puedes colocar el icono -->
    </div>
    <div class="patient-info">
      <p><strong>Clinical record number:</strong> {{ patient.id }}</p>
      <p><strong>First name:</strong> {{ patient.name }}</p>
      <p><strong>Last name:</strong> {{ patient.lastname }}</p>
      <!-- Si tienes un campo para el segundo nombre, descomenta la siguiente línea -->
      <!-- <p><strong>Second name:</strong> {{ patient.secondName }}</p> -->
      <p><strong>Birthday:</strong> {{ patient.birthdate }}</p>
      <p><strong>Sex:</strong> {{ patient.gender }}</p>
      <p><strong>Blood type:</strong> {{ patient.type_of_blood }}</p>
      <p><strong>Phone number:</strong> {{ patient.phone }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const patient = ref({
      id: '',
      name: '',
      lastname: '',
      birthdate: '',
      gender: '',
      type_of_blood: '',
      phone: ''
    })

    // Aquí puedes agregar la lógica para obtener los datos del paciente

    return {
      patient
    }
  }
}
</script>

<style scoped>
/* patient-data.component.css */
.patient-data-container {
  width: 250px; /* Ajusta el ancho según tus necesidades */
  background-color: #A788AB;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
}

.patient-data-container h3 {
  color: #333;
  margin-bottom: 20px;
}

.patient-icon {
  width: 100px;
  height: 100px;
  background-color: #dfcae1;
  border-radius: 50%;
  margin-bottom: 20px;
}

.patient-info {
  background: #dfcae1;
  padding: 40px;
  border-radius: 5%;

}


.patient-info p {
  text-align: left;
  width: 100%;
  margin-bottom: 10px;
}

/* Añade más estilos según tus preferencias */
</style>