<template>
  <Toolbar class="p-component p-toolbar-custom">
    <div class="toolbar-content">
      <div class="logo-container">
        <img src="../../../assets/images/logo.png" alt="Logo" class="logo">
        <h1>HormonalCare</h1>
      </div>
      <h3>Doctors available</h3>
      <span class="spacer"></span>
      <router-link v-for="(option, i) in optionsPatients" :key="i" :to="option.path" class="nav-button" :class="{ 'first-button': i === 0 }">
        <div class="icon-text">
          <img :src="option.icon" alt="option.title" class="option-icon">
        </div>
        {{ option.title }}
      </router-link>
    </div>
  </Toolbar>
  <footer-content />
</template>


<script>

import Toolbar from 'primevue/toolbar';
import logo from '@/assets/images/logo.png';
import calendar from '@/assets/images/calendar.png';
import message from '@/assets/images/message.png';
import bell from '@/assets/images/bell.png';
import homeIcon from '@/assets/images/home-icon.png';
import profileIcon from '@/assets/images/profile-icon.png';
import FooterContent from "@/app/shared/pages/footer-content.pages.vue";
export default {
  name: 'HeaderPatient',
  components: {
    FooterContent,
  },
  data() {
    return {
      logo,
      optionsPatients: [
        { path: '/homePatient', title: 'Home', icon: homeIcon},
        { path: '/calendarPatient', title: 'Calendar', icon: calendar},
        { path: '/messagesPatient', title: 'Messages', icon: message},
        { path: '/notificationsPatient', title: 'Notifications', icon: bell},
        { path: '/patientProfile', title: 'Profile', icon: profileIcon},
      ]

    }
  }
}
</script>



<style >
.toolbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #A788AB;
  width: 100%;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-container .logo {
  border-radius: 60%;
  width: 50px;
  height: 40px;
  margin-right: 10px;
}

.p-toolbar-custom {
  background-color: #A788AB;
  height: 60px;
  width: 100%;
}

.spacer {
  flex: 1 1 auto;
}

.icon-text {
  top: 8px;
  position: relative;
  display: inline-block;
  margin-left: 0;
}

.option-icon {
  height: 30px;
  margin-right: 10px;
}

.first-button {
  margin-left: 20px;
}

.nav-button {
  margin-left: 44px;
}
</style>
