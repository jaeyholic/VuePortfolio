<template>
  <div class="about main-content">
    <div class="left-content">
      <h1>About me</h1>
      <p class="subtxt">I am a UI/UX Designer, HTML, CSS, Javascript and Javascript Framework Developer.</p>
    

    <button><router-link to="/portfolio/one">Look at my work</router-link></button>
    </div>

    <div class="right-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis tempora atque labore possimus eius soluta ratione cum amet quos placeat nam quod eaque minima eligendi aspernatur facilis delectus aliquam est animi ut ex, ab aliquid hic! Quidem veniam voluptas, repellendus beatae magni omnis impedit id. Corporis vel nemo incidunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis harum laudantium deleniti voluptate quaerat sapiente dolorem incidunt in at, atque id placeat maxime voluptatem quibusdam, ipsa explicabo fugiat recusandae itaque?</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  
  .left-content {
    background-color: #FFE981;
  }

  .right-content {
    background: #fff;
    padding: 150px 80px 15px 80px;
    margin-top: 80px;
    display: block;
  }

  button {
    font-size: 1.5em;
    margin-top: 80px;
  }

  .subtxt {
    font-size: 1.5em;
    margin-top: 30px; 
  }
</style>

