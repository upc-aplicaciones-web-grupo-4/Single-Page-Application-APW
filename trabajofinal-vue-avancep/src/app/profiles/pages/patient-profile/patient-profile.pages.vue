<script>
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import { ref } from 'vue';
import FileUpload from 'primevue/fileupload';
import PatientService from '../../services/patients.service'; // Importa tu servicio de pacientes

export default  {
  components: {
    'p-card' : Card,
    InputText,
    Password,
    Button,
    FileUpload
  },
  data() {
    return {
      profile: {
        name: '',
        lastname: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    updateProfile() {
      // Aquí puedes agregar la lógica para actualizar el perfil
    },
    loadPatientById(patientId) {
      PatientService.getPatientById(patientId)
          .then(response => {
            this.profile = response.data;
          })
          .catch(error => {
            console.error(error);
          });
    }
  },

  mounted() {
    // Carga inicial del paciente con ID 1
    this.loadPatientById(1);
  },
  setup() {
    const imageSrc = ref('https://th.bing.com/th/id/R.8118c65e71a4c667f8de22354f0c0794?rik=kSaBHPfWgjOZPg&pid=ImgRaw&r=0');

    const onUpload = (event) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        imageSrc.value = e.target.result; // Actualiza imageSrc con la nueva imagen
      };
      fileReader.readAsDataURL(event.files[0]);
    };

    return {
      imageSrc,
      onUpload
    };
  }
}
</script>

