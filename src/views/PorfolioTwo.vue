<template>
  <div class="two main-content">
    <div class="left-content slideUp">
      <router-link to="/portfolio/one"><img class="arrow arrow-up" src="../assets/arrow-up.svg" alt=""></router-link>
      
      <h1>MOBILE UI</h1>

      <p class="subtxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
      <p class="subtxt">minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>


      <router-link to="/portfolio/three"><img class="arrow arrow-down" src="../assets/arrow-down.svg" alt=""></router-link>
    </div>

    <div class="right-content img2">
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'two',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>

  $page-color: #46b886;

  h1 {
    color: $page-color;
  }

  .img2 {
    background: url('../assets/phone.jpg');
    background-size: cover;
    background-position: 50%;

    img {
      width: 50%;
    }
  }


</style>

