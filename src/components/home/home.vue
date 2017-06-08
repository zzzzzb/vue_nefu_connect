<template>
  <div>
    <v-header></v-header>
    <msg-item></msg-item>
    <msg-item></msg-item>
    <msg-item></msg-item>
    <msg-item></msg-item>
    <msg-item></msg-item>
    <msg-item></msg-item>
  </div>
</template>

<script>
  import header from '../header/header'
  import msgItem from '../msg-item/msg-item'
export default{
  components:{
    'v-header': header,
    'msg-item': msgItem
  }
}
</script>

<style>

</style>
