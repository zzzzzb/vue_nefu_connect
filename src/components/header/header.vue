<template>
  <div class="title navbar navbar-fixed-top">
    <div class="title-left" id="logo">
      <img src="./favicon.jpg" alt="">
    </div>
    <div class="title-center" id="title">
      NfuConnect
    </div>
    <div class="title-right" >
      <img id="open" src="./add.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default{}
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
    font-size: 17px;
    color:#fff;
    text-align: center;
    cursor: pointer;
  }
  .title-left img{
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .title-right{
    text-align: right;
    font-size: 17px;
    color:#fff;
  }
  .title-right img{
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  #open{
    transition: transform .2s ease-in;
    -webkit-transition: transform .2s ease-in;
    -o-transition: transform .2s ease-in;
    -moz-transition: transform .2s ease-in;
  }
  #open:hover{
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
  }
</style>
