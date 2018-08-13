<template>
<div class="navbar navbar-inverse" >
     <router-link to="/">
     <img  class="logo" src="../assets/logo.png">
    </router-link>
<div class="container">
<div class="navbar-header">
<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navBar">
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
</div>
<div class="collapse navbar-collapse navbar-right" id="navBar">
  <ul class="nav navbar-nav" :style="{ margin: '7.5px 0' }">
    <li><router-link to="/">首页<br/>HOME</router-link></li>
    <li><router-link to="/newproduct">新品季<br/>NEW</router-link></li>
    <li><a href="/artist">艺术家<br/>ARTIST</a></li>
    <li><router-link to="/exhibition">展览信息<br/>EXHIBITION</router-link></li>
    <li><router-link to="/support">获得支持<br/>SUPPORT</router-link></li>
    <li><router-link to="/store">商城<br/>STORE</router-link></li>
  </ul>
</div>
</div>
</div>
</template>

<script>
export default {
  mounted: function () {
    var listLi = document.getElementsByTagName('li')
    var navBar = document.getElementById('navBar')
    for (let i = 0; i < listLi.length; i++) {
      (function (i) {
        listLi[i].onclick = function () {
          navBar.className = 'collapse navbar-collapse navbar-right'
        }
      })(i)
    }
  }
}
</script>

<style scoped>
/* .navbar{
  margin-bottom: 0;
} */
.logo {
  position: absolute;
  top: 20px;
  left: 15%;
}
.header {
  width: 100%;
  margin: 0 auto;
  height: 10%;
  padding: 12px 0 18px;
  position: relative;
  *z-index: 1;
  background-color: #353535;
  color: #ffffff;
}
.header .logo {
  height: 30px;
  width: 40px;
  margin-top: 20px;
  margin-left: 180px;
}
.top-nav .navlist-wrap {
  width: 100%;
  margin: 0 auto;
  position: relative;
}
.top-nav .navlist {
  position: absolute;
  right: 130px;
  top: -40px;
}
.top-nav .navlist .nav-btn {
  display: flex;
  align-items: flex-start;
  float: left;
  margin-left: 60px;
  color: #666;
  vertical-align: middle;
  text-decoration: none;
}
@media (max-width: 767px) {
  .logo {
    height: 3rem;
    top: 10px;
  }
}
</style>
