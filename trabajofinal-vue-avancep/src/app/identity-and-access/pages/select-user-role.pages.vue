<script setup>
import Card from 'primevue/card';
import Toolbar from "primevue/toolbar";
</script>

<template>
  <Toolbar class="full-width-toolbar">
    <template #start>
      <h2>HormonalCare</h2>
    </template>
  </Toolbar>

  <div class="full-screen-background">
    <div class="textAndCards">
      <div class="selectUserText">
        <h1>Select your user Type</h1>
      </div>
      <div class="userCards">
        <Card title="Patient" class="patientCard">
          <template #content>
            <h1 class="patientTitle">Patient</h1>
            <div class="circle">
              <img src="@/assets/images/patient-icon.png" alt="Patient icon" style="width: 100px; height: 100px; margin-top: 20px; margin-left: 20px; margin-right: 20px; margin-bottom: 20px;">
            </div>
          </template>
        </Card>
        <Card title="Doctor" class="endocrinologistCard">
          <template #content>
            <h1 class="endocrinologistTitle">Endocrinologist</h1>
            <div class="circle">
              <img src="@/assets/images/doctor-icon.png" alt="Patient icon" style="width: 100px; height: 100px; margin-top: 20px; margin-left: 20px; margin-right: 20px; margin-bottom: 20px;">
            </div>
          </template>
        </Card>
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
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
  }

  .full-screen-background {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(229, 221, 230, 1);
    background-image: url('@/assets/images/select-user-role-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: absolute;
    top: 100px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }

  .textAndCards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    position: relative;
  }

  .selectUserText {
    display: flex;
    justify-content: center;
    z-index: 4000;
    position: relative;
  }

  .userCards {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    z-index: 3000;
    position: relative;
  }

  .patientCard {
    background-color: rgba(192, 160, 195, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-bottom:20px;
    margin-right: 20px;
    border-radius: 10%;
    width: 25rem;
  }

  .endocrinologistCard {
    background-color: rgba(192, 160, 195, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-bottom:20px;
    margin-left: 20px;
    border-radius: 10%;
    width: 25rem;
  }

  .endocrinologistTitle {
    text-align: center;
  }

   .patientTitle {
     text-align: center;
   }

  .circle {
    background-color: rgba(223, 202, 225, 1);
    width: 140px;
    height: 140px;
    border-radius: 50%;
    margin: 0 auto;
  }
</style>