<template>
    <div id="eximglist">
      <div class="crumbs">
      {{meetingname}}
      <span>- {{exoverview}}</span>
      </div>
      <div :class = 'className'>
     <ul class="exover-list">
    <li v-for="(item,index) in items" :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <img class="eimg" :src="item.Img" />
        <p class="ename">{{item.exovername}}</p>
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
      className: 'hide-box exover',
      // 隐藏用数据end
      exoverview: '颜料块画廊2018春季展概览',
      meetingname: '第41届中国(广州)国际家居博览会',
      items: [
        {
          Img: require('assets/images/NB-108.jpg'),
          exovername: 'NB-108'
        },
        {
          Img: require('assets/images/NB-108.jpg'),
          exovername: 'NB-108'
        },
        {
          Img: require('assets/images/NB-108.jpg'),
          exovername: 'NB-108'
        },
        {
          Img: require('assets/images/NB-108.jpg'),
          exovername: 'NB-108'
        },
        {
          Img: require('assets/images/NB-108.jpg'),
          exovername: 'NB-108'
        },
        {
          Img: require('assets/images/NB-108.jpg'),
          exovername: 'NB-108'
        },
        {
          Img: require('assets/images/NB-108.jpg'),
          exovername: 'NB-108'
        },
        {
          Img: require('assets/images/NB-108.jpg'),
          exovername: 'NB-108'
        }
      ]
    }
  },
  methods: {
    // more 隐藏函数
    hideBox: function () {
      this.className = 'exover'
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
  height: 59rem;
  width: 100%;
}

#hide {
  display: none;
}
/* 隐藏用类end*/
.crumbs {
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;
  padding-top: 2rem;
  margin-bottom: 2rem;
  border-top: 1px rgba(0, 0, 0, 0.3) solid;
}
.exover {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
li {
  list-style: none;
}
ul {
  padding: 0;
}
.eimg {
  width: 325px;
  height: 325px;
}
@media (max-width: 992px) {
  .crumbs {
    display: flex;
    flex-direction: column;
  }
  .eimg {
    width: 300px;
    height: 300px;
  }
}
</style>
