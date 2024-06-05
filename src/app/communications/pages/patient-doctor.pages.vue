<template>
  <div class="container">
    <PatientChatPages class="chat-container" />
  </div>
</template>

<script>
// Importa los componentes necesarios
import PatientChatPages from "@/app/communications/components/patient-chat.pages.vue";

export default {
  components: {
    PatientChatPages
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
