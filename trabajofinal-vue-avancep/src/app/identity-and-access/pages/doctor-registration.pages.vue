<script setup>
import Toolbar from "primevue/toolbar";
import button from "primevue/button";
</script>

<template>
  <Toolbar class="full-width-toolbar">
    <template #start>
      <h1>Registration of an endocrinologist doctor</h1>
    </template>
    <template #end>
      <button label="Back" icon="pi pi-arrow-left" @click="backToSelectUser">Back</button>
    </template>
  </Toolbar>

  <div class="container">
    <p>Please complete the following fields to complete your registration in the “HormonalCare” application:</p>
    <div class="formAndimg">
      <div class="formContainer">
        <form>
          <div class="fname">
            <label for="fname">First name: </label>
            <input type="text" id="fname" name="fname">
          </div>
          <div class="lname">
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname">
          </div>
          <div class="age">
            <label for="age">Age: </label>
            <input type="number" id="age" name="age">
          </div>
          <div class="mail">
            <label for="mail">Email:</label>
            <input type="email" id="mail" name="mail">
          </div>
          <div class="password">
            <label for="password">Password: </label>
            <input type="password" id="password" name="password">
          </div>
          <div class="qualific">
            <label for="qualific">Qualification:</label>
            <input type="number" id="qualific" name="qualific">
          </div>
          <div class="schoolNo">
            <label for="schoolNo">School Number:</label>
            <input type="number" id="schoolNo" name="schoolNo">
          </div>
        </form>
      </div>
      <div class="buttonContainer">
        <div class="buttonDiv">
          <div class="buttonBackground">
            <button id="customButton">Click me</button>
          </div>
        </div>
        <div class="continueDiv">
                  <button id="continueButton">Continue</button>
        </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
@import 'primevue/resources/themes/saga-blue/theme.css';
@import 'primevue/resources/primevue.min.css';

  .full-width-toolbar {
    width: 100%;
    background-color: rgba(167, 138, 171, 1);
    color: white;
    position: fixed;
    z-index: 1000;
    font-family: "Comic Sans", sans-serif;
    font-weight: lighter;
    font-size: 20px;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
  }

  h1{
    margin: 0;
  }

  p{
    height:20px;
    width: 100%;
    padding-left: 20px;
    margin-bottom: 20px;
    align-items: center;

  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(229, 221, 230, 0.8392);
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    position: absolute;
    font-family: "Comic Sans", sans-serif;
    font-weight: lighter;
    font-size: 20px;
    top: 100px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }
  .formAndimg{
    height:80%;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

  }

  .formContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    height: 90%;
  }

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: rgba(167, 138, 171, 1);
    padding-top: 30px;
    padding-bottom: 30px;
    border-radius: 35px;
    width: 80%;
    height: 600px;
  }

  .fname, .lname, .age, .mail, .password, .qualific, .schoolNo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height:10%;
    background-color: rgba(217, 217, 217, 1);
    border-radius: 20px;
    padding: 5px 20px 5px 20px;


  }

  .fname label, .lname label, .age label, .mail label, .password label, .qualific label, .schoolNo label {
    flex: 1;
    text-align: left;
  }

  .fname input, .lname input, .age input, .mail input, .password input, .qualific input, .schoolNo input {
    flex: 2;
    border-radius: 7px;
    border: none;
    padding: 3px 10px 3px 10px;
    height:80%;

  }

  .buttonDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 70%;
  }
  .buttonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    height: 90%;
    border-radius: 10px;
  }

  .buttonBackground {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 350px;
    background-color: rgba(167, 138, 171, 1);
    border-radius: 35px;
  }

  #customButton {
    width: 400px;
    height: 350px;
    background: url('@/assets/images/default-image.png') no-repeat;
    background-size: cover;
    border: none;
    color: transparent;
  }

.buttonDiv {
    height: 60%;

    border-radius: 10px;
    border: none;

    font-size: 20px;
    font-weight: bold;
  }

.continueDiv{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
}

#continueButton {
  width: 228px;
  height: 83px;
  background-color: rgba(167, 138, 171, 1);
  border-radius: 35px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  color: white;
}
</style>