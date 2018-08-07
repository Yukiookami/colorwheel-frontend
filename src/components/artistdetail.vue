<template>
  <div class="detail-box">
    <div class="crumbs">
      <router-link to="./artist">{{upletext}}</router-link>
      <span>> {{name}}</span>
    </div>
    <figure></figure>
  </div>
</template>

<script>
export default {
  data () {
    return {
      upletext: '代理艺术家',
      name: '李大鹏'
    }
  }
}
</script>

<style>
.detail-box {
  margin: 0 auto;
  width: 80vw;
}

.crumbs {
  display: flex;
  justify-content: flex-start;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px rgba(0, 0, 0, .3) solid;
}
</style>
