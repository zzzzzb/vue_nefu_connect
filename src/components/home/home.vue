<template>
  <div>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import footer from '../footer/footer'
  export default {
    name: 'index',
    components:{
      'v-footer': footer
    }
  }
</script>

<style>

</style>
