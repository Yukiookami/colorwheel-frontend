<template>
<div class="list-box">
  <h3>有关燃料块的更多了解</h3>
  <ul>
    <li v-for = "(item,index) in aboutList" :key="index">
      <router-link :to = "item.url">{{item.msg}}</router-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: ['aboutList']
}
</script>

<style scoped>
  li {
    list-style: none;
    line-height: 2.2rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  a {
    color: #353535;
  }
</style>
