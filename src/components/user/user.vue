<template>
<div>
  <v-header></v-header>
  <v-content></v-content>
  <v-dialog></v-dialog>
</div>
</template>

<script>
import content from '../user-content/user-content'
import header from '../user-header/user-header'
import dialog from '../user-dialog/user-dialog'
  export default{
    components: {
      'v-header': header,
      'v-content': content,
      'v-dialog': dialog
    }
  }
</script>

<style>

</style>
