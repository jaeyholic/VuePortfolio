<template>
  <div class="home main-content">
    <div class="left-content">
      <h1>7 YRS DESIGN &amp; WEB DEVELOPMENT</h1>

      <p class="subtxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
      <p class="subtxt">minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
    </div>

    <div class="right-content img1">
      <button><router-link to="/portfolio/one">Browse Work</router-link></button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .img1 {
    background: url('../assets/home.jpg');
  }

</style>

