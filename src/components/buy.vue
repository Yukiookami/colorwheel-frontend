<template>
<div id="buySec">
  <img class="size-change" :src="imgUrl">
  <div class="imfor">
    <div>
      <h3>{{name}}</h3>
      <h3>&yen;{{price}}</h3>
    </div>
    <div class="size-sec">
      <span>材质：{{texture}}</span>
      <span>画框：{{border}}</span>
      <span>尺寸：{{size}}</span>
      <div class="num">
        数量：
        <div class="symbol" @click="sum">
          <span class="add-mid"></span>
        </div>
        <span class="symbol">{{num}}</span>
        <div class="symbol" @click="add">
          <span class="add-top"></span>
          <span class="add-mid"></span>
        </div>
      </div>
    </div>
    <div>
      <router-link to="/check">
        <button class="buy-button black">
          立即购买
        </button>
      </router-link>
      <router-link to="/shopcart"><button class="buy-button white">加入购物车</button></router-link>
    </div>
    <div class="share">
      <span>分享至</span>
      <img src="../assets/images/share-wechat.png">
      <img src="../assets/images/share-webo.png">
      <img src="../assets/images/share-dou.png">
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: require('../assets/images/stoBanner.jpg'),
      name: 'NB-124',
      price: '1240.00',
      texture: '晶瓷',
      border: '金色铝合金',
      size: '77X117cm',
      num: '1'
    }
  },
  methods: {
    add: function () {
      this.num++
    },
    sum: function () {
      if (this.num === 0) {
        this.num = 0
      } else {
        this.num--
      }
    }
  }
}
</script>

<style>
#buySec {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 35vw;
}

.imfor,
.size-sec{
  display: flex;
  flex-direction: column;
  text-align: left;
}

.size-sec {
  margin: 2rem 0;
  line-height: 2.5rem;
}

.imfor h3 {
  margin: .5rem 0;
}

.buy-button {
  padding: .3rem 0;
  margin-right: 1rem;
  margin-bottom: 2rem;
  width: 13rem;
  border-radius: 10px;
  border: solid rgba(0, 0, 0, .4) 1px;
}

.black {
  background-color: rgba(0, 0, 0, .4);
  border: solid rgba(0, 0, 0, 0) 1px;
  color: #FFF;
}

.white {
  background-color: rgba(0, 0, 0, 0);
}

.share {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
}

.num {
  display: flex;
  align-items: center;
}

.symbol {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 .5rem;
  height: 20px;
  width: 20px;
  cursor: pointer;
  border: solid 1px rgba(0, 0, 0, .4);
}

.add-mid {
  display: block;
  width: 15px;
  height: 2px;
  background-color: rgba(0, 0, 0, .4);
}

.add-top {
  position: absolute;
  left: 44%;
  display: block;
  height: 16px;
  width: 2px;
  background-color: rgba(0, 0, 0, .3);
}

@media (max-width: 2200px) {
  #buySec {
    width: 50vw;
  }
}

@media (max-width: 1560px) {
  #buySec {
    width: 60vw;
  }
}

@media (max-width: 1300px) {
  #buySec {
    width: 70vw;
  }
}

@media (max-width: 2200px) {
  #buySec {
    flex-direction: column;
    padding: 5rem 0;
  }

  .imfor {
    margin-top: 2rem;
  }
}

@media (max-width: 410px) {
  .size-change {
    width: 300px;
    height: 500px;
  }
}
</style>
