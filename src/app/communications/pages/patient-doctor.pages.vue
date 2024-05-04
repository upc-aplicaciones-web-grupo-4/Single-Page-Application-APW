<template>
  <div class="container">
    <ChatListPatient class="chat-list" />
    <PatientChatPages class="chat-container" />
  </div>
</template>

<script>
// Importa los componentes necesarios
import ChatListPatient from "@/app/communications/components/chat-list-patient.vue";
import PatientChatPages from "@/app/communications/components/patient-chat.pages.vue";

export default {
  components: {
    ChatListPatient,
    PatientChatPages
  }
}
</script>

<style scoped>
.container {
  display: flex;

}
</style>
