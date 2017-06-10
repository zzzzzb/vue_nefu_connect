<template>
  <header class="user-header">
    <a href="welcome/exit_login"><span class="user-more glyphicon glyphicon-option-horizontal"></span></a>
    <button type="button" class="user-more glyphicon glyphicon-option-horizontal" data-toggle="modal" data-target=".bs-example-modal-sm"></button>
    <div class="user-photo">
      <img src="http://127.0.0.1/nefu_connect/assets/img/user_portrait/zzzzzz.jpeg" alt="username">
      <div>name</div>
    </div>
    <div class="user-info">
      <div class="user-info-left">
        <a href="javascript:">
          <span>帖子</span>
        </a>
        <a href="javascript:">
          <span class="number">5</span>
        </a>
      </div>
      <div class="user-info-right">
        <a href="javascript:">
          <span>喜欢</span>
        </a>
        <a href="javascript:">
          <span class="number">3</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default{}
</script>

<style>
  .user-header{
    width: 100%;
    height: 152px;
    background: #f0f0f0;
    padding: 12px 0 16px 0;
  }
  .user-header .user-more{
    position: absolute;
    top: 12px;
    right: 15px;
    cursor: pointer;
    font-size: 2.5rem;
    background: transparent;
    border: none;
    outline:none;
  }
  .user-photo{
    text-align: center;
  }
  .user-photo img{
    width: 55px;
    height: 55px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  .user-info{
    height: 39px;
    padding-top: 18px;
  }
  .user-info div{
    width: 50%;
    float: left;
    text-align: center;
    line-height: 21px;
  }
  .user-info-left{
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
  .user-info span{
    color: rgba(0, 0, 0, 0.498039);
    margin-right: 3px;
  }
  .user-info .number{
    color: #000;
    font-size: 2rem;
  }
  .user-info a:link {
    text-decoration: none;
  }
  .user-info a:visited {
    text-decoration: none;
  }
  .user-info a:hover{
    text-decoration: none;
    color: #000;
  }
  .user-info a:active{
    text-decoration: none;
  }
</style>
