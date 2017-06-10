<template>
  <li>
    <div class="wrapper">
      <div class="content-header">
        <router-link :to="'/details/'+id">
          <div class="content-header-left">
            <img src="./man1.jpg" alt="" v-if="isAnonymity">
            <img :src="photo" alt="" v-else>
            <span>{{name}}</span>
          </div>
        </router-link>
        <div class="content-header-right content-date">{{date}}</div>
      </div>
      <div class="content-middle">
        <div class="middle-text">{{content}}</div>
      </div>
      <div class="content-footer">
        <div class="content-footer-love">
          <p class="content-footer-love-pic">
            <img src="./love-2.jpg" alt="" class="content-footer-love-img" v-if="isLike">
            <img src="./love.jpg" alt="" class="content-footer-love-img" v-else>
            <input type="checkbox" :value="id" class="content-footer-love-input" v-on:click="Like">
          </p>
          <span>{{ln}}</span>
        </div>
        <router-link :to="'/details/'+id">
          <div class="content-footer-comment">
            <a href="javascript:"><img src="./comment.jpg" alt=""></a>
            <span>{{cn}}</span>
          </div>
        </router-link>
      </div>
    </div>
  </li>
</template>

<script>
export default{
  props:['id','name','photo','date','content','ln','cn','isAnonymity'],
  data () {
    return {
      'isLike': false,
      falg: true
    }
  },
  methods: {
    Like: function () {
      if(this.falg == true){
        this.isLike = true;
        this.ln++;
        this.falg = false;
      }else{
        this.isLike = false;
        this.ln--;
        this.falg = true;
      }

    }
  },

}
</script>

<style>
 #index .wrapper{
    width: 600px;
    padding: 12px 25px 4px;
    border-bottom: 15px solid rgb(242, 242, 242);
  }
  .content-header,.content-middle,.content-footer{
    width: 100%;
  }
  .content-header{
    height: 44px;
    line-height: 44px;
  }
  .content-header-left{
    float: left;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .content-header-right{
    float: right;
    color: rgb(179, 179, 179);
    font-size: 15px;
  }
  .content-header-left img{
    width: 40px;
    height: 40px;
    margin-right: 15px;
    border-radius: 50%;
  }
  .content-header-left span{
    font-family: Arial, Microsoft YaHei;
    font-size: 1.6rem;
  }
  .content-middle{
    width: 100%;
    padding: 7px 0 13px;
    font-size:17px;
    font-family: Arial, Microsoft YaHei;
    border-bottom: 1px solid rgb(222, 222, 222);
  }
  .middle-text{
    width: 100%;
    height: 100%;
    padding-bottom: 15px;
    word-wrap: break-word;
  }
  .middle-btn{
    display: inline-block;
    border: 1px solid rgb(170, 170, 170);
    color: rgb(170, 170, 170);
    border-radius: 35px;
    text-align: center;
    line-height: 25px;
    font-size: 14px;
    padding: 2px 20px;
    cursor: pointer;
    margin: 0 0 10px;
  }
  .content-footer{
    height: 44px;
    line-height: 44px;
  }
  .content-footer div{
    width: 55px;
    height: 30px;
    float: right;
  }
  .content-footer-comment{
    margin-right: 15px;
  }
  .content-footer img{
    width: 22px;
    height: 22px;
    margin-right: 1px;
  }
  .content-footer-love-pic{
    position: relative;
    display: inline-block;
    width: 22px;
    height: 22px;
  }
  .content-footer-love-pic input{
    height: 100%;
    width: 100%;
    opacity: 0;
    position: absolute;
    top: 8px;
    left: 0;
  }
  .content-footer span{
    font-family: Arial, Microsoft YaHei;
    color: rgb(170, 170, 170);
    font-size: 1.8rem;
  }
 @media(max-width: 600px){
   #index{
     width: 100%;
   }
   #index .title{
     width: 100%;
   }
   #index .content{
     width: 100%;
   }
   #index .wrapper{
     width: 100%;
   }
 }
</style>
