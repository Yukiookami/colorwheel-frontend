<template>
     <div class="model-img-box">
        <figure @click="xClick" :class="xsClick?'img-model click':'img-model'">
          <img src="../../assets/images/model-xs.jpg">
          <span class="bottom-size">77*117cm</span>
          <div class="choosesize">
          <router-link to="../model">
        <button class="choose">选择</button>
          </router-link>
          </div>
        </figure>
        <figure @click="sClick" :class="smClick?'img-model click':'img-model'">
          <img src="../../assets/images/model-md.jpg">
          <span class="bottom-size">120*180cm</span>
          <div class="choosesize">
          <router-link to="../model">
        <button class="choose">选择</button>
          </router-link>
          </div>
        </figure>
        <figure @click="lClick" :class="lgClick?'img-model click':'img-model'">
          <img src="../../assets/images/model-lg.jpg">
          <span class="bottom-size">119*119cm</span>
          <div class="choosesize">
          <router-link to="../model">
        <button class="choose">选择</button>
          </router-link>
          </div>
        </figure>
      </div>

</template>
<style scoped>
.model-img-box {
  display: flex;
  justify-content: space-around;
  margin: 0 auto 4rem;
  width: 60%;
}

.img-model {
  position: relative;
}
.bottom-size {
  position: absolute;
}
.bottom-size {
  bottom: -35px;
  left: 30%;
}
.model-border-box {
  display: flex;
  justify-content: space-around;
  margin: 2rem auto;
  width: 60%;
}

.border-box {
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
}

.border-box img {
  margin-bottom: 2rem;
  height: 218px;
  width: 218px;
}
.choose {
  padding: .2rem 1.3rem;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0);
  border: 1px solid rgba(0, 0, 0, .3);
  position: absolute;
  bottom:-70px;
  left: 30%;
}
a {
  color: #353535;
  text-decoration: none;
}
@media (max-width: 767px) {
.model-img-box{
     display:flex;
     flex-direction: column;
 }
 figure{
     margin-top:0rem;
 }
}
@media (max-width: 992px) {
.model-img-box{
     width:80vw;
     margin:2rem auto;
 }
 figure{
     margin-bottom:7rem;
 }
 .bottom-size {
     left: 40%;
}
.choose {
  bottom:-70px;
  left: 40%;
}
}
</style>
