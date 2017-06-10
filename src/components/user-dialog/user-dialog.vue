<template>
  <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <a href="javascript:"><button type="button" id="amend_name" class="btn btn-default btn-lg btn-block">修改个人资料</button></a>
      </div>
      <div class="modal-content">
        <a href="javascript:"><button type="button" id="amend_pass" class="btn btn-default btn-lg btn-block">修改密码</button></a>
      </div>
      <div class="modal-content">
        <a href="javascript:"><button type="button" id="exit_login" class="btn btn-default btn-lg btn-block">退出登录</button></a>
      </div>
    </div>
  </div>
</template>

<script>
export default{}
</script>

<style>
  .modal-content{
    margin-bottom: 10px;
  }
  .modal-content a:hover{
    text-decoration: none;
    color: #000;
  }
  .modal-content a:active{
    text-decoration: none;
  }
</style>
