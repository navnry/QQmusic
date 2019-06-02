<template>
  <div id="header">
    <div class="nav">
      <router-link to="/recommend" class="nav-item">推荐</router-link>
      <router-link to="/rank" class="nav-item">排行榜</router-link>
      <router-link to="/search" class="nav-item">搜索</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",

  }
</script>

<style scoped>
  .nav {
    width: 100%;
    display: flex;
    height: .8rem;
    background: #ffffff;
    position: fixed;
    top: 0;
    z-index: 2;
  }

  .nav-item {
    display: block;
    width: 33.33%;
    font-size: .32rem;
    text-align: center;
    line-height: .78rem;
  }

  .nav-item.router-link-active {
    color: #42b983;
    border-bottom: 2px solid #42b983;
  }
</style>
