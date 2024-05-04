<template>
  <section>
    <div class="box1">
      <form @submit.prevent="onSubmit">
        <div class="input-row">
          <p>Medication name:</p>
          <InputText placeholder="medication name" v-model="form.medicationName" required />
        </div>
        <div class="input-row">
          <p>Amount:</p>
          <InputText placeholder="amount" v-model="form.amount" required />
        </div>
        <div class="input-row">
          <p>Concentration:</p>
          <InputText placeholder="concentration" v-model="form.concentration" required />
        </div>
        <div class="input-row">
          <p>Frequency (h):</p>
          <InputText placeholder="frequency" v-model="form.frequency" required />
        </div>
        <div>
          <Button @click="resetForm" label="Add" icon="pi pi-plus" class="p-button-rounded p-button-success p-mr-2"></Button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { Button } from 'primevue/button';
import { InputText } from 'primevue/inputtext';

export default {
  components: {
    Button,
    InputText
  },
  setup() {
    const form = ref({
      medicationName: '',
      amount: '',
      concentration: '',
      frequency: ''
    })

    const resetForm = () => {
      form.value = {
        medicationName: '',
        amount: '',
        concentration: '',
        frequency: ''
      }
    }

    const onSubmit = () => {
      // Aquí puedes agregar la lógica para manejar el envío del formulario
    }

    return {
      form,
      resetForm,
      onSubmit
    }
  }
}
</script>
<style scoped>
section {
  box-sizing: border-box;
  width: 100%;
  height: calc(512px - 56px);
  background-color: white;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 22px;
}

.box1 {
  box-sizing: border-box;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #A788AB;
  border-radius: 20px;
  padding: 10px;
}

form {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input-row p, .input-row input {
  width: 40%;
  margin-top: -10px;
}

p{
  margin-bottom: 0;
}

input {
  padding: 10px;
  border-radius: 5px;
}

button{
  margin-top: -10px;
}
</style>