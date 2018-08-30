<template>
    <div id="pay-method">
    <figure v-for="(item,index) in content" :key="index" class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <ul class="pay">
    <img class="paypic" :src="item.paypic" />
    <li class="paychoose">{{item.paychoose}}</li>
    </ul>
    </figure>
     </div>
</template>
<script>
export default {
  name: 'pay-method',
  props: ['content'],
  methods: {}
}
</script>
<style scoped>
#pay-method {
  display: flex;
  justify-content: center;
  margin: 0 14vw 2rem;
}
li {
  list-style: none;
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
}
ul {
  border: 1px solid #c9c9c9;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
}
@media only screen and (max-width: 767px) {
  #pay-method {
    display: flex;
    justify-content: center;
    margin: 0 14vw 2rem;
    flex-direction: column-reverse;
  }
}
</style>
