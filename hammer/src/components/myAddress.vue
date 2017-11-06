<template>
  <div class="address">
    <div><span>收货信息</span>
      <button @click='addAddress()'><span>+</span>添加新地址</button>
    </div>
    <div>
      <div>
        <span>姓名</span>
        <span>详细地址</span>
        <span>电话></span>
      </div>
      <ul>
        <li>
          <div>
            <span>123</span>
            <span>北京市</span>
            <span>删除</span>
            <span>编辑</span>
            <span>(默认地址)</span>
            <span>12315512321</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

</script>
<style lang="scss">
  .address {
    & > div:nth-of-type(1) {
      height: 60px;
      padding: 0 10px 0 28px;
      background: #F5F5F5;
      background: linear-gradient(#FFF, #F5F5F5);
      border-bottom: 1px solid #DCDCDC;
      border-radius: 10px 10px 0 0;
      box-shadow: 0 1px 7px rgba(0, 0, 0, .06);
      line-height: 60px;
      color: #646464;
      button {
        float: right;
        border: none;
        background: #A2A2A2;
        border-radius: 8px;
        height: 38px;
        color: #FFF;
        width: 121px;
        font-weight: 900;
        margin-top: 12px;
        outline:none;
      }
    }
    &>div:nth-of-type(2){
      height: 38px;
      background: #EEE;
      border: 1px solid #DBDBDB;
      line-height: 38px;
      font-size: 12px;
      color: #666;
      &>div:nth-of-type(1){
        padding: 0 24px;
        height: 38px;
        background: #EEE;
        border-top: 1px solid #DBDBDB;
        border-bottom: 1px solid #DBDBDB;
        line-height: 38px;
        font-size: 12px;
        color: #666;
        span:nth-of-type(3) {
          float: right;
          width: 160px;
          padding-right: 191px;
          height: 38px;
          text-align: center;
        }
        span:nth-of-type(1){
          width: 108px;
          padding-left: 6px;
          float: left;
          text-align: left;
        }
        span:nth-of-type(2){
          float: left;
          text-align: left;
          a{
            color: #5079d9
          }
        }
      }
      ul{
        list-style: none;
        li{
          background: white;
          &>div:nth-of-type(1){
            width:100%;
            float: left;
            overflow: hidden;
            height: 110px;
            line-height: 110px;
            span{
              float: left;
              display: inline-block;
            }
            span:nth-of-type(3) {
              float: right;
            }
            span:nth-last-of-type(1) {
              width: 160px;
              line-height: 110px;
              text-align: center;
              float: right;
            }
            span:nth-of-type(1){
              width: 106px;
              height: 100%;
              padding: 0 20px 0 24px;
            }
            span:nth-of-type(2){
              width: 95px;
              padding-right: 23px;
              height:100%;
            }
            span:nth-of-type(4){
              float: right;
              width: 85px;
              padding-right: 27px;
              text-align: right;
              font-weight: 700;
            }
            span:nth-of-type(5){
              float: right;
            }
          }
          &>div:nth-of-type(2){
            float: right;
            display: table;
            height: 110px;
            &>span{
              padding-right: 18px;
              line-height: 110px;
              text-align: right;
              vertical-align: middle;
              font-weight: 700;
              display: inline-block;
              float: left;
            }
            div{
              width: 80px;
              padding: 0 24px;
              text-align: center;
              float: left;
              line-height: 110px;
              a{
                background: linear-gradient(#7EA3F5,#5A82F0);
                box-shadow: 0 1px 2px rgba(255,255,255,.1) inset,0 0 0 1px rgba(0,0,0,.2) inset,0 1px 3px rgba(0,0,0,.1);
                color: #FFF;
                display: inline-block;
                height: 30px;
                padding: 0 13px;
                border-radius: 4px;
                line-height: 30px;
                font-size: 12px;
                cursor: pointer;
                transition: all .5s;
              }
              a:hover{
                box-shadow: 0 1px 1px #7696DE inset,0 0 2px #627DCA inset,0 -2px 3px #5A77C7 inset,0 0 100px rgba(48,77,147,.4) inset,0 0 0 1px rgba(0,0,0,.3) inset,0 1px 3px rgba(0,0,0,.1);
                color: #FFF;
              }
            }
          }
        }
        li:after{
          content: '';
          display: block;
          clear: both;
          overflow: hidden;
          height: 0;
        }
      }
    }
  }
</style>
