<template>
  <ul class="list">
    <li v-for="(item,index) in content" :key="index">
      <a href="item.url">
        {{item.text}}
      </a>
    </li>
  </ul>
</template>

<script>
export default({
  name: 'home',
  props: ['content']
})
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list li {
  font-size: 14px;
  list-style: none;
}

.list>:first-child {
  font-weight: bold;
}

.list a {
  color: #000;
  text-decoration: none;
}
</style>
