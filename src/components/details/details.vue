<template>
<div>
  <div class="title navbar navbar-fixed-top">
    <div class="title-left" id="logo">
      <router-link to="/msg-list">首页</router-link>
    </div>
    <div class="title-center" id="title">
      NfuConnect
    </div>
    <div class="title-right" >

    </div>
  </div>
  <!--导航栏结束-->
  <!--内容主体开始-->
  <div class="content">
    <ul>
      <li v-bind:id="$route.params.id">
        <div class="wrapper">
          <div class="content-header">
            <div class="content-header-left">
              <img src="./man1.jpg" alt="" v-if="detail.isAnonymity">
              <img :src="detail.photo" alt="" v-else>
              <span>{{detail.realname}}</span>
            </div>
            <div class="content-header-right content-date">{{detail.postdate}}</div>
          </div>
          <div class="content-middle">
            <div class="middle-text">{{detail.content}}</div>
          </div>
          <div class="content-footer">
            <div class="content-footer-love">
              <p class="content-footer-love-pic">
                <img src="./love.jpg" alt="" v-if="isLike">
                <img src="./love-2.jpg" alt="" v-else>
                <input type="checkbox" :value="detail.msg_id">
              </p>
              <span>{{detail.love_num}}</span>
            </div>
            <div class="content-footer-comment">
              <a href="javascript;"><img src="./comment.jpg" alt=""></a>
              <span>{{detail.com_num}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!--评论主体开始-->
  <div class="comment">
    <ul>
      <li v-for="comment in comments">
        <div class="wrapper-com">
          <div class="comment-header">
            <div class="comment-header-left">
              <img :src="comment.portrait" alt="">
              <div class="column">
                <div class="column-one">{{comment.realname}}</div>
                <div class="column-two">
                  {{comment.postdate}}
                </div>
              </div>
              <div class="comment-header-right">
                <img src="./bear.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="comment-footer">
            {{comment.content}}
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!--评论主体结束-->
  <!--内容主体结束-->
  <!--尾部开始-->
  <div class="det-footer">
    <form action="welcome/add_comment" method="post">
      <input type="hidden" value="<?php echo $detail->msg_id;?>" name="hid_msg_id">
      <div class="input-group">
        <input type="text" class="form-control" name="comment" id="content_com" placeholder="发表评论" autocomplete="off" v-if="isLogin">
        <input type="text" class="form-control" name="comment" placeholder="请登录后评论" disabled v-else>
        <span class="input-group-btn">
          <button class="btn btn-default" type="submit" id="send_com" v-if="isLogin">发表</button>
          <button class="btn btn-default" type="submit" id="send_com" disabled v-else>发表</button>
        </span>
      </div>
    </form>
  </div>
</div>
</template>

<script>
  import Axios from 'axios'
export default{
    data(){
        return {
          detail: [],
          comments: [],
          "isLogin": true,
          "isLike": true
        }
    },
  created:function () {
    Axios.get('http://127.0.0.1:8080/api/comment').then((res)=>{
      console.log(res.data.data);
      this.comments = res.data.data;
    });
    Axios.get('http://127.0.0.1:8080/api/message').then((res)=>{
      console.log(res.data.data[2]);
      this.detail = res.data.data[2];
    });
  }
}
</script>

<style>
  #index .title{
    width: 600px;
    height: 45px;
    min-height: 45px;
    background: rgb(66, 185, 131);
    display:-webkit-box;
    margin-right: auto;
    margin-left: auto;
    margin-bottom:0;
    padding-left: 30px;
    padding-right: 30px;
    position: fixed;
  }
  #index .content{
    width: 600px;
    margin-top: 45px;
  }
  .title-left,.title-center,.title-right{
    -webkit-box-flex:1;
    line-height:45px ;
  }
  .title-center{
    font-size: 1.7rem;
    color:#fff;
    text-align: center;
    cursor: pointer;
  }
  .title-left{
    width: 30px;
    height: 30px;
    font-size: 1.5rem;
  }
  .title-left a{
    text-decoration: none;
    line-height: 30px;
    color:#fff;
    font-family: Arial, Microsoft YaHei;
  }
  .title-right{
    width: 8%;
  }
  #index .wrapper{
    width: 600px;
    padding: 12px 25px 4px;
    border-bottom: 15px solid rgb(242, 242, 242);
  }
  #index .wrapper-com{
    width: 600px;
    padding: 0 25px 4px;
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
  .content-header-left span{
    font-family: Arial, Microsoft YaHei;
    font-size: 1.6rem;
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
  .comment li{
    border-bottom: 1px solid rgba(0, 0, 0, 0.0980392);
    margin-bottom: 5px;
  }
  .comment-header-right{
    float: right;
    display: inline-block;
    padding-top: 8px;
    color: rgb(170, 170, 170);
  }
  .comment-header-left > img{
    width: 38px;
    height: 38px;
    margin-right: 12px;
    border-radius: 50%;
    margin-top: -18px;
  }
  .comment-header-right img{
    width: 28px;
    height: 28px;
  }
  .column{
    display: inline-block;
    flex-direction: column;
    justify-content: center;
  }
  .column-one{
    padding: 2px 0 3px;
    font-size: 14px;
  }
  .column-two{
    color: rgb(170, 170, 170);
    letter-spacing: 0.8px;
    font-size: 12px;
  }
  .comment-footer{
    font-size: 16px;
    padding:8px 0 5px;
    font-family: Arial, Microsoft YaHei;
  }
  .det-footer{
    position: fixed;
    width: 100%;
    max-width: 600px;
    color: rgba(0, 0, 0, 0.8);
    padding: 12px 15px;
    bottom: 0px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.0470588) 0.5px 0.5px 0.5px 0.5px;
  }
  .det-footer form{
    max-width: 600px;
    color: rgba(0, 0, 0, 0.8);
    bottom: 0;
    box-shadow: rgba(0, 0, 0, 0.0470588) 0.5px 0.5px 0.5px 0.5px;
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
    #index .comment{
      width: 100%;
    }
    #index .wrapper-com{
      width: 100%;
    }
    .footer{
      width: 100%;
    }
  }
</style>
