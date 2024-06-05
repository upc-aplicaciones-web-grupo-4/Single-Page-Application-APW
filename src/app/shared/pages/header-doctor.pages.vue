<template>
  <Toolbar class="p-component p-toolbar-custom">
    <div class="toolbar-content">
      <div class="logo-container">
        <img :src="logo" alt="Logo" class="logo">
        <h1>HormonalCare</h1>
      </div>
      <div class="search-bar-colleague">
        <doctor-view-colleague></doctor-view-colleague>
      </div>
      <span class="spacer"></span>

      <!-- Enlaces de navegación para los pacientes listados individualmente -->
      <router-link to="/homeDoctor" class="nav-button first-button">
        <div class="icon-text">
          <img :src="homeIcon" alt="Home" class="option-icon">
          <span>Home</span>
        </div>
      </router-link>

      <router-link to="/calendar" class="nav-button">
        <div class="icon-text">
          <img :src="calendarIcon" alt="Calendar" class="option-icon">
          <span>Calendar</span>
        </div>
      </router-link>

      <router-link to="/messages" class="nav-button">
        <div class="icon-text">
          <img :src="messageIcon" alt="Messages" class="option-icon">
          <span>Messages</span>
        </div>
      </router-link>

      <div class="separator"></div>
      <NotificationDropdown />
      <div class="separator"></div>


      <router-link to="/doctorProfile" class="nav-button">
        <div class="icon-text">
          <img :src="profileIcon" alt="Profile" class="option-icon">
          <span>Profile</span>
        </div>
      </router-link>
    </div>
  </Toolbar>
  <footer-content />
</template>

<script>
import Toolbar from 'primevue/toolbar';
import logo from '@/assets/images/logo.png';
import calendarIcon from '@/assets/images/calendar.png';
import messageIcon from '@/assets/images/message.png';
import bellIcon from '@/assets/images/bell.png';
import homeIcon from '@/assets/images/home-icon.png';
import profileIcon from '@/assets/images/profile-icon.png';
import FooterContent from "@/app/shared/pages/footer-content.pages.vue";
import DoctorViewColleague from "@/app/communications/pages/doctor-view-colleague.vue";
import NotificationDropdown from "@/app/notifications/pages/notification-patients.pages.vue";

export default {
  name: 'HeaderPatient',
  components: {
    NotificationDropdown,
    DoctorViewColleague,
    FooterContent,
  },
  data() {
    return {
      logo,
      homeIcon,
      calendarIcon,
      messageIcon,
      bellIcon,
      profileIcon,
    }
  }
}
</script>

<style scoped>
.toolbar-content {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #A788AB;
  width: 100%;
  padding: 0 40px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-container .logo {
  border-radius: 60%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.p-toolbar-custom {
  box-sizing: border-box;
  background-color: #A788AB;
  height: 60px;
  width: 100%;
  margin-right: 40px;
}

.spacer {
  flex: 1 1 auto;
}

.icon-text {
  display: flex;
  align-items: center;
}

.option-icon {
  height: 30px;
  margin-right: 10px;
}

.first-button {
  margin-left: 20px;
}

.nav-button {
  margin-left: 20px;
  color: white;
  text-decoration: none;
}

.nav-button:hover {
  text-decoration: underline;
}

/* Añadir estilo para el separador */
.separator {
  width: 40px; /* Puedes ajustar el ancho según tus necesidades */
}

.search-bar-colleague {
  display: flex;
  margin-left: 25px;
}
</style>
