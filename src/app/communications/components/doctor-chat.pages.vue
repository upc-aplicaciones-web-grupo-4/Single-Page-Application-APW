<template>
  <div class="main-container">
    <div class="chat-container">
      <div class="chats-list">
        <div v-for="patient in patients" :key="patient.id" class="chat-item" @click="selectPatient(patient)">
          <div class="chat-avatar">{{ patient.avatar }}</div>
          <div class="chat-info">
            <div class="chat-title">{{ patient.name }}</div>
            <div class="last-message">{{ patient.lastMessage }}</div>
          </div>
        </div>
      </div>
      <div class="message-container" v-if="selectedPatient">
        <div class="messages">
          <div v-for="message in selectedPatient.messages" :key="message.id" class="message" :class="{ 'mine': message.sender === 'user' }">
            <div class="message-content">{{ message.text }}</div>
          </div>
        </div>
        <form @submit.prevent="sendMessage">
          <input type="text" v-model="newMessage" placeholder="Escribe un mensaje..." />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      patients: [
        {
          id: 1,
          name: 'Patient Hernan',
          avatar: '👤',
          lastMessage: 'Okey',
          messages: [
            { id: 1, text: "¡Hola! ¿Cómo estás?", sender: 'other' },
            { id: 2, text: "Hola, todo bien ¿y tú?", sender: 'user' },
            { id: 3, text: "¡Genial! No olvides de la cita que tenemos mañana a las 8:00pm!!.", sender: 'other' },
            { id: 4, text: "Puntual..", sender: 'other' },
            { id: 5, text: "Okey", sender: 'user' },
          ]
        },
        {
          id: 2,
          name: 'Patient Jose',
          avatar: '👤',
          lastMessage: '¡Doctooor!',
          messages: [
            { id: 1, text: "Doctor, necesito su ayuda.", sender: 'other' },
            { id: 2, text: "Claro, ¿en qué puedo ayudarte?", sender: 'user' },
            { id: 3, text: "Tengo un dolor en el pecho.", sender: 'other' },
            { id: 4, text: "Entiendo. ¿Cuándo comenzó?", sender: 'user' },
          ]
        },
        {
          id: 3,
          name: 'Patient Nicolle',
          avatar: '👤',
          lastMessage: 'Buen día!',
          messages: [
            { id: 1, text: "Buen día, doctor!", sender: 'other' },
            { id: 2, text: "Buen día, Nicolle. ¿Cómo te sientes hoy?", sender: 'user' },
            { id: 3, text: "Mucho mejor, gracias.", sender: 'other' },
          ]
        },
        {
          id: 4,
          name: 'Patient Maria',
          avatar: '👤',
          lastMessage: 'Buen día!',
          messages: [
            { id: 1, text: "Doctor, tengo una pregunta.", sender: 'other' },
            { id: 2, text: "Claro, ¿cuál es tu pregunta?", sender: 'user' },
          ]
        },
      ],
      selectedPatient: null,
      newMessage: ''
    };
  },
  methods: {
    selectPatient(patient) {
      this.selectedPatient = patient;
      console.log('Paciente seleccionado:', patient);
    },
    sendMessage() {
      if (this.newMessage.trim()) {
        const newId = this.selectedPatient.messages.length + 1;
        this.selectedPatient.messages.push({ id: newId, text: this.newMessage, sender: 'user' });
        this.newMessage = '';
      }
    }
  }
}
</script>

<style scoped>
.main-container {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.chat-container {
  display: flex;
  flex-grow: 1;
}

.chats-list {
  width: 20vw;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
  overflow-y: auto;
  padding: 10px;
}

.chat-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.chat-item:hover {
  background-color: #e0e0e0;
}

.chat-avatar {
  font-size: 24px;
  margin-right: 15px;
}

.chat-info {
  flex: 1;
}

.chat-title {
  font-weight: bold;
  color: #333;
}

.last-message {
  color: #666;
}

.message-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(119, 158, 255, 0.2);
  overflow: hidden;
  margin-left: 20px;
}

.messages {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.message {
  padding: 15px;
  border-radius: 20px;
  color: white;
  max-width: 80%;
}

.message-content {
  word-wrap: break-word;
}

.mine {
  background-color: #ad9999;
  align-self: flex-end;
}

.message:not(.mine) {
  background-color: #A788AB;
  align-self: flex-start;
}

form {
  display: flex;
  border-top: 1px solid #ccc;
}

input {
  flex-grow: 1;
  padding: 15px;
  border: none;
}

button {
  padding: 15px;
  border: none;
  background-color: #2196f3;
  color: white;
  cursor: pointer;
  width: 80px;
}
</style>
