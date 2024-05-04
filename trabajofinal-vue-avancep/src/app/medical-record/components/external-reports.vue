<template>
  <div class="empty-column-container">
    <div class="empty-column-item">imagen aqui</div>
    <div class="empty-column-item">imagen aqui</div>
    <div class="empty-column-item">imagen aqui</div>
  </div>
</template>

<script>
export default {
  setup() {
    // Aquí puedes agregar la lógica del componente si es necesario
  }
}
</script>

<style scoped>
.empty-column-container {
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
}

.empty-column-item {
  flex: 1 1 30%;
  background-color: #f2f2f2;
  height: 500px;
  margin: 1%;
}
</style>