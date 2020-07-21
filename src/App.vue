<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

</style>

<script>
  import register from './views/register'

  export default {
    name:'App',
    components:{register}
  }
</script>