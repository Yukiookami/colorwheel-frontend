<template>
  <div :class = "className">
    <div :class = "sizeClass" v-for="(item,index) in maskList" :key="index">
      <router-link :to="item.to">
        <div @mouseenter="deru(item)"
             @mouseleave="intoku(item)"
             :class = "item.show == 1? hideClass:showClass">
          <span class="ue">{{item.msgUE}}</span>
          <span>{{item.msgShita}}</span>
        </div>
        <img :src='item.url'>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['maskList', 'sizeClass', 'className'],
  data () {
    return {
      hideClass: 'intoku mask',
      showClass: 'deru mask'
    }
  },
  methods: {
    deru: function (item) {
      item.show = 2
    },
    intoku: function (item) {
      item.show = 1
    }
  }
}
</script>

<style>
.hide-box {
  overflow: hidden;
  max-height: 67rem;
}

.mask {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .6);
  color: #FFF;
}

.ooki {
  width: 174px;
  height: 264px;
}

.chisai {
  height: 154px;
  width: 154px;
}

.ooki,
.chisai {
  position: relative;
  margin: 2rem;
}

.size {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  width: 60vw;
}

.ue {
  padding-bottom: .5rem;
  margin-bottom: .5rem;
  border-bottom: 1px solid #FFF;
}

.intoku {
  opacity: 0;
}

.deru {
  opacity: 1;
}

.intoku,
.deru {
-webkit-transition: all .5s ease-in-out;
   -moz-transition: all .5s ease-in-out;
     -o-transition: all .5s ease-in-out;
        transition: all .5s ease-in-out;
}

.position {
  width: 20%;
}
</style>
