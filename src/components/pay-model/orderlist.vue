<template>
    <div id="order-number">
    <figure v-for="(item,index) in content" :key="index">
    <ul>
    <li class="ordernumber"><span>订单编号：</span>{{item.ordernumber}}</li>
    <li class="ordergoods">订单商品：{{item.ordergoods}}</li>
    <li class="orderinfor">收货信息:{{item.orderinfor}}</li>
    <li class="money"><span>总价：</span>{{item.money}}</li>
    </ul>
    </figure>
     </div>
</template>
<script>
export default {
  name: 'order-number',
  props: ['content'],
  methods: {}
}
</script>
<style scoped>
#order-number{
    margin: 0 14vw 2rem;
    display:flex;
    justify-content: flex-start;
    flex-direction: column-reverse;
}
ul{
   border:1px solid #c9c9c9;
   padding:2rem 0 2rem 1rem;
}
li{
    list-style: none;
    line-height: 2.5rem;
    display:flex;
    justify-content: flex-start;
    padding:.3rem;
    margin-left:2vw;
    font-size:1.5rem;
    color:#353535;
}
.ordernumber{
    font-size:1.8rem;
    color:black;
}
.money{
    list-style: none;
    line-height: 2.5rem;
    display:flex;
    justify-content: flex-end;
    margin-left:2vw;
    padding-right:2rem;
    margin-top:-5vh;

}
.money span{
    color:black;
}
@media only screen and (max-width: 1024px) {
ul{
    padding-top:2rem;
    padding-bottom:2rem;
}
.orderinfor{
    padding-bottom:2rem;
}
.money{
    margin-right:2vw;
}
}
@media only screen and (max-width: 767px) {
li{
    list-style: none;
    line-height: 2.5rem;
    display:flex;
    justify-content: flex-start;
    font-size:1.5rem;
    color:#353535;
    margin-top:2vh;
}
ul{
    padding:0;
}
    .money{
        list-style: none;
        line-height: 2.5rem;
        display:flex;
        justify-content: flex-end;
        margin-left:2vw;
        margin-top:-2vh;

    }
}
@media only screen and (max-width: 996px) {
    .money{
        list-style: none;
        line-height: 2.5rem;
        display:flex;
        justify-content: flex-end;
        margin-left:2vw;
        margin-top:-2vh;

    }
}
</style>
