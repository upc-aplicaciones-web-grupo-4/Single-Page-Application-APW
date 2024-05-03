<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import MeetIcon from '@/assets/images/google-meet-icon.png';

export default {
  name: 'PatientsTable',
  components: {
    DataTable,
    Column,
  },
  data() {
    return {
      patients: [
        {
          name: 'John Doe',
          typeOfCare: 'First date',
          hour: '09:00 AM',
          diagnosis: 'To evaluate',
          alert: '-',
          clinicHistory: null,
          videoConference: '/src/assets/images/google-meet-icon.png'
        },
        {
          name: 'Alice Smith',
          typeOfCare: 'First date',
          hour: '10:30 AM',
          diagnosis: 'To evaluate',
          alert: '-',
          clinicHistory: null,
          videoConference: MeetIcon,
        },
        {
          name: 'Michael Johnson',
          typeOfCare: 'Second date',
          hour: '11:15 AM',
          diagnosis: 'To evaluate',
          alert: 'Allergy to penicillin',
          clinicHistory: null,
          videoConference: MeetIcon
        },
        {
          name: 'Emily Brown',
          typeOfCare: 'Third date',
          hour: '01:00 PM',
          diagnosis: 'To evaluate',
          alert: '-',
          clinicHistory: null,
          videoConference: MeetIcon,
        },
        {
          name: 'David Wilson',
          typeOfCare: 'Six date',
          hour: '02:45 PM',
          diagnosis: 'To evaluate',
          alert: '-',
          clinicHistory: null,
          videoConference: MeetIcon
        },
        {
          name: 'Sophia Martinez',
          typeOfCare: 'First date',
          hour: '04:30 PM',
          diagnosis: 'To evaluate',
          alert: 'Medication allergies',
          clinicHistory: null,
          videoConference: MeetIcon
        },
      ],
    };
  },

  methods: {
    clinicHistoryButton(rowData) {
      return {
        template: `<button @click="viewClinicHistory('${rowData.name}')">Clinic History</button>`,
      };
    },
    videoConferenceImage(rowData) {
      return {
        template: `<img :src="getImageSource(rowData.videoConference)" alt="Video Conference" class="nav-icon">`,
      };
    },
    getImageSource(videoConference) {
      if (typeof videoConference === 'string') {
        return videoConference;
      }
      return videoConference.default || '';
    },
    viewClinicHistory(patientName) {
      console.log(`View clinic history for ${patientName}`);
    },
  },
};
</script>

<template>

  <div class="p-d-flex p-jc-center p-ai-center p-h-100">
    <div class="patients-table">
      <h2>Today's patients</h2>
      <DataTable :value="patients">
        <Column field="name" header="Name"></Column>
        <Column field="typeOfCare" header="Type of care"></Column>
        <Column field="hour" header="Hour"></Column>
        <Column field="diagnosis" header="Diagnosis"></Column>
        <Column field="alert" header="Alert"></Column>
        <Column field="clinicHistory" header="Clinic history" :body="clinicHistoryButton"></Column>
        <Column field="videoConference" header="Video conference" :body="videoConferenceImage"></Column>
      </DataTable>
    </div>
  </div>
</template>

<style scoped>
.patients-table {
  background-color: #A788AB;
  width: 75%;
  float: left;
}
.p-h-100 {
  height: 100vh;
}

</style>