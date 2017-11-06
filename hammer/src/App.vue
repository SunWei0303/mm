<template>
  <div id="app">
    <header>
      <div class="logo">
        <div class="logo_logo">
          <img src="./assets/smartisan-logo.png" alt="">
        </div>
        <div class="logo_nav">
          <ul>
            <li>在线商城</li>
            <li>坚果 Pro</li>
            <li>Smartisan OS</li>
            <li>欢喜云</li>
            <li>应用下载</li>
            <li>官方论坛</li>
          </ul>
          <div>
            <div>
              <span class="icon iconfont icon-ren"></span>
              <div class="user">
                <div>
                  <img src="./assets/smartisan-logo.png" alt="">
                  <p>+86 133****7940</p>
                </div>
                <ul>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                </ul>
                <p></p>
              </div>
            </div>
            <div>
              <router-link to="/car"><span class="icon iconfont icon-cart"></span></router-link>
              <smallcar></smallcar>
            </div>
            <p :style="allNumber?{background:'#E7635A'}:{background:'#ddd'}">{{allNumber}}</p>
          </div>
        </div>
      </div>
      <ul class="nav">
        <li>首页</li>
        <li>手机</li>
        <li>"足迹系列"手感膜</li>
        <li>官方配件</li>
        <li>周边产品</li>
        <li>第三方配件</li>
        <li class="navactive"><router-link to="/">全部商品</router-link></li>
        <li><router-link to="/myIndent">服务</router-link></li>
      </ul>
      <!--<div class="fixed">-->
        <!--<ul>-->
          <!--<li>首页</li>-->
          <!--<li>手机</li>-->
          <!--<li>"足迹系列"手感膜</li>-->
          <!--<li>官方配件</li>-->
          <!--<li>周边产品</li>-->
          <!--<li>第三方配件</li>-->
          <!--<li>全部商品</li>-->
          <!--<li>服务</li>-->
        <!--</ul>-->
        <!--<div>-->
          <!--<div>-->
            <!--<span class="icon iconfont icon-ren"></span>-->
            <!--<div class="user">-->
              <!--<div>-->
                <!--<img src="./assets/smartisan-logo.png" alt="">-->
                <!--<p>+86 133****7940</p>-->
              <!--</div>-->
              <!--<ul>-->
                <!--<li>1</li>-->
                <!--<li>1</li>-->
                <!--<li>1</li>-->
                <!--<li>1</li>-->
              <!--</ul>-->
              <!--<p></p>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div>-->
            <!--<span class="icon iconfont icon-cart"></span>-->
            <!--<div class="car">-->
              <!--<div class="car_list">-->
                <!--<div><img src="http://image.smartisanos.cn/resource/0bbeba4813c4e0b9cf59e10375e13371.png?x-oss-process=image/resize,w_80/quality,Q_100" alt=""></div>-->
                <!--<div>-->
                  <!--<h4>THE WHITE BRUSH 声波电动牙刷刷刷是是是</h4>-->
                  <!--<p>白色</p>-->
                  <!--<h6><span>¥ 2,599.00</span> x1</h6>-->
                <!--</div>-->
                <!--<div>-->
                  <!--<button>×</button>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="car_money">-->
                <!--<div>-->
                  <!--<h6>共 1 件商品</h6>-->
                  <!--<h4><span>合计: </span>¥2,599.00</h4>-->
                <!--</div>-->
                <!--<div>-->
                  <!--<button>去购物车</button>-->
                <!--</div>-->
              <!--</div>-->
              <!--<p></p>-->
            <!--</div>-->
          <!--</div>-->
          <!--<p>0</p>-->
        <!--</div>-->
      <!--</div>-->
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <div>
        <div class="footer_about">
          <ul class="about">
            <li>
              <h6>订单服务</h6>
              <ul>
                <li>购买指南</li>
                <li>支付方式</li>
                <li>送货政策</li>
              </ul>
            </li>
            <li>
              <h6>订单服务</h6>
              <ul>
                <li>购买指南</li>
                <li>支付方式</li>
                <li>送货政策</li>
              </ul>
            </li>
            <li>
              <h6>订单服务</h6>
              <ul>
                <li>购买指南</li>
                <li>支付方式</li>
                <li>送货政策</li>
              </ul>
            </li>
            <li>
              <h6>订单服务</h6>
              <ul>
                <li>购买指南</li>
                <li>支付方式</li>
                <li>送货政策</li>
              </ul>
            </li>
            <li>
              <h6>订单服务</h6>
              <ul>
                <li>购买指南</li>
                <li>支付方式</li>
                <li>送货政策</li>
              </ul>
            </li>
            <li>
              <h6>订单服务</h6>
              <ul>
                <li>购买指南</li>
                <li>支付方式</li>
                <li>送货政策</li>
              </ul>
            </li>
          </ul>
          <ul class="call">
            <li>400-619-0909</li>
            <li>周一至周日 9:00-18:00（仅收市话费）</li>
            <li><button>在线帮助</button></li>
          </ul>
        </div>
        <div class="footer_copy">
          <select>
            <option>中文</option>
            <option>English</option>
          </select>
          <div>
            <span>Copyright © 2017, Smartisan Digital Co., Ltd. All Rights Reserved.北京锤子数码科技有限公司</span>
            <ul>
              <li>法律声明</li>
              <li>隐私条款</li>
              <li>开发者中心</li>
            </ul>
          </div>
          <span>京ICP备14041720号-1京ICP证140622号京公网安备11010502025474</span>
        </div>
      </div>
    </footer>
    <v-address v-if="addRess"></v-address>
  </div>
