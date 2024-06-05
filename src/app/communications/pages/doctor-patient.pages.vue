<template>
  <div class="container">
    <DoctorChatPages class="chat-container" />
  </div>
</template>

<script>
// Importa los componentes necesarios
import DoctorChatPages from "@/app/communications/components/doctor-chat.pages.vue";

export default {
  components: {
    DoctorChatPages
  }
}
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  margin: 0;
  padding: 0;

}
</style>
