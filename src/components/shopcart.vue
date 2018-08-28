<template>
<div id="shopcart">
  <nav>
    <span class="ex">购物车</span>
  </nav>
  <shopchoose></shopchoose>
</div>
</template>
<script>
import shopchoose from '../components/shoppingcart/shopchoose'
export default {
  data () {
    return {

    }
  },
  components: {
    shopchoose
  }
}
</script>
<style scoped>
.ex {
  margin: 0 14vw 2rem;
  padding-bottom: .6rem;
  border-bottom: rgba(0, 0, 0, .05) solid 1px;
  height: 3rem;
}
span{
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0;
}
@media only screen and (max-width: 767px) {
.ex {
  margin: 0  2rem;
  padding-bottom: .6rem;
  border-bottom: rgba(0, 0, 0, .05) solid 1px;
  height: 3rem;
}
}
</style>
