<template>
 <div id="exhibition">
  <nav>
    <span class="ex">展览信息</span>
  </nav>
  <exhibitionlist :content = 'exhibitionlistdata' :className = 'className'></exhibitionlist>
  <!-- more隐藏用组件 -->
  <div class="pos-box" :id = 'boxName' @click="hideBox">
    <span>More</span>
    <img src= '../assets/images/more.png'>
  </div>
  <!-- 隐藏用组件end -->
 </div>
</template>

<script>
import exhibitionlist from '../components/exhibition/exhibitionlist'
export default({
  name: 'exhibition',
  data () {
    return {
      // more 隐藏用数据
      boxName: '',
      className: 'hide-box',
      // 隐藏用数据end
      exhibitionlistdata: [
        {
          exhibition: require('../assets/images/ex1.jpg'),
          tit: '第41届中国(广州)国际家居博览会',
          eng: 'The 41st China International Furniture Fair(Guangzhou)',
          name: '颜料块画廊的签约艺术家们在2018春季展中，试图在不可见之物中进行释读或解码...',
          times: '2018.03.18-2018.03.21',
          url: ''
        },
        {
          exhibition: require('../assets/images/ex1.jpg'),
          tit: '第41届中国(广州)国际家居博览会',
          eng: 'The 41st China International Furniture Fair(Guangzhou)',
          name: '颜料块画廊的签约艺术家们在2018春季展中，试图在不可见之物中进行释读或解码...',
          times: '2018.03.18-2018.03.21',
          url: ''
        },
        {
          exhibition: require('../assets/images/ex1.jpg'),
          tit: '第41届中国(广州)国际家居博览会',
          eng: 'The 41st China International Furniture Fair(Guangzhou)',
          name: '颜料块画廊的签约艺术家们在2018春季展中，试图在不可见之物中进行释读或解码...',
          times: '2018.03.18-2018.03.21',
          url: ''
        },
        {
          exhibition: require('../assets/images/ex1.jpg'),
          tit: '第41届中国(广州)国际家居博览会',
          eng: 'The 41st China International Furniture Fair(Guangzhou)',
          name: '颜料块画廊的签约艺术家们在2018春季展中，试图在不可见之物中进行释读或解码...',
          times: '2018.03.18-2018.03.21',
          url: ''
        },
        {
          exhibition: require('../assets/images/ex1.jpg'),
          tit: '第41届中国(广州)国际家居博览会',
          eng: 'The 41st China International Furniture Fair(Guangzhou)',
          name: '颜料块画廊的签约艺术家们在2018春季展中，试图在不可见之物中进行释读或解码...',
          times: '2018.03.18-2018.03.21',
          url: ''
        }
      ]
    }
  },
  methods: {
    // more 隐藏函数
    hideBox: function () {
      this.className = ''
      this.boxName = 'hide'
    }
    // 隐藏函数end
  },
  components: {
    exhibitionlist
  }
})
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
  height: 60rem;
  width: 100%;
}

#hide {
  display: none;
}
/* 隐藏用类end*/
.ex {
  margin: 0 14vw 2rem;
  padding-bottom: .6rem;
  border-bottom: rgba(0, 0, 0, .05) solid 1px;
  height: 3rem;
}
span{
  display: flex;
  justify-content: space-between;
  align-content: center;

  padding: 0;
}
</style>
