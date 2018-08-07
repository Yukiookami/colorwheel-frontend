<template>
<div id="artist">
  <nav>
    <ul>
      <li :class= "agencyFlag? 'border-confirm': ''">
        <a @click= "changeAgency">代理艺术家</a>
      </li>
      <li :class= "cooperationFlag? 'border-confirm': ''">
        <a @click= "changecooperation">合作艺术家</a>
      </li>
      <li :class= "graduateFlag? 'border-confirm': ''">
        <a @click= "changegraduate">毕业生</a>
      </li>
    </ul>
  </nav>
  <artist-mo :content = 'artistList' :className = 'className'></artist-mo>
  <div class="pos-box" :id = 'boxName' @click="hideBox">
    <span>More</span>
    <img src= '../assets/images/more.png'>
  </div>
</div>
</template>

<script>
import artistMo from '../components/artist/arist-mo'

export default({
  name: 'artist',
  data () {
    return {
      agencyFlag: true,
      cooperationFlag: false,
      graduateFlag: false,
      className: 'hide-box',
      boxName: '',
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
    },
    hideBox: function () {
      this.className = ''
      this.boxName = 'hide'
    }
  },
  components: {
    artistMo
  }
})
</script>

<style scoped>
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

.pos-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 3rem;
  margin: 0 auto 2rem;
  font-size: 16px;
  cursor: pointer;
}

.border-confirm {
  border-bottom: #353535 solid 1px;
}

#hide {
  display: none;
}

@media (max-width: 768px) {
  nav {
    display: flex;
    justify-content: center;
    margin: 0 0 5rem 0;
  }
}
</style>