<template>
  <div class="p-d-flex p-jc-center p-ai-center p-h-100">
  <div class="cont">
    <div class="box1">

      <div class="part1">
        <div class="contimg" >
          <img class="imgprofile" :src="imageSrc" alt="Imagen de perfil">
          <FileUpload style="margin-top:20px;" :auto="true" @upload="onUpload" mode="basic" accept="image/*" chooseLabel="Edit photo" />        </div>

      </div>
      <div class="part2">
        <p-card   title="Profile"  style="width: 100%; overflow: hidden; border-radius: 20px; background-color: #8f7193">
          <template #content>
            <div class="p-fluid">
              <div class="p-field">
                <label for="name">Name</label>
                <InputText id="name" v-model="profile.name" />
              </div>
              <div class="p-field">
                <label for="lastname">Lastname</label>
                <InputText id="lastname" v-model="profile.lastname" />
              </div>
              <div class="p-field">
                <label for="email">E-mail</label>
                <InputText id="email" v-model="profile.email" />
              </div>
              <div class="p-field">
                <label for="password">Password</label>
                <Password class="password" id="password" v-model="profile.password" />
              </div>
              <Button class="butup" label="Update" @click="updateProfile" />
            </div>
          </template>
        </p-card>


      </div>
    </div>
    <div class="box2">

      <div class="part1">

        <p-card style="width: 100%; padding: 0; border-radius: 20px;">
          <template #content >
            <div class="contref">
              <div class="ref1">
                <h3>Doctor consultations</h3>
                <p>Schedule your next visit or resolve your medical questions, click here.</p>
              </div>
              <div class="ref2">
                <a :href="link">
                  <img class="imgref" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD2klEQVR4nO2aS0tVURTHfw7yQUVYfYFUNEmzjJKaFJUJKTUoMJolln6BMBs1LRUdlA0aVRSRNSsrpAaaSPYYZ/aQnJU6SIUs09iwAtmsI95z9z733jx/2KDX63+tvc8+6w0xYsSIESOGb5QATcB14DnwEZgCfsmaks/M37rlu8VkOLYDHcA4sBhyfQXahSsjkAXUAoNJbDpovQSOioy0xC7glYeN22sIqCSNkAt0AfPLKP0DeAy0AHViE/KBNbLy5bM6+U4vML0Mn5HVCeSkevNFwLsAJReAR8CJkIqagz0pB7cQIOMtUEiKsBeYDNj4PaDMoaxy4H7AIUwAVUSMI8CMosx74IBHuQeBEUWu0aWaiLAnYPO3gHURyM8DbijyZ4F9Ubzzk8qVP0/0uKDYhu9AgS+BuYrBMwo0kjqcVQ7htS/v0KVcu1Q8eRstil4menQe5MxbQm6G5NqBe9y2dPvtUk6WEuEZa782BNcl4A/QgFsY4/tBCZ2doFa5YsYdhdn8UtvRjFvsV+xBjQviQYvUBDmJYqc8+aU8Pm5CjyWjP1nCMsXqh43wziiH4PombFNkmCgyNDosMhPbJ4OGCG5Cr8V/JRmycYvMJCek+SHUW9xjYYlKlJTWVYDh8xDylFDdRLAJo9kiMWmpS/g8hKcW77kwJN0WiYm4yJBDaLU4r4YheWGRmHjAB3x4h2MWX18Yki8Wic8yteubsNXi+hSGZMIi2YRfBB2CuSGJYrOSJieMOYskG//QXgfz++kEeXIsjp9hlJlb7Qcwsdpfgc//kRE0fcek3WAdmeMGj7twg92rPRBqskhMlpUpofAzi9cUTxNGsUUyLZXhTEiGZl0kQ0h/ftWmw0h5OdMKIk8s/suuS2LlaVwSq1AKo0mVxJDy8lJC06VN16LoQ9dFUWQsZdFBWbzFc1n8sKKn6WI7aYwMWcQjITvBvhoj64FRS8cBlwIqldaYaUelS2vsrtIaM/bAKTqVK2Za1KnGRUWvNh+CcoA3ihUPVXB0hCbF6g/7TN0LlTR5wVOesJInb2/+G7DFt+DdASNsD4ANvoWLwbujyJ+Vwa1IUB0wJ2Ra1Ic8y7Wt/b88xbjBSFEllZZFZfU4nu+tUIKcpdfeDG6lBAUyk6MptiApdL1kaInC/M8pie2DBiWHo3jnV+Id2sX3LgasGWlXtUrTohTYKNY6W34ulUpOq+Tzdkpr+/m2iAq1CQU4dt7gYw34CHJcokaSENcb73cV20eFMhlOGEti02OSz7ucO04JiqQud00qtKMycTona1JcaJ98pzGZMlaMGDFixIjBivAXHPTf+GkCkskAAAAASUVORK5CYII=" alt=""></a>
              </div>
            </div>
          </template>
        </p-card>

      </div>
      <div class="part2">
        <p-card style="width: 100%; padding: 0; border-radius: 20px;">
          <template #content >
            <div class="contref">
              <div class="ref1">
                <h3>Check the status of my treatment</h3>
                <p>For a detailed evaluation and adjustments to your treatment, click here.</p>
              </div>
              <div class="ref2">
                <a :href="link">
                  <img class="imgref" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD2klEQVR4nO2aS0tVURTHfw7yQUVYfYFUNEmzjJKaFJUJKTUoMJolln6BMBs1LRUdlA0aVRSRNSsrpAaaSPYYZ/aQnJU6SIUs09iwAtmsI95z9z733jx/2KDX63+tvc8+6w0xYsSIESOGb5QATcB14DnwEZgCfsmaks/M37rlu8VkOLYDHcA4sBhyfQXahSsjkAXUAoNJbDpovQSOioy0xC7glYeN22sIqCSNkAt0AfPLKP0DeAy0AHViE/KBNbLy5bM6+U4vML0Mn5HVCeSkevNFwLsAJReAR8CJkIqagz0pB7cQIOMtUEiKsBeYDNj4PaDMoaxy4H7AIUwAVUSMI8CMosx74IBHuQeBEUWu0aWaiLAnYPO3gHURyM8DbijyZ4F9Ubzzk8qVP0/0uKDYhu9AgS+BuYrBMwo0kjqcVQ7htS/v0KVcu1Q8eRstil4menQe5MxbQm6G5NqBe9y2dPvtUk6WEuEZa782BNcl4A/QgFsY4/tBCZ2doFa5YsYdhdn8UtvRjFvsV+xBjQviQYvUBDmJYqc8+aU8Pm5CjyWjP1nCMsXqh43wziiH4PombFNkmCgyNDosMhPbJ4OGCG5Cr8V/JRmycYvMJCek+SHUW9xjYYlKlJTWVYDh8xDylFDdRLAJo9kiMWmpS/g8hKcW77kwJN0WiYm4yJBDaLU4r4YheWGRmHjAB3x4h2MWX18Yki8Wic8yteubsNXi+hSGZMIi2YRfBB2CuSGJYrOSJieMOYskG//QXgfz++kEeXIsjp9hlJlb7Qcwsdpfgc//kRE0fcek3WAdmeMGj7twg92rPRBqskhMlpUpofAzi9cUTxNGsUUyLZXhTEiGZl0kQ0h/ftWmw0h5OdMKIk8s/suuS2LlaVwSq1AKo0mVxJDy8lJC06VN16LoQ9dFUWQsZdFBWbzFc1n8sKKn6WI7aYwMWcQjITvBvhoj64FRS8cBlwIqldaYaUelS2vsrtIaM/bAKTqVK2Za1KnGRUWvNh+CcoA3ihUPVXB0hCbF6g/7TN0LlTR5wVOesJInb2/+G7DFt+DdASNsD4ANvoWLwbujyJ+Vwa1IUB0wJ2Ra1Ic8y7Wt/b88xbjBSFEllZZFZfU4nu+tUIKcpdfeDG6lBAUyk6MptiApdL1kaInC/M8pie2DBiWHo3jnV+Id2sX3LgasGWlXtUrTohTYKNY6W34ulUpOq+Tzdkpr+/m2iAq1CQU4dt7gYw34CHJcokaSENcb73cV20eFMhlOGEti02OSz7ucO04JiqQud00qtKMycTona1JcaJ98pzGZMlaMGDFixIjBivAXHPTf+GkCkskAAAAASUVORK5CYII=" alt=""></a>
              </div>
            </div>
          </template>
        </p-card>
      </div>
      <div class="part3">
        <p-card style="width: 100%; padding: 0; border-radius: 20px;">
          <template #content >
            <div class="contref">
              <div class="ref1">
                <h3>Set up notifications</h3>
                <p>Activate or customize your alerts to stay informed, click here.</p>
              </div>
              <div class="ref2">
                <a :href="link">
                  <img class="imgref" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD2klEQVR4nO2aS0tVURTHfw7yQUVYfYFUNEmzjJKaFJUJKTUoMJolln6BMBs1LRUdlA0aVRSRNSsrpAaaSPYYZ/aQnJU6SIUs09iwAtmsI95z9z733jx/2KDX63+tvc8+6w0xYsSIESOGb5QATcB14DnwEZgCfsmaks/M37rlu8VkOLYDHcA4sBhyfQXahSsjkAXUAoNJbDpovQSOioy0xC7glYeN22sIqCSNkAt0AfPLKP0DeAy0AHViE/KBNbLy5bM6+U4vML0Mn5HVCeSkevNFwLsAJReAR8CJkIqagz0pB7cQIOMtUEiKsBeYDNj4PaDMoaxy4H7AIUwAVUSMI8CMosx74IBHuQeBEUWu0aWaiLAnYPO3gHURyM8DbijyZ4F9Ubzzk8qVP0/0uKDYhu9AgS+BuYrBMwo0kjqcVQ7htS/v0KVcu1Q8eRstil4menQe5MxbQm6G5NqBe9y2dPvtUk6WEuEZa782BNcl4A/QgFsY4/tBCZ2doFa5YsYdhdn8UtvRjFvsV+xBjQviQYvUBDmJYqc8+aU8Pm5CjyWjP1nCMsXqh43wziiH4PombFNkmCgyNDosMhPbJ4OGCG5Cr8V/JRmycYvMJCek+SHUW9xjYYlKlJTWVYDh8xDylFDdRLAJo9kiMWmpS/g8hKcW77kwJN0WiYm4yJBDaLU4r4YheWGRmHjAB3x4h2MWX18Yki8Wic8yteubsNXi+hSGZMIi2YRfBB2CuSGJYrOSJieMOYskG//QXgfz++kEeXIsjp9hlJlb7Qcwsdpfgc//kRE0fcek3WAdmeMGj7twg92rPRBqskhMlpUpofAzi9cUTxNGsUUyLZXhTEiGZl0kQ0h/ftWmw0h5OdMKIk8s/suuS2LlaVwSq1AKo0mVxJDy8lJC06VN16LoQ9dFUWQsZdFBWbzFc1n8sKKn6WI7aYwMWcQjITvBvhoj64FRS8cBlwIqldaYaUelS2vsrtIaM/bAKTqVK2Za1KnGRUWvNh+CcoA3ihUPVXB0hCbF6g/7TN0LlTR5wVOesJInb2/+G7DFt+DdASNsD4ANvoWLwbujyJ+Vwa1IUB0wJ2Ra1Ic8y7Wt/b88xbjBSFEllZZFZfU4nu+tUIKcpdfeDG6lBAUyk6MptiApdL1kaInC/M8pie2DBiWHo3jnV+Id2sX3LgasGWlXtUrTohTYKNY6W34ulUpOq+Tzdkpr+/m2iAq1CQU4dt7gYw34CHJcokaSENcb73cV20eFMhlOGEti02OSz7ucO04JiqQud00qtKMycTona1JcaJ98pzGZMlaMGDFixIjBivAXHPTf+GkCkskAAAAASUVORK5CYII=" alt=""></a>
              </div>
            </div>
          </template>
        </p-card>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.p-h-100 {
  height: 100vh;
}
.cont {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width:100%;
  height: 91vh;
  background-color: #e5dde6;
}

