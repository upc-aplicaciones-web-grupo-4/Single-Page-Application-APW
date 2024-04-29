<template>
    <div class="p-toolbar p-component p-toolbar-custom">
      <div class="logo-container">
        <img :src="logo" alt="Logo" class="logo">
        <span class="brand-text">HormonalCare</span>
      </div>
      <div>
        <h3>Buscador de médicos</h3>
      </div>
      <div class="icon-text">
        <img :src="calendar" alt="calendar" class="calendar-icon">
        <img :src="message" alt="message" class="message-icon">
        <img :src="bell" alt="notifications" class="bell-icon">
        <img :src="homeIcon" alt="home" class="home-icon">
        <img :src="profileIcon" alt="profile" class="profile-icon">
      </div>
      <div id="nav">
        <router-link to="/homeDoctor">Home</router-link>
        <router-link to="/calendar">Calendar</router-link>
        <router-link to="/messages">Messages</router-link>
        <router-link to="/notifications">Notifications</router-link>
        <router-link to="/doctorProfile">Doctor Profile</router-link>
      </div>
      <div>
        <router-view name="LeftSideBar">
        </router-view>
      </div>
    </div>
  </template>


<script>
import logo from '@/assets/images/logo.png';
import calendar from '@/assets/images/calendar.png';
import message from '@/assets/images/message.png';
import bell from '@/assets/images/bell.png';
import homeIcon from '@/assets/images/home-icon.png';
import profileIcon from '@/assets/images/profile-icon.png';

  export default {
      data() {
      return {
      logo,
      calendar,
      message,
      bell,
      homeIcon,
      profileIcon
    }
  }
}
</script>

<style >
.p-toolbar-custom {
  display: flex;

  justify-content: space-between; /* Distribuye el espacio entre los elementos */
  background-color: #A788AB;
  height: 60px;
  width: 100%;

  top: 0;

}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  border-radius: 50%;
  width: 50px;
  height: 50px; /* Ajustado para ser cuadrado */
  margin-right: 10px;
}

.brand-text {
  font-size: 20px;
  color: #fff;
}

.icon-text {
  display: flex; /* Cambiado a flex para mejorar la distribución */
  align-items: center;
}

.calendar-icon, .message-icon, .bell-icon, .home-icon, .profile-icon {
  width: 30px;
  height: 30px;
  margin-left: 20px; /* Espaciado uniforme entre iconos */
}

#nav {
  display: flex;
  margin-left: 20px;
}

#nav > router-link {
  margin-right: 30px; /* Espaciado entre enlaces */
  color: white; /* Color del texto para los enlaces, suponiendo que quieres blanco */
}
</style>