</template>
<script>
import smallcar from './views/smallcar'
import address from './views/address'
export default {
  computed: {
    allNumber () {
      return this.$store.getters.allNumber
    },
    goodsData () {
      return this.$store.state.goodsData
    },
    addRess () {
      return this.$store.state.isaddShow
    }
  },
  components: {
    smallcar,
    'vAddress': address

  },
  name: 'app'
}
</script>
<style lang="scss" rel="stylesheet/scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  *{
    margin:0;
    padding:0;
    list-style: none;
    font-family: 微软雅黑;
  }
  body{
    position: relative;
    background: #EDEDED;
  }
  header{
    width:1349px;
    .logo{
      padding:25px 64.5px;
      box-sizing: border-box;
      height:100px;
      background: #000;
      color: #C8C8C8;
      .logo_logo{
        float: left;
      }
      .logo_nav{
        float: right;
        margin-top:10px;
        height:28px;
        &>ul{
          float: left;
          font-size:14px;
          &>li{
            float: left;
            padding:0 25px;
            line-height:28px;
          }
        }
        &>div:before{
          background: #333;
          content: " ";
          height: 13px;
          width: 1px;
          overflow: hidden;
          position: absolute;
          top: 4px;
          left: 0;
        }
        &>div{
          position: relative;
          float: right;
          margin-top:4px;
          text-align: center;
          width:158px;
          height:28px;
          line-height:20px;
          &>div:nth-of-type(2){
            position: relative;
            float: right;
            margin-right:35px;
            height:35px;
            &>a{
              text-decoration: none;
              &>span{
                font-size:24px;
                color: #999999;
              }
            }
            &:hover{
              .smallcar{
                display: block;
              }
            }
          }
          &>div:nth-of-type(1){
            position: relative;
            float: left;
            margin-left:45px;
            height:30px;
            &>span{
              font-size:25px;
            }
            &:hover{
              .user{
                display: block;
              }
            }
            .user{
              position: absolute;
              left:-60px;
              top:40px;
              z-index: 1;
              padding-top:20px;
              width:170px;
              background: white;
              border-radius: 8px;
              display: none;
              box-shadow: 0 20px 40px rgba(0,0,0,.15);
              &>div{
                font-size:12px;
              }
              &>ul{
                &>li{
                  line-height:44px;
                  font-size:12px;
                  color: #616161;
                  border-bottom:1px solid #EFEFEF;
                }
                &>li:last-child{
                  border-bottom:none;
                }
              }
              &>p{
                position: absolute;
                left:63px;
                top:-8px;
                width: 0;
                height: 0;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-bottom: 8px solid white;
              }
            }

          }
          &>p{
            position: absolute;
            right: 10px;
            top:0;
            width:21px;
            height:21px;
            color: white;
            line-height:23px;
            text-align: center;
            border-radius: 50%;
            font-size:14px;
          }
        }
      }
     }
    .nav{
      padding:31px 64.5px;
      width:1349px;
      height:90px;
      box-sizing: border-box;
      font-size:14px;
      color: #666666;
      &>li:not(:first-child):before{
        content: ' ';
        position: absolute;
        left: 0;
        top: 13px;
        width: 2px;
        height: 2px;
        background: #bdbdbd;
      }
      &>li{
        position: relative;
        float: left;
        padding:0 20px;
        line-height:28px;
        &:hover{
          color: #5683EA;
        }
      }
      .navactive{
        font-weight:600;
      }
    }
    .fixed{
      position: fixed;
      top:0;
      width: 1349px;
      background: #F8F8F8;
      &>ul{
        float: left;
        @extend .nav;
        width:900px;
      }
      &>div{
        position: relative;
        float: right;
        margin-top:31px;
        margin-right:64.5px;
        text-align: center;
        width:158px;
        height:28px;
        line-height:20px;
        &>div:nth-of-type(2){
          position: relative;
          float: right;
          margin-right:35px;
          height:35px;
          &>span{
            font-size:24px;
            color: #999999;
          }
          &:hover{
            .car{
              display: block;
            }
          }
          .car{
            position: absolute;
            right:-30px;
            top:40px;
            z-index: 5;
            width:360px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 20px 40px rgba(0,0,0,.15);
            display: none;
            .car_list{
              padding:20px;
              box-sizing: border-box;
              width:360px;
              height: 120px;
              border-bottom:1px solid #EFEFEF;
              &>div{
                float: left;
              }
              &>div:first-child{
                width:80px;
                height:80px;
                outline:1px solid #EFEFEF;
              }
              &>div:nth-of-type(2){
                margin-left:15px;
                width:205px;
                height:80px;
                font-size:14px;
                text-align: left;
                &>h4{
                  overflow: hidden;
                  height:16px;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  color: #000;
                }
                &>p{
                  line-height:40px;
                }
                &>h6{
                  &>span{
                    font-size:14px;
                    color: #E7635A;
                  }
                }
              }
              &:hover{
                &>div:nth-of-type(3){
                  display: block;
                }
              }
              &>div:last-child{
                margin-top:30px;
                display: none;
                &>button{
                  width:20px;
                  height:20px;
                  border:1px solid #999999;
                  border-radius: 50%;
                  outline: none;
                  background: #E6E6E6;
                }
              }
            }
            .car_money{
              padding:20px;
              box-sizing: border-box;
              width:360px;
              height:81px;
              &>div:first-child{
                float: left;
                &>h6{
                  margin-bottom:5px;
                }
                &>h4{
                  font-size:18px;
                  color: #E7655C;
                  &>span{
                    color: #333;
                    font-size:15px;
                  }
                }
              }
              &>div:last-child{
                float: right;
                &>button{
                  width:108px;
                  height:40px;
                  border:none;
                  background: #5079e1;
                  color: white;
                  border-radius: 5px;
                }
              }
            }
            &>p{
              position: absolute;
              right:30px;
              top:-8px;
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 8px solid white;
            }
          }
        }
        &>div:nth-of-type(1){
          position: relative;
          float: left;
          margin-left:45px;
          height:30px;
          &>span{
            font-size:25px;
            color: #999999;
          }
          &:hover{
            .user{
              display: block;
            }
          }
          .user{
            position: absolute;
            left:-60px;
            top:40px;
            z-index: 5;
            padding-top:20px;
            width:170px;
            background: white;
            border-radius: 8px;
            display: none;
            box-shadow: 0 20px 40px rgba(0,0,0,.15);
            &>div{
              font-size:12px;
            }
            &>ul{
              &>li{
                line-height:44px;
                font-size:12px;
                color: #616161;
                border-bottom:1px solid #EFEFEF;
              }
              &>li:last-child{
                border-bottom:none;
              }
            }
            &>p{
              position: absolute;
              left:63px;
              top:-8px;
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 8px solid white;
            }
          }

        }
        &>p{
          position: absolute;
          right: 10px;
          top:0px;
          width:21px;
          height:21px;
          background: #E7635A;
          color: white;
          line-height:23px;
          text-align: center;
          border-radius: 50%;
          font-size:14px;
        }
      }
    }
  }
  footer{
    margin-top:20px;
    width:100%;
    background: white;
    &>div{
      margin:auto;
      width:1220px;
      .footer_about{
        padding:100px 0 32px 0;
        overflow: hidden;
        border-bottom:1px solid #DDDDDD;
        .about{
          float: left;
          &>li{
            float: left;
            width:149px;
            &>ul{
              margin-top:14px;
              &>li{
                line-height:24px;
                font-size:12px;
                color: #999999;
              }
            }
          }
        }
        .call{
          float: right;
          &>li{
            text-align: right;
          }
          &>li:first-child{
            font-size:30px;
            font-weight:500;
          }
          &>li:nth-of-type(2){
            font-size:12px;
            color: #999999;
            line-height:25px;
          }
          &>li:last-child{
            &>button{
              width:130px;
              height:34px;
              color: #5079D9;
              border:1px solid #d3d3d3;
              border-radius: 3px;
              background: white;
            }
          }
        }
      }
      .footer_copy{
        padding:40px 0;
        font-size:13px;
        &>div{
          overflow: hidden;
          &>span{
            float: left;
          }
          &>ul{
            float: left;
            &>li{
              float: left;
            }
            &>li:before{
              content: '|';
              margin:0 8px;
              color: #999999;
            }
          }
        }
        &>span{
          color: #999999;
          line-height:25px;

        }
      }
    }
  }
  main{
    overflow: hidden;
  }
</style>
