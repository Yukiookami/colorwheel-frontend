<template>
<div id="navBox">
  <ul id="navBar" :class='className'>
    <li v-for="(item,index) in storeList" :key="index">
      <router-link :to="item.url" class="click">{{item.tittle}}</router-link>
    </li>
  </ul>
  <div class="pos-box" :id = 'boxName' @click="hideBox">
    <img src= '../../assets/images/more.png'>
  </div>
</div>
</template>

<script>
export default {
  props: ['storeList'],
  data () {
    return {
      boxName: '',
      className: 'hide-box'
    }
  },
  methods: {
    hideBox: function () {
      this.className = ''
      this.boxName = 'hide'
    }
  }
}
</script>

<style scoped>
.pos-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 3rem;
  margin: 0 auto .5rem;
  font-size: 16px;
  cursor: pointer;
}

.hide-box {
  overflow: hidden;
  height: 2rem;
  width: 100%;
}

#hide {
  display: none;
}

#navBar {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto .5rem;
  padding: 0;
  width: 70vw;
  list-style: none;
}

#navBar li {
  margin-right: 4.5rem;
  line-height: 2.5rem;
  margin-left:.5rem;
}

#navBar a {
  color: #353535;
  text-decoration: none;
}

#navBox {
  border-bottom: rgba(0, 0, 0, .2) solid 1px;
  margin: 0 auto;
  width: 70vw;
}

.click:active {
  border-bottom: 1px solid #353535;
}
@media (max-width: 992px) {
#navBar li {
  margin-right: 3rem;
  line-height: 2.5rem;
  margin-left:1rem;
}
}
@media (max-width: 767px) {
 #navBar li {
  margin-right: 1rem;
  line-height: 2.5rem;
  margin-left:1.2rem;
}
}
</style>
