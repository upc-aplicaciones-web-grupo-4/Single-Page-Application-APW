<template>
  <div class="content">
    <Toolbar color="primary">
      <Button icon="pi pi-arrow-left"></Button>
      <span>Clinical history of patient Carlos Perez</span>
    </Toolbar>
  </div>
</template>

<script>
import { Button } from 'primevue/button';
import { Toolbar } from 'primevue/toolbar';

export default {
  components: {
    Button,
    Toolbar
  },
  setup() {
    // Aquí puedes agregar la lógica del componente si es necesario
  }
}
</script>

<style scoped>
.content {
  background: #A788AB;
}

.p-toolbar {
  padding: 10px;
  background-color: #A788AB;
}
</style>