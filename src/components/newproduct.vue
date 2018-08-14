<template>
<div>
  <store-nav-bar :storeList = 'storeList'></store-nav-bar>
  <productlist></productlist>
</div>
</template>

<script>
import storeNavBar from '../components/store/store-nav-bar'
import productlist from '../components/new-product/productlist'
export default {
  data () {
    return {
      storeList: [
        {
          tittle: '2018春季',
          url: ''
        },
        {
          tittle: '2017秋季',
          url: ''
        },
        {
          tittle: '2017春季',
          url: ''
        },
        {
          tittle: '2016秋季',
          url: ''
        },
        {
          tittle: '2016春季',
          url: ''
        },
        {
          tittle: '2015秋季',
          url: ''
        },
        {
          tittle: '达芬奇魅马',
          url: ''
        },
        {
          tittle: '达芬奇魅马',
          url: ''
        }
      ]
    }
  },
  components: {
    storeNavBar,
    productlist
  }
}
</script>
