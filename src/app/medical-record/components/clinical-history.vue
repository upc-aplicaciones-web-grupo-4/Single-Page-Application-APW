<template>
  <div class="div-toolbar">
    <div class="buttons">
      <button label="Reason of consultation" @click="navigateTo('reasonConsultation')">Reason for the Appointment</button>
      <button label="Background" @click="navigateTo('background')">Background</button>
      <button label="Medical exams" @click="navigateTo('medicalExams')">Medical Exams</button>
      <button label="External reports" @click="navigateTo('externalReports')">External Reports</button>
      <button label="Diagnoses and treatment" @click="navigateTo('diagnosesAndTreatment')">Diagnosis and treatment</button>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'

export default {
  components: {
  },
  setup() {
    const router = useRouter()

    const navigateTo = (route) => {
      router.push(`/medical-record/${route}`)
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
  display:flex;
}


</style>