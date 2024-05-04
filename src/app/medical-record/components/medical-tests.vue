<template>
  <div class="two-column-container">
    <div class="two-column-title">Title 1</div>
    <div class="two-column-item"></div>
    <div class="two-column-item">
      <label>Column 1</label>
      <textarea v-model="column1"></textarea>
    </div>
    <div class="two-column-title">Title 2</div>
    <div class="two-column-item">
      <label>Column 2</label>
      <textarea v-model="column2"></textarea>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const column1 = ref('')
    const column2 = ref('')

    return {
      column1,
      column2
    }
  }
}
</script>

<style scoped>
/* Aquí puedes agregar tus estilos CSS */
</style>