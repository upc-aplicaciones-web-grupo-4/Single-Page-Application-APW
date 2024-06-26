<template>
  <div class="component-background">
    <div class="toolbar">
      <span class="title">Registration of a Patient</span>
      <button @click="goBack" class="back-button">Back</button>
    </div>
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="form.firstName" required />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="form.lastName" required />
        </div>
        <div class="form-group">
          <label for="image">Image URL:</label>
          <input type="text" id="image" v-model="form.image" required />
        </div>
        <div class="form-group">
          <label for="gender">Gender:</label>
          <select id="gender" v-model="form.gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="birthDate">Birth Date:</label>
          <input type="date" id="birthDate" v-model="form.birthDate" required />
        </div>
        <div class="form-group">
          <label for="phone">Phone:</label>
          <input type="tel" id="phone" v-model="form.phone" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="typeOfBloodName">Type of Blood:</label>
          <input type="text" id="typeOfBloodName" v-model="form.typeOfBloodName" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        image: '',
        gender: '',
        birthDate: '',
        phone: '',
        email: '',
        typeOfBloodName: ''
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
}

.toolbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #a78aab;
  color: #ffffff;
  padding: 10px 20px;
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

.form-container {
  max-width: 600px;
  margin: 70px auto 0 20px;
  padding: 40px 20px 20px;
  border: 1px solid #ffffff;
  border-radius: 0 0 10px 10px;
  background-color: #a78aab;
  color: white;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
select {
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
</style>
