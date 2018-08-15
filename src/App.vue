<template>
 <div id="app">
    <color-wheel-header></color-wheel-header>
    <router-view></router-view>
    <color-wheel-footer></color-wheel-footer>
  </div>
</template>

<script>
import ColorWheelHeader from './components/ColorWheelHeader'
import ColorWheelFooter from './components/ColorWheelFooter'
export default {
  name: 'app',
  components: {
    ColorWheelHeader,
    ColorWheelFooter
  }
}
</script>

<style>
*:focus {
  outline: none;
}

#app {
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
}
</style>
