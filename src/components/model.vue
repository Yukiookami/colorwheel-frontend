<template>
  <div>
    <nav class="model-nav">
      <span class="big-font">{{tittle}}</span>
      <div class="changePage">
        <router-link to="../storedetail">概览</router-link>
        <span>规格</span>
        <router-link :to="to">
          <button @click="check" class="buy">购买</button>
        </router-link>
      </div>
    </nav>
    <section>
      <div class="model-box">
        <span class="big-font">尺寸</span>
        <router-link to="">
          <button class="buy">定制尺寸</button>
        </router-link>
      </div>
      <div class="model-img-box">
        <figure @click="xClick" :class="xsClick?'img-model click':'img-model'">
          <img src="../assets/images/model-xs.jpg">
          <span class="right-size">117cm</span>
          <span class="bottom-size">77cm</span>
        </figure>
        <figure @click="sClick" :class="smClick?'img-model click':'img-model'">
          <img src="../assets/images/model-md.jpg">
          <span class="right-size">180cm</span>
          <span class="bottom-size">120cm</span>
        </figure>
        <figure @click="lClick" :class="lgClick?'img-model click':'img-model'">
          <img src="../assets/images/model-lg.jpg">
          <span class="right-size">119cm</span>
          <span class="bottom-size">119cm</span>
        </figure>
      </div>
    </section>
    <section>
      <div class="model-box">
        <span class="big-font">画框</span>
        <span class="placeholder"></span>
      </div>
      <div class="model-border-box">
        <figure @click="gClick" class="border-box">
            <img :class="goldClick?'click':''" src="../assets/images/border.jpg">
            <span>金箔铝合金框</span>
        </figure>
        <figure @click="yClick" class="border-box">
            <img :class="yinClick?'click':''" src="../assets/images/border.jpg">
            <span>银色铝合金框</span>
        </figure>
        <figure @click="bClick" class="border-box">
            <img :class="blackClick?'click':''" src="../assets/images/border.jpg">
            <span>黑色铝合金框</span>
        </figure>
      </div>
    </section>
    <section>
      <div class="model-box">
        <span class="big-font">材料</span>
        <span class="placeholder"></span>
      </div>
      <div>高清晶瓷版面</div>
    </section>
    <section class="shita">
      <div class="model-box">
        <span class="big-font">重量</span>
        <span class="placeholder"></span>
      </div>
      <div>{{weight}}</div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tittle: 'NB-124',
      weight: '请选择尺寸与画框',
      xsClick: false,
      smClick: false,
      lgClick: false,
      goldClick: false,
      yinClick: false,
      blackClick: false,
      sizeCheckNum: 0,
      borderCheckNum: 0,
      to: '../model'
    }
  },
  methods: {
    xClick: function () {
      this.weight = '9kg'
      this.xsClick = true
      this.smClick = false
      this.lgClick = false
      this.sizeCheckNum = 1
    },
    sClick: function () {
      this.weight = '14kg'
      this.xsClick = false
      this.smClick = true
      this.lgClick = false
      this.sizeCheckNum = 1
    },
    lClick: function () {
      this.weight = '19kg'
      this.xsClick = false
      this.smClick = false
      this.lgClick = true
      this.sizeCheckNum = 1
    },
    gClick: function () {
      this.goldClick = true
      this.yinClick = false
      this.blackClick = false
      this.borderCheckNum = 1
    },
    yClick: function () {
      this.goldClick = false
      this.yinClick = true
      this.blackClick = false
      this.borderCheckNum = 1
    },
    bClick: function () {
      this.goldClick = false
      this.yinClick = false
      this.blackClick = true
      this.borderCheckNum = 1
    },
    check: function () {
      if (this.sizeCheckNum !== 1 || this.borderCheckNum !== 1) {
        alert('请选择画框与尺寸')
      } else {
        window.location.href = '/'
      }
    }
  }
}
</script>

<style>
*:focus {
  outline: none;
}

.buy {
  padding: .2rem 1.3rem;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0);
  border: 1px solid rgba(0, 0, 0, .3)
}

.model-nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 0;
  padding-bottom: 1rem;
  border-bottom: rgba(0, 0, 0, .3) solid 1px;
}

.big-font {
  font-size: 22px;
}

.changePage {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
}

.model-box {
  display: flex;
  justify-content: space-around;
  margin: 3rem 0;
  width: 100%;
}

.model-box a,
.model-nav a {
  color: #353535;
  text-decoration: none;
}

.model-img-box {
  display: flex;
  justify-content: space-around;
  margin: 0 auto 4rem;
  width: 60%;
}

.img-model {
  position: relative;
}

.img-model::after,
.img-model::before {
  position: absolute;
  display: block;
  display: flex;
  align-items: center;
  border: #353535 solid 1px;
}

.img-model::before {
  content: '';
  padding-left: 5px;
  right: -13px;
  height: 100%;
  width: 5px;
  border-left: none;
}

.img-model::after {
  content: '';
  bottom: -13px;
  justify-content: center;
  padding-bottom: 5px;
  height: 5px;
  width: 100%;
  border-top: none;
}

.right-size,
.bottom-size {
  position: absolute;
}

.right-size {
  right: -60px;
  top: 46%;
}

.bottom-size {
  bottom: -35px;
  left: 40%;
}

.placeholder {
  width: 5.6rem;
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

.click {
  border: 2px #0ff solid;
}

.shita {
  margin-bottom: 3rem;
}

@media (max-width: 1200px) {
  .model-img-box,
  .model-border-box {
    width: 80%;
  }
}

@media (max-width: 987px) {
  .model-img-box,
  .model-border-box {
    flex-wrap: wrap;
    width: 100%;
  }

  .img-model,
  .border-box img {
    margin: 2rem 5rem;
  }
}
</style>
