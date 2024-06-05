<template>
  <div class="notification-wrapper">
    <img :src="bellIcon" alt="Notifications" class="notification-icon" @click="toggleDropdown" />
    <div v-if="dropdownVisible" class="notification-dropdown">
      <div class="notification-item">
        <img :src="calendarIcon" alt="Calendar" class="notification-icon-small" />
        <span>15 minutes left until the appointment with Gabriel</span>
      </div>
      <div class="notification-item">
        <img :src="messageIcon" alt="Message" class="notification-icon-small" />
        <span>Rose's message</span>
      </div>
    </div>
  </div>
</template>

<script>
import bellIcon from '@/assets/images/bell.png';
import calendarIcon from '@/assets/images/calendar.png';
import messageIcon from '@/assets/images/message.png';

export default {
  data() {
    return {
      bellIcon,
      calendarIcon,
      messageIcon,
      dropdownVisible: false
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    }
  }
};
</script>

<style scoped>
.notification-wrapper {
  position: relative;
  display: inline-block;
}

.notification-icon {
  cursor: pointer;
  width: 30px;
  height: 30px;
}

.notification-dropdown {
  position: absolute;
  top: 35px;
  right: 0;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 300px;
  z-index: 1000;
}

.notification-item {
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
}

.notification-item:last-child {
  border-bottom: none;
}

.notification-icon-small {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
