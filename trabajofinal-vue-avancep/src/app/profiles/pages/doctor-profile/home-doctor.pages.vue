<template>

  <div class="p-d-flex p-jc-center p-ai-center p-h-100">
    <div class="patients-table">
      <h2>Today's patients</h2>
      <DataTable :value="appointmentData" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]">
        <Column field="name" header="Name"></Column>
        <Column field="age" header="Age"></Column>
        <Column field="clinicHistory" header="Clinic History">
          <template #body="{ rowData }">
            <Button label="Medical History" @click="navigateToMedicalHistory"></Button>
          </template>
        </Column>
        <Column field="typeOfCare" header="Type of care"></Column>
        <Column field="hour" header="Hour"></Column>
        <Column field="diagnosis" header="Diagnosis"></Column>
        <Column field="alert" header="Alert"></Column>
        <Column field="videoConference" header="Video Conference">
          <template #body="{ rowData }">
            <img src="@/assets/images/google-meet-icon.png" alt="Google Met Icon" style="width: 30px; height: 30px;">
          </template>
        </Column>
      </DataTable>
      <paginate
          :page-count="pageCount"
          :click-handler="changePage"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
      ></paginate>
    </div>
  </div>

</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import { ref, onMounted } from 'vue';
import PatientAppointmentService from "@/app/profiles/services/patient-appointment.service.js";
// import a Vue 3 compatible pagination component

export default {
  name: 'PatientsTable',
  components: {
    DataTable,
    Column,
    Button,

  },
  data() {
    return {
      currentPage: 1,
      pageCount: 0,
    }
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
  },
  setup() {
    const appointmentData = ref([]);
    const patientsService = new PatientAppointmentService();

    onMounted(() => {
      patientsService.getAll().then(response => {
        appointmentData.value = response;
      });
    });

    const navigateToMedicalHistory = () => {

      this.$router.push('/medical-history');
    };

    return { appointmentData, navigateToMedicalHistory };
  }
};
</script>

<style scoped>

.p-d-flex.p-jc-center.p-ai-center.p-h-100 {
  height: 100vh;
}

.p-datatable.p-datatable-striped table {
  width: 75%;
  margin-left: 0;
  background-color: white;
  border: 3px solid #9E42AA;
  border-collapse: collapse;
}

.p-datatable.p-datatable-striped thead tr th {
  background-color: #DFCAE1;
  color: black;
  padding: 10px;
  border-bottom: 2px solid #9E42AA;
  border-right: 2px solid #9E42AA;
}

.p-datatable.p-datatable-striped tbody tr td {
  background-color: white;
  font-size: 6px;
  color: black;
  padding: 10px;
  border-bottom: 1px solid #9E42AA;
  border-right: 1px solid #9E42AA;
}

.p-datatable.p-datatable-striped tbody tr td:last-child,
.p-datatable.p-datatable-striped thead tr th:last-child {
  border-right: none;
}

.p-button {
  background-color: gray;
  color: white;
  font-size: 12px;
  padding: 5px 10px;
}
</style>
