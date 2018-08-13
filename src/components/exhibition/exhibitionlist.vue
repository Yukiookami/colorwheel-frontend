<template>
<section id="exhibition-list" :class="className">
  <figure v-for="(item,index) in content" :key="index">
    <router-link to="../exdetail">
        <div class="ex-pic">
      <img :src="item.exhibition">
        <div class="ex-list">
      <ul>
    <li class="tit">{{item.tit}}</li>
    <li class="eng">{{item.eng}}</li>
    <li class="name">{{item.name}}</li>
    <li class="times">{{item.times}}</li>
    </ul>
        </div>
        </div>

    </router-link>
  </figure>
</section>
</template>

<script>
export default {
  name: 'exhibition-list',
  props: ['content', 'className'],
  methods: {}
}
</script>

<style scoped>
figure {
  margin: 0 14vw 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding-bottom: 2rem;
}
img {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width:221px;
  height:142px;
}
.ex-pic{
    display:flex;
}
.ex-list{
    margin-left:10vw;
}
li{
    list-style: none;
    text-align:left;
    line-height: 4vh;
}
.tit,.eng{
    font-size:1.8rem;
    color:#353535;
}
.name{
    color:#979797;
}
.times{
    color:#353535;
}
a{
text-decoration: none;
}
@media (max-width: 767px) {
  .ex-pic{
    display:flex;
    flex-direction: column;
    margin-left: 5vw;
    align-items: center;
}
  .ex-list{
    margin-left: -10vw;
  }
  .tit,.eng{
    font-size:1.6rem;
    color:#353535;
}
  figure{
        margin: 0 10vw 2rem;
}
  li{
    text-align:center;
}
  .ex-list{
      margin-top:4vh;
  }
}
</style>