.box1, .box2 {
  box-sizing: border-box;
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: center; /* Centra los elementos horizontalmente */
  align-items: center; /* Centra los elementos verticalmente */
  gap: 20px;
  padding: 40px;

}




.contimg{
  box-sizing: border-box;
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.part1, .part2, .part3 {
  box-sizing: border-box;
  width:100%;
  display: flex;
  flex-direction: row;
}

.p-fluid {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;

}

.p-field {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.p-field label {
  box-sizing: border-box;
  font-weight: bold;
  width: 25%;
}

.p-field input {
  box-sizing: border-box;
  width: 75%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.password{
  width: 75%;
}
.butup {
  width: 25%;
  background-color: #dfcae1;
  color: black;
  border-radius: 10px;
  border-color: #e5dde6;
  margin: auto;
}
.butup:hover {

  background-color: white !important;
  color: black;

  border-color: #e5dde6;

}


.contref{
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding :0;
  align-items: center;
}

.ref1, .ref2 {
  box-sizing: border-box;
  padding :0;
  text-align: left;

}

h3{
  font-size: 1.5vw;
  margin: 0;
}
p{
  margin: 0;
  font-size: 1vw;
}

.imgref{
  width: 3vw;
}
.imgprofile {
  width: 20vw;
  border-radius: 20px;
}

</style>