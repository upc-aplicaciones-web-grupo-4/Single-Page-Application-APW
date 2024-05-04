<template>
  <div class="div-toolbar">
    <Toolbar class="buttons" color="primary">
      <Button label="Reason of consultation" @click="navigateTo('reasonConsultation')"></Button>
      <Button label="Background" @click="navigateTo('background')"></Button>
      <Button label="Medical exams" @click="navigateTo('medicalExams')"></Button>
      <Button label="External reports" @click="navigateTo('externalReports')"></Button>
      <Button label="Diagnoses and treatment" @click="navigateTo('diagnosesAndTreatment')"></Button>
    </Toolbar>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Button } from 'primevue/button';
import { Toolbar } from 'primevue/toolbar';

export default {
  components: {
    Button,
    Toolbar
  },
  setup() {
    const navigateTo = (route) => {
      // Aquí puedes implementar la lógica de navegación
    }

    return {
      navigateTo
    }
  }
}
</script>

<style scoped>
button {
  background-color: #dfcae1;
  color: black !important;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 10px;
}

.div-toolbar {
  background: #A788AB;
  border-radius: 10px;
}

.buttons {
  justify-content: center;
}

.toolbar {
  display: flex;
  justify-content: center;
}

</style>