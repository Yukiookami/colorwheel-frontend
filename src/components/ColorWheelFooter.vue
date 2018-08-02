<template>
<div id="footer">
  <div class="take">
    <router-link to="/">
      <img src="../assets/logo-f.png">
    </router-link>
    <div class="submit">
      <input placeholder="请输入E-mail" type="email"><button>订阅</button>
    </div>
  </div>
  <div class="list-sec">
    <footer-mo :content = "listQ"></footer-mo>
    <footer-mo :content = "listAbout"></footer-mo>
    <footer-mo :content = "listC"></footer-mo>
  </div>
</div>
</template>

<script>
import footerMo from '../components/footer/footer-mo'

export default({
  name: 'foot',
  data: function () {
    return {
      listQ: [
        {text: '帮助中心', url: ''},
        {text: '购物指南', url: ''},
        {text: '物流售后问题', url: ''},
        {text: '常见问题', url: ''}
      ],
      listAbout: [
        {text: '关于', url: ''},
        {text: '我们', url: ''},
        {text: '事件', url: ''},
        {text: '艺术家招募', url: ''}
      ],
      listC: [
        {text: '联系我们', url: ''},
        {text: '邮箱2885603565@qq.com', url: ''},
        {text: '店面地址', url: ''},
        {text: '联系方式', url: ''}
      ]
    }
  },
  components: {
    footerMo
  }
})
</script>

<style scoped>
*:focus {
  outline: none;
}

#footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height:331px;
  background-color: #f8f8f8;
}

.list-sec,
.take {
  height: 9rem;
}

.take {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
}

.submit {
  display: flex;
  align-items: center;
}

.submit input {
  width: 12.7rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 1px #919191 solid;
}

.submit input::-webkit-input-placeholder {
  font-size: 14px;
}

.submit button {
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  background-color: #353535;
  color: #FFF;
}

.submit input,
.submit button {
  padding: 5px 20px;
  font-size: 14px;
  margin: 0;
}

.list-sec {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 5rem;
  width: 25vw;
}

.list-sec ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  height: 7rem;
}
</style>
