<template>
    <div id="custom">
       <nav>
    <ul>
      <li :class= "serialnumber? 'border-confirm': ''">
        <router-link to="../storedetail" @click= "changeAgency">编号</router-link>
      </li>
      <li :class= "picframe? 'border-confirm': ''">
        <router-link to="../model" @click= "changecooperation">画框</router-link>
      </li>
      <li :class= "stocksize? 'border-confirm': ''">
        <router-link to="" @click= "changegraduate">常规尺寸</router-link>
      </li>
    </ul>
  </nav>
  <modelimg></modelimg>
     <div class="csize">
         <span>定制尺寸</span></div>
    </div>
</template>

<script>
import modelimg from '../components/customsize/modelimg'
export default {
  name: 'custom',
  data () {
    return {
      serialnumber: false,
      picframe: false,
      stocksize: true
    }
  },
  methods: {
    changeAgency: function () {
      if (this.serialnumber === true) {
        return
      }
      this.serialnumber = !this.serialnumber
      this.stocksize = false
      this.picframe = false
    },
    changecooperation: function () {
      if (this.picframe === true) {
        return
      }
      this.picframe = !this.picframe
      this.serialnumber = false
      this.stocksize = false
    },
    changegraduate: function () {
      if (this.stocksize === true) {
        return
      }
      this.stocksize = !this.stocksize
      this.serialnumber = false
      this.picframe = false
    }
  },
  components: {
    modelimg
  }
}
</script>
<style scoped>
a {
  color: #353535;
  text-decoration: none;
  cursor: pointer;
}

li {
  display: block;
  padding-bottom: 0.2rem;
  list-style: none;
}

ul {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 0 0 0 2vw;
  padding: 0;
  width: 25rem;
}

nav {
  margin: 0 14vw 5rem;
  padding-bottom: 0.6rem;
  border-bottom: rgba(0, 0, 0, 0.05) solid 1px;
  height: 3rem;
  display: flex;
  justify-content: center;
}

.border-confirm {
  border-bottom: #353535 solid 1px;
}
.csize{
  border-bottom: #353535 solid 1px;
  width:5rem;
  padding-bottom:.8rem;
  padding-top:5rem;
  margin:0 auto;
}
@media (max-width: 768px) {
  nav {
    display: flex;
    justify-content: center;
    margin: 0 0 5rem 0;
  }
}
</style>
