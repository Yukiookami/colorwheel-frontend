<template>
 <div id="header" class="wrap">
  <div class="header">
   <h1 class="logo">
    <router-link to="/">
     <img src="../assets/logo.png">
    </router-link>
   </h1>
  </div>
  <div class="top-nav">
   <div id="navList" class="navlist-wrap">
    <div class="navlist clearfix">
     <span class="nav-btn">
      <router-link to="/" style="color:white;text-decoration:none;padding-bottom:10px;">首页<br/>HOME</router-link>
     </span>
     <span class="nav-btn">
      <router-link to="/newproduct" style="color:white;text-decoration:none;">新品季<br/>NEW</router-link>
     </span>
     <span class="nav-btn">
      <router-link to="/artist" style="color:white;text-decoration:none;">艺术家<br/>ARTIST</router-link>
     </span>
     <span class="nav-btn">
      <router-link to="/exhibition" style="color:white;text-decoration:none;">展览信息<br/>EXHIBITION</router-link>
     </span>
     <span class="nav-btn">
      <router-link to="/support" style="color:white;text-decoration:none;font-size:16px;">获得支持<br/>SUPPORT</router-link>
     </span>
    </div>
   </div>
  </div>
 </div>
</template>

<style scoped>
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
</style>
