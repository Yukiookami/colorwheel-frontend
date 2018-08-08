<template>
  <div class="detail-box">
    <div class="crumbs">
      <router-link to="./artist">{{upletext}}</router-link>
      <span>> {{name}}</span>
    </div>
    <figure class="information-box">
      <img :src="imgSrc">
      <div class="achievement-box">
        <span class="tittle">艺术成就：</span>
        <ul>
          <li v-for="(item,index) in informationList" :key="index">
            {{item.msg}}
          </li>
        </ul>
      </div>
    </figure>
    <figure class="works-show">
      <span class="tittle tittle-magin">{{tittle}}</span>
      <arist-mo :content = 'pictureList' :className = 'className'></arist-mo>
    </figure>
    <div class="pos-box" :id= 'boxName' @click="hideBox">
      <span>More</span>
      <img src= '../assets/images/more.png'>
    </div>
  </div>
</template>

<script>
import aristMo from '../components/artist/arist-mo'

export default {
  data () {
    return {
      upletext: '代理艺术家',
      name: '李大鹏',
      imgSrc: require('../assets/images/artiBanner.jpg'),
      tittle: '颜料块画廊-遇见系列',
      className: 'hide-box',
      boxName: '',
      informationList: [
        {msg: '2016  国际纤维艺术双年展 优秀奖'},
        {msg: '2012  回归与超越—第七届国际纤维艺术双年展 铜奖'},
        {msg: '2012  中国当代纤维艺术哥伦比亚巡展'},
        {msg: '2012  大同国际壁画双年展'},
        {msg: '2012  俄亥俄州代顿艺术中心博物馆―中国当代纤维艺术展'},
        {msg: '2011  中国当代纤维艺术赴白俄罗斯、乌克兰巡展'},
        {msg: '2009  圣何塞纺织艺术博物馆―正在改变的景观―中国当代纤维艺术展'},
        {msg: '2008  第五届国际纤维艺术双年展 优秀奖'},
        {msg: '2006  第四届国际纤维艺术双年展 铜奖'},
        {msg: '2005  鲁艺杯教师作品展 学术奖'},
        {msg: '2004  从洛桑到北京―第三届国际纤维艺术双年展 银奖'},
        {msg: '2003  清华大学美术学院李大鹏艺术作品个展'},
        {msg: '2002  从洛桑到北京―第二届国际纤维艺术双年展'}
      ],
      pictureList: [
        {
          production: require('../assets/images/img.jpg'),
          spell: '123'
        },
        {
          production: require('../assets/images/img.jpg'),
          spell: '123'
        },
        {
          production: require('../assets/images/img.jpg'),
          spell: '123'
        },
        {
          production: require('../assets/images/img.jpg'),
          spell: '123'
        },
        {
          production: require('../assets/images/img.jpg'),
          spell: '123'
        },
        {
          production: require('../assets/images/img.jpg'),
          spell: '123'
        },
        {
          production: require('../assets/images/img.jpg'),
          spell: '123'
        },
        {
          production: require('../assets/images/img.jpg'),
          spell: '123'
        },
        {
          production: require('../assets/images/img.jpg'),
          spell: '123'
        },
        {
          production: require('../assets/images/img.jpg'),
          spell: '123'
        },
        {
          production: require('../assets/images/img.jpg'),
          spell: '123'
        },
        {
          production: require('../assets/images/img.jpg'),
          spell: '123'
        },
        {
          production: require('../assets/images/img.jpg'),
          spell: '123'
        },
        {
          production: require('../assets/images/img.jpg'),
          spell: '123'
        },
        {
          production: require('../assets/images/img.jpg'),
          spell: '123'
        },
        {
          production: require('../assets/images/img.jpg'),
          spell: '123'
        },
        {
          production: require('../assets/images/img.jpg'),
          spell: '123'
        },
        {
          production: require('../assets/images/img.jpg'),
          spell: '123'
        }
      ]
    }
  },
  methods: {
    hideBox: function () {
      this.className = ''
      this.boxName = 'hide'
    }
  },
  components: {
    aristMo
  }
}
</script>

<style>
.detail-box {
  margin: 0 auto;
  width: 80vw;
}

.crumbs {
  display: flex;
  justify-content: flex-start;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px rgba(0, 0, 0, .3) solid;
}

.information-box {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, .3);
}

.information-box ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 12px;
}

.information-box li {
  line-height: 1.8rem;
}

.information-box img {
  height: 271px;
  width: 396px;
  margin-bottom: 2rem;
}

.achievement-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin:0 0 2rem 5rem;
}

.tittle {
  margin-bottom: .6rem;
  font-size: 14px;
}

.tittle-magin {
  margin-left: 3.2vw;
}

.works-show {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
}

.show-box a {
  cursor: default;
}

.spell {
  font-size: 14px !important;
}

.hide-box {
  overflow: hidden;
  height: 60rem;
  width: 100%;
}

.pos-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 3rem;
  margin: 0 auto 2rem;
  font-size: 16px;
  cursor: pointer;
}

#hide {
  display: none;
}

@media (max-width: 1035px) {
  .information-box {
    flex-direction: column;
    align-items: center;
  }

  .achievement-box {
    margin: 0 0 2rem 0;
  }
}
</style>
