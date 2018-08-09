<template>
 <div id="support">
    <figure class="banner-box">
      <div class="mask">
        <span class="support-text">支持</span>
        <div>
          <h3 class="welcome">欢迎来到颜料块画廊</h3>
          <span>专注于消费级艺术市场</span>
        </div>
      </div>
    </figure>
    <support-mo :answerTittleList = 'answerTittleList'
              :mainTittleList = 'mainTittleList'
              :answerList = 'answerList'></support-mo>
    <support-list :aboutList = 'aboutList'></support-list>
 </div>
</template>

<script>
import supportMo from '../components/support/suppot-mo'
import supportList from '../components/support/support-list'

export default({
  name: 'support',
  data () {
    return {
      mainTittleList: [
        {tittle: '画廊售后有哪些服务保障呢？'},
        {tittle: '画家和画廊有哪些合作方式呢？'},
        {tittle: '如何开加盟店呢？'}
      ],
      answerTittleList: [
        [
          {tittle: '保障期限'},
          {tittle: '保障方式'}
        ],
        [
          {tittle: '签约艺术家'},
          {tittle: '授权代理艺术家'}
        ],
        [
          {tittle: '保障期限'},
          {tittle: '保障方式'}
        ]
      ],
      answerList: [
        [
          {
            msg: '晶瓷画自购买之日起享有5年保修期。',
            show: 1
          },
          {
            msg: '宣纸版画、超感纸、环保框类自购买之日起享有1年保修期。',
            show: 1
          },
          {
            msg: '如画芯出现非人为(物流运输等)造成的损坏，更换全新装饰画。',
            show: 2
          },
          {
            msg: '如附件出现问题，更换全新的附件',
            show: 2
          }
        ],
        [
          {
            msg: '晶瓷画自购买之日起享有5年保修期。',
            show: 1
          },
          {
            msg: '如画芯出现非人为(物流运输等)造成的损坏，更换全新装饰画。',
            show: 2
          }
        ],
        [
          {
            msg: '晶瓷画自购买之日起享有5年保修期。',
            show: 1
          },
          {
            msg: '宣纸版画、超感纸、环保框类自购买之日起享有1年保修期。',
            show: 1
          },
          {
            msg: '如画芯出现非人为(物流运输等)造成的损坏，更换全新装饰画。',
            show: 2
          },
          {
            msg: '如附件出现问题，更换全新的附件。',
            show: 2
          }
        ]
      ],
      aboutList: [
        {
          msg: '了解艺术家加盟',
          url: ''
        },
        {
          msg: '售后服务保障',
          url: ''
        },
        {
          msg: '门店联系方式',
          url: ''
        },
        {
          msg: '门店地址联系方式',
          url: ''
        },
        {
          msg: '材质咨询',
          url: ''
        },
        {
          msg: '了解画面定制',
          url: ''
        },
        {
          msg: '更多产品详细资料',
          url: ''
        }
      ]
    }
  },
  components: {
    supportMo,
    supportList
  }
})
</script>

<style>
.banner-box {
  height: 333px;
  width: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url('../assets/images/support-banner.jpg');
  background-position-x: center;
}

.mask {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  background-color: #000;
  opacity: .8;
  width: 100%;
  height: 100%;
}

.navbar {
  margin-bottom: 0;
}

.support-text {
  display: block;
  padding-bottom: .5rem;
  margin-bottom: 3rem;
  text-align: left;
  width: 60%;
  border-bottom: 1px #FFF solid;
}

.welcome {
  margin-bottom: 1.5rem;
}

.banner-box {
  color: #FFF;
}

@media (max-width: 1200px) {
    .banner-box {
      height: 250px;
    }

    .welcome {
      margin-bottom: 1rem;
    }

    .support-text {
      margin-bottom: 1rem;
    }
}

@media (max-width: 768px) {
    .banner-box {
      height: 200px;
    }

    .welcome {
      margin-bottom: .5rem;
    }

    .support-text {
      margin-bottom: .5rem;
    }

    .mask {
      padding: 3rem;
    }
}
</style>
