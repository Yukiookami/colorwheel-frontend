<template>
<div id="footer">
  <div class="take">
    <router-link to="/">
      <img src="../assets/logo-f.png" class="logo-f">
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
        {
          text: '帮助中心',
          url: ''
        },
        {
          text: '购物指南',
          url: ''
        },
        {
          text: '物流售后问题',
          url: ''
        },
        {
          text: '常见问题',
          url: ''
        }
      ],
      listAbout: [
        {
          text: '关于',
          url: ''
        },
        {
          text: '我们',
          url: ''
        },
        {
          text: '事件',
          url: ''
        },
        {
          text: '艺术家招募',
          url: ''
        }
      ],
      listC: [
        {
          text: '联系我们',
          url: ''
        },
        {
          text: '2885603565@qq.com',
          url: ''
        },
        {
          text: '店面地址',
          url: ''
        },
        {
          text: '联系方式',
          url: ''
        }
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
  height: 12rem;
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
  width: 20.7rem;
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
  border: #353535 solid 1px;
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
  margin-left: 5rem;
  width: 30vw;
}

.list-sec ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  height: 9rem;
}

@media (max-width: 1200px) {
  #footer
   {
    flex-direction: column;
    justify-content: space-around;
  }

  .list-sec {
    justify-content: space-around;
    margin: 0 0 0 2.5rem;
    width: 90vw;
  }

  .submit button {
    font-size: 12px;
    padding: 6.6px 0;
    width: 5rem;
  }

  .logo-f {
    width: 25.7rem;
  }

  .take {
    height: 10rem;
  }
}
</style>
