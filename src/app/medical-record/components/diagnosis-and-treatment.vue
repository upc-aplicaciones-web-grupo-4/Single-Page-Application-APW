<template>
  <div class="empty-column-container">
    <div class="hola">
      <div class="hola2">
        Diagnostics <button label="Add" @click="navigateTo('treatmentPatient')">add</button>
      </div>
      <div class="column-row-item">
        <ul>
          <br>
          <br>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <div class="hola">
      <div class="hola2">
        Treatment and medication <button label="Add" @click="navigateTo('treatmentPatient')">add</button>
      </div>
      <div class="column-row-item2">
        <ul>
          <br>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'


export default {
  components: {

  },
  setup() {
    const navigateTo = (route) => {
      // Aquí puedes implementar la lógica de navegación
    }

    return {
      navigateTo
    }
  }
}
</script>

<style scoped>
.empty-column-container {
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
}
.hola2 button {
  background: #dfcae1;
  padding: 10px 15px;
  float: right;
  border-radius: 15px;
}
.hola2 {
  color: black;
  align-content: center;
}

.hola {
  margin-right: 25px;
  margin-left: 20px;
}

.column-row-item {
  flex: 1 1;
  clear:both;
  background-color: #C0A0C3;
  border-radius: 10px;
  height: 500px;
  width: 470px;
  margin: 1%;
}
.column-row-item ul {
  top: 0;
  left: 0;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
}
.column-row-item ul li {
  background: white;
  width: 60%;
  border-radius: 10px;
  margin-bottom: 50px;
  margin-left: 25px;
  padding: 70px;
}

.column-row-item2 {
  flex: 1 1;
  clear:both;
  background-color: #C0A0C3;
  border-radius: 10px;
  height: 500px;
  width: 470px;
  margin: 1%;
}
.column-row-item2 ul {
  top: 0;
  left: 0;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
}
.column-row-item2 ul li {
  background: white;
  width: 70%;
  border-radius: 10px;
  margin-bottom: 50px;
  margin-left: 25px;
  padding: 50px;
}
</style>