<script >
import Checkbox from 'primevue/checkbox';
import Card from 'primevue/card';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from 'primevue/dialog';

export default {
  components: {
    Checkbox,
    'p-card' : Card,
    DataTable,
    Column,
    Dialog
  },
  data() {
    return {
      visible: false,
      toppings: {
        pepperoni: false,
        extraCheese: false,
        mushroom: false
      }
    };
  },
  computed: {
    toppingsArray() {
      return Object.keys(this.toppings).map(key => ({
        name: key,
        value: this.toppings[key]
      }));
    }
  }
};
</script>

<template>
  <div class="cont">
    <div class="box1">

      <div class="part1">
        <div class="reminder-container">
          <h2>Today's reminders</h2>
          <a href="https://www.google.com/" target="_blank">Your next appointment...</a>
        </div>
      </div>
      <div class="part2">
        <p-card style="width: 100%; overflow: hidden; border-radius: 20px; background-color: #8f7193">
          <template #content>
            <div v-for="(topping, index) in toppingsArray" :key="index">
              <div class="con" >
                <p style="width: 70%; background-color: #dfcae1; border-radius: 10px; padding:10px; "><b>{{ topping.name }}</b></p>
                <p style="width: 20%; background-color: #dfcae1; border-radius: 10px; padding:10px; "><b>{{ topping.value }}</b></p>
              </div>
            </div>
          </template>
        </p-card>

      </div>

    </div>
    <div class="box2">

      <div class="part1">
        <p-card style="width: 100%; overflow: hidden; border-radius: 20px; background-color: #8f7193" >

          <template  #content>

            <div class="sec">
              <h2>Earrings</h2>
              <div>
                <Checkbox id="pepperoni" v-model="toppings.pepperoni" />
                <label for="pepperoni">Pepperoni</label>
              </div>
              <div>
                <Checkbox id="extraCheese" v-model="toppings.extraCheese" />
                <label for="extraCheese">Extra Cheese</label>
              </div>
              <div>
                <Checkbox id="mushroom" v-model="toppings.mushroom" />
                <label for="mushroom">Mushroom</label>
              </div>

            </div>


          </template>
        </p-card>
      </div>
      <div class="part2">
        <Button label="Show" @click="visible = true"  class="but"><b>Upload your exams</b></Button>

        <Dialog v-model:visible="visible" class="dialog" :modal="true" header="Pending exams" :style="{ width: '40%'  }" :closable="false" >
          <div class="dialog-content">
            <div>
              <Checkbox v-model="toppings.pepperoni" /><label>Peppaseroni</label><input  class="input" type="file">
            </div>
            <div>
              <Checkbox v-model="toppings.extraCheese" /><label>Extra Cheese</label><input  class="input" type="file">
            </div>
            <div>
              <Checkbox v-model="toppings.mushroom" /><label>Mushroom</label><input  class="input" type="file">
            </div>
          </div>
          <div class="dialog-actions">
            <div class="flex justify-content-end gap-2">
              <Button type="button" label="Cancel" severity="secondary" @click="visible = false">No</Button>
              <Button type="button" label="Save" @click="visible = false">Ok</Button>
            </div>
          </div>
        </Dialog>



      </div>

    </div>
  </div>
</template>

<style scoped>
.cont {
  box-sizing: border-box;
  width:100%;
  display: flex;
  flex-direction: row !important;
  gap: 20px;
  background-color: #e5dde6;
}

.box1, .box2 {
  box-sizing: border-box;
  padding: 4vw;
  width:50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.part1, .part2 {
  width:100%;
}
.reminder-container {
  display: flex;
  align-items: center; /* Alinea los elementos verticalmente en el centro */
  gap: 10px; /* Espacio entre los elementos */
}
.reminder-container h2 {
  margin: 0; /* Elimina el margen por defecto */
  font-size: 25px;


}
.reminder-container a {
  padding:10px;
  background-color: #dfcae1;
  color: black;
  border-radius: 10px;
}

.con {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Espacio entre los toppings */
  font-size: 16px;

}


.sec h2{
  margin: 0;
  text-align: left;
  font-size: 25px;
  color: white;
}

.sec {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding : 0 20px;
}
.sec div {

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}
.sec label{
  width:100%;
  background-color: white;
  padding: 10px;
  border-radius: 20px;
  text-align: left;
}



.dialog-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.dialog-content div {

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}
.dialog-content label {
  width: 40%;
  text-align: left;
  font-weight: 600;
}

.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

Button {
  background-color: #dfcae1;
  color: black;
  padding: 10px 20px ;
  border-radius: 10px;
  margin-left: 20px;

}
.but{
  width:100%;
  margin-left: 0;
  font-size: 2vw;
}

.input[type="file"] {
  width: 50%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
}

</style>