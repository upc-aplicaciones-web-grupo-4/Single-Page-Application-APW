<template>
  <div class="p-toolbar p-component p-toolbar-custom">
    <div class="logo-container">
      <img :src="logo" alt="Logo" class="logo">
      <span class="brand-text">HormonalCare</span>
    </div>
    <div class="search">
      <h3>Médicos disponibles</h3>
    </div>
    <div id="nav">
      <router-link to="/homeDoctor" class="word-link" >
        <img :src="homeIcon" alt="home" class="nav-icon"> Home </router-link>
      <router-link to="/calendar" class="word-link">
        <img :src="calendar" alt="calendar" class="calendar-icon">
        Calendar
      </router-link>
      <router-link to="/messages" class="word-link">
        <img :src="message" alt="message" class="nav-icon">
        Messages
      </router-link>
      <router-link to="/notifications" class="word-link">
        <img :src="bell" alt="notifications" class="nav-icon">
        Notifications
      </router-link>
      <router-link to="/doctorProfile" class="word-link">
        <img :src="profileIcon" alt="profile" class="nav-icon">
        Patient Profile
      </router-link>

    </div>
    <div>
      <router-view ></router-view>
    </div>


  </div>
  <footer-content></footer-content>

</template>


<script>
import logo from '@/assets/images/logo.png';
import calendar from '@/assets/images/calendar.png';
import message from '@/assets/images/message.png';
import bell from '@/assets/images/bell.png';
import homeIcon from '@/assets/images/home-icon.png';
import profileIcon from '@/assets/images/profile-icon.png';
import FooterContent from "@/app/shared/pages/footer-content/footer-content.pages.vue";
export default {
  name: 'HeaderDoctor',
  components: {
    FooterContent,
  },
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
  background-color: #A788AB;
  height: 70px;
  width: 100%;
  display: flex;
}

.word-link {
  color: #ffffff;
}

.logo-container {
  display: flex;
  margin-left: 0;
}

.search{

  margin-left: 0;
}

.logo {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.brand-text {

  font-size:18px;
  color: #fff;
}

.nav-icon {
  width: 36px;
  height: 36px;
}

.calendar-icon {
  width: 60px;
  height: 36px;
  margin-right: 0;
}

#nav {
  margin-left: 500px;

}


</style>
