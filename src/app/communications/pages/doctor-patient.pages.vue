<template>
  <div class="container">
    <ChatListDoctor class="chat-list" />
    <DoctorChatPages class="chat-container" />
  </div>
</template>

<script>
// Importa los componentes necesarios
import ChatListDoctor from '@/app/communications/components/chat-list-doctor.vue';
import DoctorChatPages from "@/app/communications/components/doctor-chat.pages.vue";

export default {
  components: {
    ChatListDoctor,
    DoctorChatPages
  }
}
</script>

<style scoped>
.container {
  display: flex;

}
</style>
