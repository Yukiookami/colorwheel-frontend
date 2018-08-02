<template>
<div id="footer">
  <div>
    <router-link to="/">
      <img src="../assets/logo-f.png">
    </router-link>
    <div>
      <input placeholder="请输入E-mail">
      <button>订阅</button>
    </div>
  </div>
  <div>

  </div>
</div>
</template>

<script>
export default({
  name:'footer'
})
</script>

<style scoped>
#footer {
  height:331px;
  background-color: #f8f8f8;
}
</style>
