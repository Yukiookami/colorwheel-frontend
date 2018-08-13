<template>
<div id="artist">
  <nav>
    <ul>
      <li :class= "agencyFlag? 'border-confirm': ''">
        <router-link @click= "changeAgency">代理艺术家</router-link>
      </li>
      <li :class= "cooperationFlag? 'border-confirm': ''">
        <router-link @click= "changecooperation">合作艺术家</router-link>
      </li>
      <li :class= "graduateFlag? 'border-confirm': ''">
        <router-link @click= "changegraduate">毕业生</router-link>
      </li>
    </ul>
  </nav>
  <artist-mo :content = 'artistList' :className = 'className' :layoutClassName = 'layoutClassName'></artist-mo>
  <!-- more隐藏用组件 -->
  <div class="pos-box" :id = 'boxName' @click="hideBox">
    <span>More</span>
    <img src= '../assets/images/more.png'>
  </div>
  <!-- 隐藏用组件end -->
</div>
</template>

<script>
import artistMo from '../components/artist/arist-mo'

export default({
  name: 'artist',
  data () {
    return {
      // more 隐藏用数据
      boxName: '',
      className: 'hide-box',
      // 隐藏用数据end
      agencyFlag: true,
      cooperationFlag: false,
      graduateFlag: false,
      layoutClassName: 'show-box col-data-2 col-md-4 col-xs-6',
      artistList: [
        {
          production: require('../assets/images/production.jpg'),
          spell: '123',
          name: '123',
          url: ''
        },
        {
          production: require('../assets/images/production.jpg'),
          spell: '123',
          name: '123',
          url: ''
        },
        {
          production: require('../assets/images/production.jpg'),
          spell: '123',
          name: '123',
          url: ''
        },
        {
          production: require('../assets/images/production.jpg'),
          spell: '123',
          name: '123',
          url: ''
        },
        {
          production: require('../assets/images/production.jpg'),
          spell: '123',
          name: '123',
          url: ''
        },
        {
          production: require('../assets/images/production.jpg'),
          spell: '123',
          name: '123',
          url: ''
        },
        {
          production: require('../assets/images/production.jpg'),
          spell: '123',
          name: '123',
          url: ''
        },
        {
          production: require('../assets/images/production.jpg'),
          spell: '123',
          name: '123',
          url: ''
        },
        {
          production: require('../assets/images/production.jpg'),
          spell: '123',
          name: '123',
          url: ''
        },
        {
          production: require('../assets/images/production.jpg'),
          spell: '123',
          name: '123',
          url: ''
        },
        {
          production: require('../assets/images/production.jpg'),
          spell: '123',
          name: '123',
          url: ''
        },
        {
          production: require('../assets/images/production.jpg'),
          spell: '123',
          name: '123',
          url: ''
        },
        {
          production: require('../assets/images/production.jpg'),
          spell: '123',
          name: '123',
          url: ''
        },
        {
          production: require('../assets/images/production.jpg'),
          spell: '123',
          name: '123',
          url: ''
        },
        {
          production: require('../assets/images/production.jpg'),
          spell: '123',
          name: '123',
          url: ''
        },
        {
          production: require('../assets/images/production.jpg'),
          spell: '123',
          name: '123',
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
    },
    // 隐藏函数end
    changeAgency: function () {
      if (this.agencyFlag === true) {
        return
      }
      this.agencyFlag = !this.agencyFlag
      this.graduateFlag = false
      this.cooperationFlag = false
    },
    changecooperation: function () {
      if (this.cooperationFlag === true) {
        return
      }
      this.cooperationFlag = !this.cooperationFlag
      this.agencyFlag = false
      this.graduateFlag = false
    },
    changegraduate: function () {
      if (this.graduateFlag === true) {
        return
      }
      this.graduateFlag = !this.graduateFlag
      this.agencyFlag = false
      this.cooperationFlag = false
    }
  },
  components: {
    artistMo
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

#hide {
  display: none;
}
/* 隐藏用类end*/

a {
  color: #353535;
  text-decoration: none;
  cursor: pointer;
}

li {
  display: block;
  padding-bottom: .2rem;
  list-style: none;
}

ul {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 0 0 0 2vw;
  padding: 0;
  width: 25rem;
}

nav {
  margin: 0 14vw 5rem;
  padding-bottom: .6rem;
  border-bottom: rgba(0, 0, 0, .05) solid 1px;
  height: 3rem;
}

.border-confirm {
  border-bottom: #353535 solid 1px;
}

@media (max-width: 768px) {
  nav {
    display: flex;
    justify-content: center;
    margin: 0 0 5rem 0;
  }
}
</style>
