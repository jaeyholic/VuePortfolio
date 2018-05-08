<template>
  <div class="three main-content">
    <div class="left-content slideUp">
      <router-link to="/portfolio/two"><img class="arrow arrow-up" src="../assets/arrow-up.svg" alt=""></router-link>

      <h1>PRINT</h1>

      <p class="subtxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
      <p class="subtxt">minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

    </div>

    <div class="right-content img2">
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'three',
}
</script>

<style lang="scss" scoped>

  $page-color: #5487a8;

  h1 {
    color: $page-color;
  }

   .img2 {
    background: url('../assets/card.jpg');
    background-size: cover;
    background-position: 50%;

    img {
      width: 50%;
    }
  }

</style>

