<template>
  <div class="home main-content">
    <div class="left-content slideUp">
      <h1>CRYPTO LOGO</h1>

      <p class="subtxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
      <p class="subtxt">minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>


      <router-link to="/portfolio/two"><img class="arrow arrow-down" src="../assets/arrow-down.svg" alt=""></router-link>
    </div>

    <div class="right-content img2">
      <img src="../assets/logo.svg" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'one',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>

  $page-color: #226B80;

  h1 {
    color: $page-color;
  }

  .img2 {
    background: $page-color !important;

    img {
      width: 50%;
    }
  }

</style>

