<template>
  <div class="user-content">
    <div class="user-content-title">
      nefu_connect服务
    </div>
    <div class="user-content-item">
      <ul>
        <li class="col-xs-6 col-sm-4">
          <a href="http://music.163.com/">
            <div>
              <p class="glyphicon glyphicon-music"></p><br/>
              <span>网易云音乐</span>
            </div>
          </a>
        </li>
        <li class="col-xs-6 col-sm-4">
          <a href="http://www.meituan.com/">
            <div>
              <p class="glyphicon glyphicon-glass"></p><br/>
              <span>美团</span>
            </div>
          </a>
        </li>
        <li class="col-xs-6 col-sm-4">
          <a href="http://www.youdao.com/">
            <div>
              <p class="glyphicon glyphicon-pencil"></p><br/>
              <span>有道</span>
            </div>
          </a>
        </li>
        <li class="col-xs-6 col-sm-4">
          <a href="https://zhidao.baidu.com/">
            <div>
              <p class="glyphicon glyphicon-search"></p><br/>
              <span>百度知道</span>
            </div>
          </a>
        </li>
        <li class="col-xs-6 col-sm-4">
          <a href="http://map.baidu.com/">
            <div>
              <p class="glyphicon glyphicon-map-marker"></p><br/>
              <span>百度地图</span>
            </div>
          </a>
        </li>
        <li class="col-xs-6 col-sm-4">
          <a href="http://mail.163.com/">
            <div>
              <p class="glyphicon glyphicon-envelope"></p><br/>
              <span>网易邮箱</span>
            </div>
          </a>
        </li>
        <li class="col-xs-6 col-sm-4">
          <a href="https://zh.airbnb.com/">
            <div>
              <p class="glyphicon glyphicon-home"></p><br/>
              <span>Airbnb</span>
            </div>
          </a>
        </li>

        <li class="col-xs-6 col-sm-4">
          <a href="job/load_job">
            <div>
              <p class="glyphicon glyphicon-home"></p><br/>
              <span>大学生兼职</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default{}
</script>

<style>
  .user-content{
    background: rgba(0, 0, 0, 0.027);
    width: 100%;
    display: inline-block;
    /*padding-bottom: 50px;*/
  }
  .user-content-title{
    height: 38px;
    padding: 10px 8px 8px 8px;
    font-size: 1.5rem;
  }
  .user-content-item{
    background: #ffffff;
    width: 100%;
    padding: 20px 0 0 0;
    display: inline-block;
  }
  .user-content-item li{
    text-align: center;
  }
  .user-content-item div{
    display: inline-block;
    width: 100px;
    height: 100px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    transition: 0.4s;
    font-size: 1.4rem;
    cursor: pointer;
    margin-bottom: 20px;
    padding-top: 30px;
  }
  .user-content-item p{
    font-size: 2rem;
    margin: 0;
  }
  .user-content-item div:hover{
    -webkit-box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.15);
  }
</style>
