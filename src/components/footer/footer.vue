<template>
  <footer class="footer">
    <div class="footer-left">
      <img src="./imgs/page-2.jpg" alt="">
    </div>
    <div class="footer-right">
      <a href="javascript:"><img src="./imgs/person-1.jpg" alt=""></a>
    </div>
  </footer>
</template>

<script>
export default{}
</script>

<style>
  .footer{
    width: 100%;
    height: 50px;
    border-top: 0.5px solid rgba(0, 0, 0, 0.0980392);
    box-shadow: rgba(0, 0, 0, 0.0470588) 0.5px 0.5px 0.5px 0.5px;
    background-color: rgb(255, 255, 255);
    position: fixed;
    left:0;
    bottom:0;
  }
  .footer-left,.footer-right{
    width: 50%;
    height: 50px;
    float: left;
    line-height: 50px;
    text-align: center;
  }
  .footer-left img{
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .footer-right img{
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
</style>
