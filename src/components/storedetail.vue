<template>
<div id="storeDetail">
  <div class="line">
    <nav>
      <span>{{Num}}</span>
      <router-link to="">
        <button class="buy">购买</button>
      </router-link>
    </nav>
  </div>
  <div class="commodity">
    <img :src='bannerImg'>
    <span class="big-font">{{Num}}</span>
    <router-link to="">
      <button class="buy big-font">购买</button>
    </router-link>
    <div v-html="describe" class="text-box"></div>
  </div>
  <div class="back-banner">
    <h2>{{tittle}}</h2>
  </div>
  <figure class="hito">
    <img :src='head'>
    <div class="shoukai">
      <span>{{name}}/{{spell}}</span>
      <div v-html="msg"></div>
    </div>
  </figure>
  <div class="show-banner"></div>
  <div class="img-box">
    <div v-for="(item, index) in imgList" :key="index">
      <img :src='item.url'>
      <span>{{item.name}}</span>
    </div>
  </div>
  <figure class="writer">
    <img :src="head">
    <p>{{name}}</p>
    <span>{{spell}}</span>
  </figure>
  <storedetail-mo :maskList = 'maskUEList' :sizeClass = 'ooki' :className = 'ookiClassName'></storedetail-mo>
  <storedetail-mo :maskList = 'maskShiTaList' :sizeClass = 'chisai' :className = 'className'></storedetail-mo>
  <div class="pos-box" :id = 'boxName' @click="hideBox">
    <img src= '../assets/images/more.png'>
  </div>
</div>
</template>

<script>
import storedetailMo from '../components/storedetail/storedetail-mo'

export default {
  data () {
    return {
      boxName: '',
      className: 'hide-box size',
      ookiClassName: 'size',
      Num: 'NB-124',
      bannerImg: require('../assets/images/stoBanner.jpg'),
      describe: '语言的凝练来自心灵的纯度，画面的凝练来自艺术家对于外部世界感受的提炼，包括对目不能见、耳不能闻、超乎感觉之外的神秘体验。体现在画面中就是对构图、色彩和形态构成的把握。大色块及流线型的分割使画面呈现出清晰的叠压关系和层次感，使整个画面更加富有韵律和动感。艺术家用不同色度的灰表现出视觉上的远近关系，并在沉静的灰色调中加入了金色增添画面的鲜活感与奢华感。',
      tittle: '高清晶瓷版面',
      head: require('../assets/images/stoHead.jpg'),
      name: '王斌',
      spell: 'Mr. Wang Bin',
      msg: '潮流艺术家  自由插画师  【四目】设计工作室创始人;2011年，“揭示”主题个人插画展 中国沈阳 万象城;2011年，“向大师致敬”主题 自由插画师10人联展  中国北京798艺术区；2012年，创作潮流品牌NOVO形象玩偶；2012年，上海国际插画周联展 中国 上海；2013年，“揭示二部曲”主题个人插画展 中国 沈阳',
      imgList: [
        {
          url: require('../assets/images/stoImg.jpg'),
          name: 'NB-124'
        },
        {
          url: require('../assets/images/stoImg.jpg'),
          name: 'NB-124'
        },
        {
          url: require('../assets/images/stoImg.jpg'),
          name: 'NB-124'
        }
      ],
      maskUEList: [
        {
          url: require('../assets/images/maskImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/maskImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/maskImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/maskImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        }
      ],
      ooki: 'ooki',
      maskShiTaList: [
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        },
        {
          url: require('../assets/images/chisaiImg.jpg'),
          msgUE: 'NB-124-126',
          msgShita: '3个产品',
          show: '1',
          to: ''
        }
      ],
      chisai: 'chisai'
    }
  },
  methods: {
    hideBox: function () {
      this.className = 'size'
      this.boxName = 'hide'
    }
  },
  components: {
    storedetailMo
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

#hide {
  display: none;
}

#storeDetail nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
  width: 70vw;
}

#storeDetail nav a,
.commodity a {
  color: #353535;
  text-decoration: none;
}

.buy {
  padding: .2rem 1.3rem;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0);
  border: 1px solid rgba(0, 0, 0, .3)
}

.line {
  margin-bottom: 5rem;
  border-bottom: 1px rgba(0, 0, 0, .3) solid;
}

.commodity {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 65rem;
}

.commodity img {
  height: 600px;
  width: 400px;
}

.text-box {
  width: 45vw;
}

.big-font {
  font-size: 22px;
}

.back-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  height: 303px;
  color: #FFF;
  background-image: url('../assets/images/backBanner.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.hito {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 5rem;
  width: 28vw;
  text-align: left;
}

.hito img {
  height: 130px;
  width: 130px;
}

.shoukai {
  margin-left: 5rem;
  width: 40rem;
  height: 130px;
}

.shoukai div {
  margin-top: 1rem;
}

.show-banner {
  background-image: url('../assets/images/stoBigBanner.jpg');
  width: 100%;
  height: 881px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.img-box {
  display: flex;
  justify-content: space-between;
  margin: 3rem auto;
  width: 60vw;
  background-color: #f8f8f8;
}

.img-box div {
  display: flex;
  flex-direction: column;
}

.img-box img {
  height: 479px;
  width: 319px;
}

.writer {
  width: 10rem;
  margin: 2rem auto;
}

.writer p {
  margin: .5rem 0;
}

@media (max-width: 1990px) {
  .hito {
    width: 38vw;
  }

  .show-banner {
    background-size: 100%;
  }

  .img-box {
    width: 80vw;
  }
}

@media (max-width: 1550px) {
  .show-banner {
    height: 700px;
  }
}

@media (max-width: 1250px) {
  .hito {
    flex-direction: column;
    justify-content: space-around;
    height: 25rem;
    text-align: center;
  }

  .shoukai {
    margin-left: 0;
    width: 90vw;
  }

  .show-banner {
    height: 500px;
  }

  .img-box {
    width: 90%;
  }
}

@media (max-width: 1100px) {
  .text-box {
    width: 60vw;
  }

  .commodity {
    height: 70rem;
  }

  .back-banner {
    height: 200px;
  }

  .img-box img {
    height: 300px;
    width: 200px;
  }
}

@media (max-width: 768px) {
  .text-box {
    width: 90vw;
  }

  .back-banner {
    height: 150px;
  }

  .show-banner {
    height: 300px;
  }

  .img-box img {
    height: 170px;
    width: 100px;
  }
}

@media (max-width: 450px) {
  .commodity img {
    height: 400px;
    width: 300px;
  }

  .show-banner {
    height: 200px;
  }

  .commodity {
    height: 55rem;
  }
}
</style>
