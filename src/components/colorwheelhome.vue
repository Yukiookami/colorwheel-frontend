<template>
 <div id="home">
  <h2 @click="a">主页</h2>
 </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    a: function() {
      console.log($);
    }
  }
} 
</script>

<style scoped>
 #home{
  width: 100%;
  height: 600px;
 }
</style>
