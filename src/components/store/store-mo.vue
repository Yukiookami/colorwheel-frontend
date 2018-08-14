<template>
<div>
  <div :class="className">
    <div v-for="(item,index) in buyList" :key="index" class="col-data-2 col-md-4 col-sm-6 information-box">
      <router-link :to='item.buy'>
        <img :src='item.picUrl' class="main-img">
      </router-link>
      <div>
        <div class="sm-box store-border">
          <span>{{item.tittle}}</span>
          <div class="little-box">
            <span>{{item.name}}</span>
            <img :src='item.headUrl'>
          </div>
        </div>
        <div class="sm-box">
          <span>&yen;{{item.price}}</span>
          <router-link :to='item.buy'>
            <img src="../../assets/images/buy.png">
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="pos-box" :id = 'boxName' @click="hideBox">
    <span>More</span>
    <img src= '../../assets/images/more.png'>
  </div>
</div>
</template>

<script scoped>
export default {
  props: ['buyList'],
  data () {
    return {
      boxName: '',
      className: 'hide-box buy-box'
    }
  },
  methods: {
    hideBox: function () {
      this.className = 'buy-box'
      this.boxName = 'hide'
    }
  }
}
</script>

<style>
.pos-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 3rem;
  margin: 0 auto 2rem;
  font-size: 16px;
  cursor: pointer;
}

.hide-box {
  overflow: hidden;
  max-height: 75rem;
}

#hide {
  display: none;
}

.buy-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem auto;
  width: 70vw;
}

.main-img {
  height: 219px;
  width: 219px;
}

.information-box,
.sm-box {
  display: flex;
  width: 219px;
}

.information-box {
  align-items: center;
  flex-direction: column;
  margin: 1rem auto;
}

.sm-box {
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  padding-bottom: .1rem;
}

.little-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
}

.store-border {
  border-bottom: 1px rgba(0, 0, 0, .2) solid;
}

.col-data-2 {
  width: 20%;
}

@media (max-width: 1800px) {
  .col-data-2 {
    width: auto;
  }
}
</style>
