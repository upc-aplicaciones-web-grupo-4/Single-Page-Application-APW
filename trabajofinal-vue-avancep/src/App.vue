<script>
import homePatient from './app/profiles/pages/patient-profile/home-patient.pages.vue';
import patientProfile from './app/profiles/pages/patient-profile/patient-profile.pages.vue';
import headerDoctor from './app/shared/pages/header-doctor/header-doctor.pages.vue';
import FooterContent from "./app/shared/pages/footer-content/footer-content.pages.vue";
import DoctorRegistration from "./app/identity-and-access/pages/doctor-registration.pages.vue";
import SelectUserRole from './app/identity-and-access/pages/select-user-role.pages.vue';

export default {
  components: {
    SelectUserRole,
    DoctorRegistration,
    FooterContent,
    homePatient,
    patientProfile,
    headerDoctor,
  }
};


</script>

<template>

  <!-- <header-doctor></header-doctor>-->

  <!--<doctor-registration></doctor-registration>-->
 <!--<select-user-role> </select-user-role>
  <patientProfile></patientProfile>-->
  <homePatient></homePatient>






  </template>

