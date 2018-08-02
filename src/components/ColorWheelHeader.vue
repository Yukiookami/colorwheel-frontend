<template>
   <div class="navbar navbar-fixed-top navbar-inverse" > 
     
   
    <router-link to="/">
     <img src="../assets/logo.png">
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
<ul class="nav navbar-nav"> 
    <ul style="margin: 7.5px 0;" class="nav navbar-nav"> 
        <li><router-link to="/">首页<br/>HOME</router-link></li> 
        <li><router-link to="/newproduct">新品季<br/>NEW</router-link></li> 
        <li><router-link to="/artist">艺术家<br/>ARTIST</router-link></li>
        <li><router-link to="/exhibition">展览信息<br/>EXHIBITION</router-link></li>
        <li><router-link to="/support">获得支持<br/>SUPPORT</router-link></li>
    </ul>  
</ul> 
</div> 
</div> 
</div>
</template>
<style>
.header{display:flex;
        justify-content: flex-start;
        }
</style>
