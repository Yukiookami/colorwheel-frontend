<template>
<div>
  <store-nav-bar :storeList = 'storeList'></store-nav-bar>
  <store-mo :buyList = 'buyList'></store-mo>
</div>
</template>

<script>
import storeNavBar from '../components/store/store-nav-bar'
import storeMo from '../components/store/store-mo'

export default {
  data () {
    return {
      storeList: [
        {
          tittle: '2017',
          url: ''
        },
        {
          tittle: '2017',
          url: ''
        }
      ],
      buyList: [
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        },
        {
          picUrl: require('../assets/images/store-mo.jpg'),
          tittle: 'NB-141',
          name: 'Down Miller',
          headUrl: require('../assets/images/store-head.jpg'),
          price: 35000,
          buy: ''
        }
      ]
    }
  },
  components: {
    storeNavBar,
    storeMo
  }
}
</script>

<style>

</style>
