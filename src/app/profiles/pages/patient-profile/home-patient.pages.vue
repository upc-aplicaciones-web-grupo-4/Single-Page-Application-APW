<script >
import Checkbox from 'primevue/checkbox';
import Card from 'primevue/card';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from 'primevue/dialog';
import MedicalHistoryService from '../../services/medical-history.service.js';

export default {
  components: {
    Checkbox,
    'p-card' : Card,
    DataTable,
    Column,
    Dialog
  },
  data() {
    return {
      visible: false,
      medicalHistory: {
        id: '',
        patient_id: 0,
        doctors_id: [],
        date: '',
        reason: '',
        symptoms: [],
        personal_background: '',
        family_background: '',
        lab_results_id: 0,
        physical_test: '',
        external_reports: [],
        medical_exams: [],
        diagnostic: [],
        treatment_and_medication: [] // Aquí deberían estar los datos de tratamiento y medicación
      },
      treatmentAndMedication: {
        drug_name: '',
        quantity: '',
        concentration: '',
        frequency: '',
        duration: ''
      }
    };
  },
  methods: {
    loadMedicalHistoryByPatientId(patientId) {
      MedicalHistoryService.getMedicalHistoryByPatientId(patientId)
          .then(response => {
            console.log(response.data); // Asegúrate de que los datos sean correctos
            this.medicalHistory = response.data;
            if (response.data.treatment_and_medication.length > 0) {
              this.treatmentAndMedication = response.data.treatment_and_medication[0];
            }
          })
          .catch(error => {
            console.error(error);
          });
    },
    fetchMedicalHistoryByPatientId(patientId) {
      MedicalHistoryService.getMedicalHistoryByPatientId(patientId)
          .then(response => {
            this.medicalHistory = response.data;
          })
          .catch(error => {
            console.error(error);
          });
    }
  },
  mounted() {
    this.loadMedicalHistoryByPatientId(1);
    this.fetchMedicalHistoryByPatientId(1); // Reemplaza 1 con el ID del paciente que deseas obtener
  }
};
</script>

<template>
  <div class="p-d-flex p-jc-center p-ai-center p-h-100">
  <div class="cont">
    <div class="box1">

      <div class="part1">
        <div class="reminder-container">
          <h2>Today's reminders</h2>
          <a href="https://www.google.com/" target="_blank">Your next appointment...</a>
        </div>
      </div>
      <div class="part2">

        <p-card style="width: 100%; overflow: hidden; border-radius: 20px; align-items: center ; background-color: #8f7193">
          <template #content >
            <div v-if="medicalHistory && medicalHistory.treatment_and_medication.length > 0">
              <div class="con">
                <p style="display: flex; flex-direction: column; color: black; font-size: 20px; width: 50%;"><b>Medication</b></p>
                <p style="display: flex; flex-direction: column; color: black; font-size: 20px; width: 20%;"><b>Concentration</b></p>
                <p style="display: flex; flex-direction: column; color: black; font-size: 20px; width: 20%;"><b>Frequency</b></p>
              </div>
              <div class="con" v-for="(treatment, index) in medicalHistory.treatment_and_medication" :key="index">
                <p style="display: flex; flex-direction: column; text-align: center; align-items: center; width: 50%; background-color: #dfcae1; border-radius: 10px; padding:20px 10px; "><b>{{ treatment.drug_name }}</b></p>
                <p style="display: flex; flex-direction: column; text-align: center; align-items: center; width: 20%; background-color: #dfcae1; border-radius: 10px; padding:20px 10px ; "><b>{{ treatment.concentration }}</b></p>
                <p style="display: flex; flex-direction: column; text-align: center; align-items: center; width: 20%; background-color: #dfcae1; border-radius: 10px; padding:20px 10px; "><b>{{ treatment.frequency }}</b></p>
              </div>
            </div>
          </template>
        </p-card>

      </div>

    </div>
    <div class="box2">

      <div class="part1">
        <p-card style="width: 100%; overflow: hidden; border-radius: 20px; background-color: #8f7193">
          <template #content>
            <div class="sec">
              <h2>Medical Exams</h2>
              <div v-for="(exam, index) in medicalHistory.medical_exams" :key="index">
                <Checkbox :id="`exam-${index}`" v-model="exam.checked" />
                <label :for="`exam-${index}`" style="padding-left:20px;">{{ exam }}</label>
              </div>
            </div>
          </template>
        </p-card>
      </div>
      <div class="part2">
        <Button label="Show" @click="visible = true"  class="but"><b>Upload your exams</b></Button>

        <Dialog v-model:visible="visible" class="dialog" :modal="true" header="Pending exams" :style="{ width: '40%'  }" :closable="false" >
          <div class="dialog-content">
    <div v-for="(exam, index) in medicalHistory.medical_exams" :key="index">
      <Checkbox :id="`exam-${index}`" v-model="exam.checked" />
      <label :for="`exam-${index}`">{{ exam }}</label>
      <input class="input" type="file">
    </div>
  </div>
          <div class="dialog-actions">
            <div class="flex justify-content-end gap-2">
              <Button type="button" label="Cancel" severity="secondary" @click="visible = false">No</Button>
              <Button type="button" label="Save" @click="visible = false">Ok</Button>
            </div>
          </div>
        </Dialog>




      </div>

    </div>
  </div>
  </div>
</template>

<style scoped>
.p-h-100 {
  height: 100vh;
}
.cont {
  box-sizing: border-box;
  width:100%;
  height: 100vh;
  display: flex;
  flex-direction: row !important;
  gap: 20px;
  background-color: #e5dde6;
  align-items: center;
}

.box1, .box2 {
  box-sizing: border-box;
  padding: 4vw;
  width:50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.part1, .part2 {
  width:100%;
}
.reminder-container {
  display: flex;
  align-items: center; /* Alinea los elementos verticalmente en el centro */
  gap: 10px; /* Espacio entre los elementos */
}
.reminder-container h2 {
  margin: 0; /* Elimina el margen por defecto */
  font-size: 25px;


}
.reminder-container a {
  padding:10px;
  background-color: #dfcae1;
  color: black;
  border-radius: 10px;
}

.con {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Espacio entre los toppings */
  font-size: 16px;

}
.con p{
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 5px 0;
}

.sec h2{
  margin: 0;
  text-align: left;
  font-size: 25px;
  color: white;
}

.sec {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding : 0 20px;
}
.sec div {

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}
.sec label{
  width:100%;
  background-color: white;
  padding: 10px;
  border-radius: 20px;
  text-align: left;
}



.dialog-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.dialog-content div {

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}
.dialog-content label {
  width: 40%;
  text-align: left;
  font-weight: 600;
}

.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

Button {
  background-color: #dfcae1;
  color: black;
  padding: 10px 20px ;
  border-radius: 10px;
  margin-left: 20px;

}
.but{
  width:100%;
  margin-left: 0;
  font-size: 2vw;
}

.input[type="file"] {
  width: 50%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
}

</style>
