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

<style >
.footer {
  background-color: #A788AB;
  padding: 20px 0;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
  font-size: 14px;
}
</style>