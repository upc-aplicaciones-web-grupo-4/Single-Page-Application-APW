<template>
  <div class="two-column-container">
    <div class="two-column-title">Personal history</div>
    <input-text class="two-column-item" v-model="personalHistory"></input-text>
    <div class="two-column-title">Family background</div>
    <input-text class="two-column-item" v-model="familyBackground"></input-text>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  components: {
  },
  setup() {
    const personalHistory = ref('');
    const familyBackground = ref('');

    return {
      personalHistory,
      familyBackground
    }
  }
}
</script>

<style scoped>
.two-column-container {
  display: flex;
  height: 80%;
  width: 80%;
  margin-left: 40px;
}

.two-column-item {
  flex: 1;
  padding: 00px;
  box-sizing: border-box;
  margin-top: 40px;
  margin-left: -150px;
}

.two-column-title {
  font-size: 1.2em;
  font-weight: bold;
  padding: 10px;
  color: #000000;
  text-align: center;
}
</style>