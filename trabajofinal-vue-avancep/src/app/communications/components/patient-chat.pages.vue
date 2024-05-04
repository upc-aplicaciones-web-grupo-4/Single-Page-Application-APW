<script>
export default {
  data() {
    return {
      messages: [
        { id: 1, text: "¡Hola! ¿Cómo estás?", sender: 'other' },
        { id: 2, text: "Hola, todo bien ¿y tú?", sender: 'user' },
        { id: 3, text: "¡Genial! No olvides de la cita que tenemos mañana a las 8:00pm!!.", sender: 'other' },
        { id: 3, text: "Puntual..", sender: 'other' }

      ],
      newMessage: ''
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        const newId = this.messages.length + 1;
        this.messages.push({ id: newId, text: this.newMessage, sender: 'user' });
        this.newMessage = '';
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="chat-container">
      <div class="messages" style="height: 400px;">
        <div v-for="message in messages" :key="message.id" class="message" :class="{ 'mine': message.sender === 'user' }">
          <div class="message-content">{{ message.text }}</div>
        </div>
      </div>
      <form @submit.prevent="sendMessage">
        <input type="text" v-model="newMessage" placeholder="Escribe un mensaje..." style="width: calc(100% - 80px);" />
        <button type="submit" style="width: 80px;">Enviar</button>
      </form>
    </div>
  </div>
</template>


<style scoped>

.container {
  width: 250vw;
  display: flex;
}

.chat-container {
  width: 100%;
  max-width: none;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(119, 158, 255, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.messages {
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 400px;
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
  background-color: #4caf50;
  align-self: flex-end;
}

.message:not(.mine) {
  background-color: #2196f3;
  align-self: flex-start;
}

input {
  padding: 15px;
  border: none;
  flex-grow: 1;
  border-radius: 0;
}

button {
  padding: 15px;
  border: none;
  background-color: #2196f3;
  color: white;
  cursor: pointer;
}

form {
  display: flex;
  border-top: 1px solid #ccc;
}
</style>
