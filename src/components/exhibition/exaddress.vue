<template>
    <div id="eximglist">
      <div class="crumbs">
      {{meetingname}}
      <span>- {{exoverview}}</span>
      </div>
      <div class="exover">
     <ul class="exover-list">
    <li v-for="(item,index) in items" :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <img class="eaddress" :src="item.Img" />
    </li>
     </ul>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      exoverview: '颜料块画廊2018春季展展位',
      meetingname: '第41届中国(广州)国际家居博览会',
      items: [
        {
          Img: require('assets/images/exaddress.png')
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
.crumbs {
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;
  padding-top: 2rem;
  margin-bottom: 2rem;
  border-top: 1px rgba(0, 0, 0, 0.3) solid;
}
.exover {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
li {
  list-style: none;
}
ul {
  padding: 0;
}
.eaddress {
  width: 998px;
  height: 618px;
}
@media (max-width: 992px) {
  .eaddress {
    width: 750px;
    height: 510px;
  }
}
@media (max-width: 767px) {
  .crumbs {
    display: flex;
    flex-direction: column;
  }
  .eaddress {
    width: 370px;
    height: 252px;
  }
}
</style>
