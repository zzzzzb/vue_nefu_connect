<template>
  <div>
    <v-header></v-header>
    <div class="content">
      <ul id="message-list">
        <msg-item v-for="message in messages" :id="message.msg_id" :name="message.realname"
                  :photo="message.photo" :date="message.postdate" :ln="message.love_num"
                  :content="message.content" :cn="message.com_num"></msg-item>
      </ul>
    </div>
  </div>
</template>

<script>
  import header from '../header/header'
  import msgItem from '../msg-item/msg-item'
  import dialog from '../dialog/dialog'
  import Axios from 'axios'
export default{
      data(){
        return {
            messages: []
        }
      },
  components:{
    'v-header': header,
    'msg-item': msgItem
  },
  created:function () {
    Axios.get('api/message').then((res)=>{
        console.log(res.data.data);
       this.messages = res.data.data;
    });
  }
}
</script>

<style>

</style>
