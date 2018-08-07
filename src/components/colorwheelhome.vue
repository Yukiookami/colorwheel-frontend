<template>
 <div id="home">
   <banner></banner>
   <news></news>
   <artistlist></artistlist>
</div>
</template>

<script>
import banner from './colorwheel-home/banner'
import news from './colorwheel-home/news'
import artistlist from './colorwheel-home/artistlist'
export default {
  name: 'home',
  components: {
    banner,
    news,
    artistlist
  }
}
</script>
<style>
.navbar{
  margin-bottom: 0;
}
</style>
