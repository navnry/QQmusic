<template>
  <div id="app">
    <m-header></m-header>
    <router-view/>
  </div>
</template>

<script>
  import Header from "@/components/Header"

  export default {
    name: 'App',
    components: {
      'm-header': Header
    }
  }
</script>

<style>
  #app {

  }
</style>
