<template>
  <div></div>  <div class="container">
  <div class="chats-list">
    <div v-for="chat in chats" :key="chat.id" class="chat-item" @click="selectChat(chat)">
      <div class="chat-avatar">{{ chat.avatar }}</div>
      <div class="chat-info">
        <div class="chat-title">{{ chat.title }}</div>
        <div class="last-message">{{ chat.lastMessage }}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      chats: [
        { id: 1, title: 'Dr. Emilio', avatar: '👤', lastMessage: 'Puntual.' },
        { id: 2, title: 'Dr. Ramon', avatar: '👤', lastMessage: '¡No olvides tus pastillas!' },
        { id: 3, title: 'Dra. Cecilia', avatar: '👤', lastMessage: 'Buen día!' },
      ]
    };
  },
  methods: {
    selectChat(chat) {
      console.log('Chat seleccionado:', chat);
    }
  }
}
</script>

<style scoped>

.container {
  width: 100vw;
  display: flex;
}


.chat-item {
  display: flex;
  align-items: center;
  padding: 70px;
  border-radius: 5px;
  background-color: #f5f5f5;
  margin-bottom: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 1rem;
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
</style>

