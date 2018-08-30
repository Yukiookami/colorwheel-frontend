<template>
<div id="orderpay">
  <nav>
    <span class="ex">订单支付</span>
  </nav>
  <div class="order-infor">
   <span>订单信息</span>
  </div>
  <orderlist :content = 'orderlistdata'></orderlist>
   <div class="order-infor">
   <span>支付方式</span>
  </div>
  <paymethod :content = 'paydata'></paymethod>
</div>
</template>
<script>
import orderlist from '../components/pay-model/orderlist'
import paymethod from '../components/pay-model/paymethod'
export default {
  name: 'orderpay',
  data () {
    return {
      orderlistdata: [
        {
          ordernumber: '44678393201018',
          ordergoods: 'NB-124',
          orderinfor: 'xxx 159****8989 安徽省 巢湖市 庐江县 xx小区三单元201',
          money: '¥2350'
        },
        {
          ordernumber: '44678393201018',
          ordergoods: 'NB-124',
          orderinfor: 'xxx 159****8989 安徽省 巢湖市 庐江县 xx小区三单元201',
          money: '¥2350'
        }
      ],
      paydata: [
        {
          paypic: require('assets/images/weixin.png'),
          paychoose: '微信'
        },
        {
          paypic: require('assets/images/zhifubao.png'),
          paychoose: '支付宝'
        },
        {
          paypic: require('assets/images/banks.png'),
          paychoose: '银行卡'
        }
      ]
    }
  },
  methods: {},
  components: {
    orderlist,
    paymethod
  }
}
</script>
<style scoped>
.ex {
  margin: 0 14vw 2rem;
  padding-bottom: 0.6rem;
  border-bottom: rgba(0, 0, 0, 0.05) solid 1px;
  height: 3rem;
}
span {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0;
}
.order-infor {
  background-color: #c9c9c9;
  margin: 0 14vw 2rem;
  font-size: 1.4rem;
  padding: 0.6rem;
}
@media only screen and (max-width: 767px) {
  .ex {
    margin: 0 2rem;
    padding-bottom: 0.6rem;
    border-bottom: rgba(0, 0, 0, 0.05) solid 1px;
    height: 3rem;
  }
}
</style>
