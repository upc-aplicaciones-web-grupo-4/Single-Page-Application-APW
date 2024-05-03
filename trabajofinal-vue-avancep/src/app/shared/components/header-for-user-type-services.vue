<template>
  <header-doctor v-if="userType === 'endocrinologist'"></header-doctor>
  <header-patient v-if="userType === 'patient'"></header-patient>
</template>

<script>
import userTypeService from "@/app/shared/services/user-type.service";
import HeaderDoctor from "@/app/shared/pages/header-doctor/header-doctor.pages.vue";
import HeaderPatient from "@/app/shared/pages/header-patient/header-patient.pages.vue";

export default {
  name: 'HeaderForUserTypeService',
  components: {
    HeaderDoctor,
    HeaderPatient
  },
  data() {
    return {
      userType: null
    }
  },
  created() {
    userTypeService.watchUserType(type => {
      this.userType = type;
    });
  }
}
</script>

<style scoped>

</style>