<template>
    <div id="new-product">
       <h3> 2018春季作品发布</h3>
    <div :class = 'newslists'>
    <ul class="newslists">
    <li v-for="(item,index) in items" :key="index">
        <img class = 'productimg' :src="item.Img" />
    </li>
    </ul>
    </div>
    <!-- more隐藏用组件 -->
  <div class="pos-box" :id = 'boxName' @click="hideBox">
    <span>More</span>
    <img src= '../../assets/images/more.png'>
  </div>
  <!-- 隐藏用组件end -->
    </div>
</template>

<script>
export default {
  data () {
    return {
      // more 隐藏用数据
      boxName: '',
      newslists: 'hide-box news-img',
      // 隐藏用数据end
      items: [
        { Img: require('../../assets/images/newproduct1.jpg') },
        { Img: require('../../assets/images/newproduct1.jpg') },
        { Img: require('../../assets/images/newproduct1.jpg') },
        { Img: require('../../assets/images/newproduct1.jpg') },
        { Img: require('../../assets/images/newproduct1.jpg') },
        { Img: require('../../assets/images/newproduct1.jpg') }
      ]
    }
  },
  methods: {
    // more 隐藏函数
    hideBox: function () {
      this.newslists = 'news-img'
      this.boxName = 'hide'
    }
    // 隐藏函数end
  }
}
</script>
<style scoped>
/* more 隐藏用类 */
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
  max-height: 70rem;
  width: 100%;
}
.news-img {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
#hide {
  display: none;
}
/* 隐藏用类end*/
.newslists {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70vw;
  margin: 0 auto;
}
li {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}
ul {
  padding: 0;
}
.productimg {
  width: 983px;
  height:410px;
}
@media (max-width: 1400px) {
 .productimg {
  width: 855px;
  height:417px;
}
}
@media (max-width: 1024px) {
 .productimg {
  width: 716px;
  height:299px;
}
 .hide-box {
  height: 50rem;
}
}
@media (max-width: 992px) {
 .productimg {
  width: 537px;
  height:224px;
}
 .hide-box {
  max-height: 35rem;
}
}
@media (max-width: 767px) {
 .productimg {
  width: 262px;
  height:109px;
}
 .hide-box {
  max-height: 40rem;
  margin:0;
}
}
</style>
