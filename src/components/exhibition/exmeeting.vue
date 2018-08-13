<template>
<div id="meeting">
    <router-link to="../newproduct">
      <img class="eximg" :src="eximg">
    </router-link>
    <div class="ex-list">
    <ul>
    <li class="extit">{{extit}}</li>
    <li class="expro" v-html="expro"></li>
    </ul>
    </div>
    </div>
</template>
<script>
export default {
  name: 'meeting',
  data () {
    return {
      extit: '颜料块画廊2018春季展',
      eximg: require('../../assets/images/NB-101.jpg'),
      expro: `当下，人们关注更多的是个人的感觉和体验，及公共空间与个人存在 
             的关系，这种诉求导致艺术作品的表达方式在抽象与具象之间开辟了第三 
             条路，由抽象转向了具有某种暗示效果的具象形态，从对“描述性”语言 
             的纯化探索转向了对现实生活中的图像和由其所承载的各种个人问题及社
             会问题的关注。在图像表述过程中，感觉的逻辑和不可见的世界成为视觉
             艺术的一种重要的表达方式。<br/>
             当下，人们关注更多的是个人的感觉和体验，及公共空间与个人存在 
             的关系，这种诉求导致艺术作品的表达方式在抽象与具象之间开辟了第三 
             条路，由抽象转向了具有某种暗示效果的具象形态，从对“描述性”语言 
             的纯化探索转向了对现实生活中的图像和由其所承载的各种个人问题及社
             会问题的关注。在图像表述过程中，感觉的逻辑和不可见的世界成为视觉
             艺术的一种重要的表达方式。`
    }
  },
  methods: {}
}
</script>

<style scoped>
.exhibition-detail {
  margin: 0 auto;
  width: 80vw;
}

.crumbs {
  display: flex;
  justify-content: flex-start;
  margin-top:1rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px rgba(0, 0, 0, .3) solid;
}
#meeting {
  display: flex;
}
.extit{
    font-size:1.8rem;
    text-align:center;
}
.ex-list{
    margin-left:2vw;
    margin-right:2vw;
}
.eximg{
    width:440px;
    height:440px;
}
.expro{
    margin-top:2vh;
    line-height: 4vh;
    text-indent: 2em;
}
li{
    list-style:none;
}
@media (max-width: 1024px) {
#meeting{
    display:flex;
    flex-direction: column;
}
.expro{
    margin-top:1vh;
    line-height: 2.5vh;
}
}
@media (max-width: 992px) {
.ex-list{
    margin-top:1vh;
}
.eximg {
    width:350px;
    height:350px;
  }
#meeting{
    display:flex;
    flex-direction: column;
}
.expro{
    margin-top:1vh;
    line-height: 2.5vh;
}
ul{
    padding:0;
}
}
@media (max-width: 767px) {
  .eximg {
    width:300px;
    height:300px;
  }
  .ex-list{
    margin-left:.1vw;
    margin-right:.1vw;
}
#meeting{
    display:flex;
    flex-direction: column;
}
.expro{
    margin-top:1vh;
    line-height: 3vh;
}
ul{
    padding:0;
}
}
</style>
