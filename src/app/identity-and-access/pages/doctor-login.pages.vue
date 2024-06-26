<template>
  <div class="component-background">
    <div class="toolbar">
      <img :src="logo" alt="Logo" class="logo">
      <h1>HormonalCare</h1>
      <button @click="goBack" class="back-button">Register</button> <!-- Cambia el texto del botón a 'Register' -->
    </div>
    <div class="content-container">
      <div class="welcome-text">
        <h2>Welcome to HormonalCare</h2>
      </div>
      <div class="form-container">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="form.username" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="form.password" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/images/logo.png';

export default {
  name: 'DoctorLogin',
  data() {
    return {
      logo,
      form: {
        username: '',
        password: '',
      }
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviándolo a una API
      console.log(this.form);
    },
    goBack() {
      // Aquí puedes manejar la lógica para volver a la página anterior
      console.log('Back button clicked');
    }
  }
};
</script>

<style>
.component-background {
  background-color: #e5dde6;
  padding: 20px;
  border-radius: 10px;
  height: 100vh; /* Ocupa toda la altura de la ventana */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.toolbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #a78aab;
  color: #ffffff;
  padding: 10px 20px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
}

.title {
  font-size: 20px;
}

.back-button {
  background-color: #fff;
  color: #007bff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #f0f0f0;
}

.content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Ajusta el ancho máximo según tus necesidades */
  margin-top: 80px; /* Para dejar espacio para la barra de herramientas */
}

.welcome-text {
  margin-right: 50px; /* Mueve el texto más a la izquierda */
  color: #a78aab;
}

.welcome-text h2 {
  font-size: 24px;
  color: #333;
}

.form-container {
  width: 100%;
  max-width: 400px;
  padding: 40px 20px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  background-color: #a78aab;
  color: white;
  box-sizing: border-box;
  margin-left: auto; /* Asegura que el formulario esté a la derecha */
  margin-right: 50px; /* Mueve el formulario más a la derecha */
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button[type="submit"] {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

.logo {
  border-radius: 10%;
  width: 50px;
  height: 50px;
  margin-right: 5px;

}

h1 {
  font-size: 20px;
  margin-right: auto;
}
</style>
