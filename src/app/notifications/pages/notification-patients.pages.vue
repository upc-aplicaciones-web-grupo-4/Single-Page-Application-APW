<template>
  <div class="notification-wrapper">
    <img :src="bellIcon" alt="Notifications" class="notification-icon" @click="toggleDropdown" />
    <div v-if="dropdownVisible" class="notification-dropdown">
      <div class="notification-item" @click="openNotification('15 minutes left until the appointment with Gabriel', 'Don\'t forget that you have your appointment with Gabriel at 6:00 p.m. today.', calendarIcon)">
        <img :src="calendarIcon" alt="Calendar" class="notification-icon-small" />
        <span>15 minutes left until the appointment with Gabriel</span>
      </div>
      <div class="notification-item" @click="openNotification('Rose\'s message', 'You have a new message from Rose.', messageIcon)">
        <img :src="messageIcon" alt="Message" class="notification-icon-small" />
        <span>Rose's message</span>
      </div>
    </div>
    <div v-if="dialogVisible" class="dialog">
      <div class="dialog-content">
        <div class="dialog-header">
          <img :src="dialogIcon" alt="Icon" class="dialog-icon" />
          <h2>{{ dialogTitle }}</h2>
        </div>
        <p>{{ dialogMessage }}</p>
        <button @click="closeDialog">Accept</button>
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
      dropdownVisible: false,
      dialogVisible: false,
      dialogTitle: '',
      dialogMessage: '',
      dialogIcon: ''
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    openNotification(title, message, icon) {
      this.dialogTitle = title;
      this.dialogMessage = message;
      this.dialogIcon = icon;
      this.dialogVisible = true;
      this.dropdownVisible = false;
    },
    closeDialog() {
      this.dialogVisible = false;
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
  cursor: pointer;
}

.notification-item:last-child {
  border-bottom: none;
}

.notification-icon-small {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

.dialog-content {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  width: 80%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.dialog-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.dialog-icon {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.dialog-content h2 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.dialog-content p {
  font-size: 14px;
  margin-top: 10px;
  color: #555;
}

.dialog-content button {
  margin-top: 20px;
  background-color: #A788AB;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
}

.dialog-content button:hover {
  background-color: #8f6a9b;
}
</style>
