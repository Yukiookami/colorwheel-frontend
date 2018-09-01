<template>
<div id="checkPage">
  <nav>
    <h2>核对订单</h2>
  </nav>
  <div class="title-box">新增收货地址</div>
  <section class="details-box">
    <section>
      <div class="flex-box">
        <span>所在地区</span>
        <select class="select-box">
          <option selected>请选择省份</option>
          <option v-for="(itemP,indexP) in placeList" :key="indexP">
            {{itemP.place}}
          </option>
        </select>
        <select class="select-box" >
          <option selected>请选择地区</option>
          <option v-for="(itemC,indexC) in cityList" :key="indexC">
            {{itemC.city}}
          </option>
        </select>
        <select class="select-box">
          <option selected>请选择区县</option>
          <option v-for="(itemA,indexA) in areaList" :key="indexA">
            {{itemA.area}}
          </option>
        </select>
      </div>
    </section>
    <section class="flex-box">
      <span>详细地址</span>
      <textarea class="textarea-box" placeholder="请输入您的详细地址"></textarea>
    </section>
    <section class="flex-box">
      <div class="margin-media">
        <span>收货人</span>
        <input placeholder="请输入收货人姓名">
      </div>
      <div class="relation">
        <span>联系电话</span>
        <input placeholder="请输入收货人电话">
      </div>
    </section>
    <section class="click-box flex-box">
      <div class="click-flex-box margin-media">
        <input type="checkbox"><span>设为默认地址</span>
      </div>
      <button class="save-button">
        保存地址
      </button>
    </section>
  </section>
  <div class="title-box">新增收货地址</div>
  <textarea class="ps" rows="5"></textarea>
  <div class="title-box commodity">
    <div>商品信息</div>
    <div class="commodity-list-imfor">
      <span class="hide-sm">单价</span>
      <span class="hide-sm">数量</span>
      <span class="hide-sm">价格</span>
    </div>
  </div>
  <section class="details-box com-box">
    <div v-for="(item,indexCom) in commodityList" :key="indexCom" class="commodity-list-box">
      <img class="show-com" :src='item.imgSrc'>
      <div class="imfor-box">
        <h3>{{item.name}}</h3>
        <span>品种：{{item.kind}}</span>
        <span>尺寸：{{item.size}}</span>
        <span>画框：{{item.border}}</span>
      </div>
      <div class="commodity-imfor">
        <span><span class="hide-big">单价：</span>{{item.price}}&yen;</span>
        <span><span class="hide-big">数量：</span>{{item.num}}</span>
        <span><span class="hide-big">总价：</span>{{item.all}}</span>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  data () {
    return {
      placeList: [
        {place: '四川'}
      ],
      cityList: [
        {city: '成都'}
      ],
      areaList: [
        {area: '武侯区'}
      ],
      commodityList: [
        {
          imgSrc: require('../assets/images/maskImg.jpg'),
          name: 'NB-124',
          kind: '晶瓷画',
          size: '77*99',
          border: '金色铝合金',
          price: '1175.00',
          num: '2',
          all: ''
        }
      ]
    }
  },
  mounted: function () {
    for (let i in this.commodityList) {
      this.commodityList[i].all =
      this.commodityList[i].price *
      this.commodityList[i].num
    }
  }
}
</script>

<style>
#checkPage {
  margin: 0 auto;
  width: 60%;
  text-align: left;
  font-size: 14px;
}

nav {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, .3)
}

nav h2 {
  margin: 0;
  font-size: 18px;
}

.title-box {
  padding: 5px 0;
  margin: 20px 0 10px;
  background-color: rgba(0, 0, 0, .1);
}

.details-box {
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, .3);
}

.select-box {
  margin: 0 1rem;
  padding: .2rem .5rem;
  color: #666
}

.flex-box {
  display: flex;
  align-items: center;
}

.click-flex-box {
  display: flex;
  align-items: center;
}

input[type=checkbox], input[type=radio] {
  margin: 0;
}

.textarea-box {
  margin-left: 1rem;
  padding: .5rem;
  height: 5rem;
  width: 20rem;
}

::-webkit-input-placeholder,
:-moz-placeholder,
::-moz-placeholder,
:-ms-input-placeholder {
  color: #666
}

.click-box {
  display: flex;
  justify-content: space-between;
  margin: 0 !important;
  width: 100%;
}

.save-button {
  padding: .5rem 1rem;
  background-color: #333;
  color: #fff
}

.details-box section {
  margin: 1.5rem 0;
}

.relation {
  margin-left: 2rem;
}

.ps {
  width: 100%;
}

.commodity {
  display: flex;
  justify-content: space-between;
}

.commodity-list-imfor {
  display: flex;
  justify-content: space-around;
  width: 30%;
}

.com-box {
  padding: 0;
}

.commodity-list-box {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.imfor-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20rem;
}

.commodity-imfor {
  display: flex;
  width: 30%;
  height: 20rem;
  align-items: center;
  justify-content: space-around;
}

.show-com {
  margin: 1rem 0 1rem 3rem;
  height: 264px;
  width: 174px;
}

.hide-big {
  display: none;
}

.hide-sm {
  display: inline;
}

@media (max-width: 840px) {
  .flex-box {
    flex-direction: column;
  }

  .relation {
    margin: 0;
  }

  .select-box {
    margin: .5rem 0;
  }

  .margin-media {
    margin: 1rem 0;
  }

  .hide-big {
    display: inline;
  }

  .hide-sm {
    display: none;
  }

  .commodity-list-box {
    flex-direction: column;
    align-items: center;
  }

  .imfor-box {
    align-items: center;
    height: 10rem;
  }

  .commodity-imfor {
    flex-direction: column;
    width: auto;
    height: 6rem;
  }

  .textarea-box {
    margin: 0;
    width: 100%;
  }
}
</style>
