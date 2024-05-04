<script>
export default {
  name: "FooterContent"
}
</script>

<template>
  <div class="footer">
    <div class="content">
      <p>Copyright &copy; 2024. Ninja Code</p>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: #A788AB;
  padding: 20px 0;
  margin-top: 100vh; /* Ajusta este valor según tus necesidades */
  width: 100%;
  text-align: center;
position: absolute;
}

.content {
  width: 100%;
  margin: 0 auto;
  color: #fff;
  font-size: 14px;
}
</style>