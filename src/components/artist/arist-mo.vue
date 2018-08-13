<template>
<section id="aristMo" :class="className">
  <figure :class="layoutClassName" v-for="(item,index) in content" :key="index">
    <router-link to="../artistdetail">
      <img :src="item.production">
    </router-link>
    <span class="spell">{{item.spell}}</span>
    <span class="name">{{item.name}}</span>
  </figure>
</section>
</template>

<script>
export default {
  props: ['content', 'className', 'layoutClassName'],
  methods: {

  }
}
</script>

<style>
#aristMo {
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin:  0 auto 3rem;
  width: 80vw;
}

.col-data-2 {
  width: 20%;
}

.spell {
  font-size: 12px;
  color: #353535;
}

.name {
  font-size: 14px;
  color: #353535;
}

.show-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20rem;
}

.hide-box {
  overflow: hidden;
  max-height: 60rem;
  width: 100%;
}

.show-box image {
  height: 153px;
  width: 170px;
}

@media (max-width: 1050px) {
  .col-data-2 {
    width: auto;
  }
}
</style>
