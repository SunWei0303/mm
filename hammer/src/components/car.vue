<template>
  <div class="car">
    <div class="car_tit">
      <span>购物清单</span>
    </div>
    <div class="car_mes">
      <span>商品信息</span>
      <span>操作</span>
      <span>小计</span>
      <span>数量</span>
      <span>单价</span>
    </div>
    <div class="car_list">
      <div class="goods" v-for="car in goodsData">
        <div class="checked">
          <span><a>√</a></span>
        </div>
        <div class="img">
          <img :src="car.ali_image" alt="">
        </div>
        <div class="name">
          <h4>{{car.title}}</h4>
          <span>{{car.spec_json.show_name}}</span>
        </div>
        <div class="price">
          <sapn>￥{{car.price}}</sapn>
        </div>
        <div class="number">
          <ul>
            <li><button>-</button></li>
            <li><input type="text" :value="car.count"></li>
            <li><button>+</button></li>
          </ul>
        </div>
        <div class="allprice">
          <span>￥{{allPrice}}</span>
        </div>
        <div class="del">
          <button>×</button>
        </div>
      </div>
      <div class="pay">
        <div class="checked">
          <span><a>√</a></span>
          <span>全选</span>
          <span> | 删除选中的商品</span>
        </div>
        <div class="paymoney">
          <div>
            <p>已选择 <sapn>1</sapn> 件商品</p>
            <p>共计 <sapn>{{allNumber}}</sapn> 件商品</p>
          </div>
          <div>
            <div>
              <p>应付总额: <span>￥{{allPrice}}</span></p>
              <span>应付总额不含运费</span>
            </div>
            <div>
              <router-link to="/account"><span>现在结算</span></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    goodsData () {
      return this.$store.state.goodsData
    },
    allPrice () {
      return this.$store.getters.allPrice
    },
    allNumber () {
      return this.$store.getters.allNumber
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .car{
    margin:auto;
    width:1220px;
    border:1px solid #d3d3d3;
    border-radius:8px;
    .car_tit{
      overflow: hidden;
      padding-left:30px;
      line-height:60px;
      font-size:18px;
      background: #F7F7F7;
      font-weight:400;
      border-radius: 8px 8px 0 0;
    }
    .car_mes{
      overflow: hidden;
      padding-left:30px;
      line-height:39px;
      font-size:12px;
      background: #EEEEEE;
      color: #999999;
      border-top:1px solid #DDDDDD;
      border-bottom:1px solid #DDDDDD;
      &>span{
        float: right;
        display: inline-block;
        width:137px;
        line-height:38px;
        text-align: center;
      }
      &>span:first-child{
        float: left;
        text-align: left;
      }
      &>span:nth-of-type(3){
        text-align: right;
      }
    }
    .car_list{
      background: white;
      border-radius: 0 0 8px 8px;
      .goods{
        padding:30px 0 30px 30px;
        box-sizing: border-box;
        height:140px;
        &>div{
          float: left;
        }
        .checked{
          margin-top:30px;
          &>span{
            display: inline-block;
            width:20px;
            line-height:20px;
            color: white;
            background: #799EEF;
            border-radius: 50%;
            text-align: center;
            &>a{
              font-size:14px;
            }
          }
        }
        .img{
          margin-left:20px;
          margin-right:15px;
          width:78px;
          height:78px;
          border: 1px solid #DDDDDD;
          &>img{
            width:100%;
          }
        }
        .name{
          margin-top:20px;
          width:264px;
          &>h4{
            font-size:16px;
            font-weight:400;
          }
          &>span{
            font-size:12px;
            color: #999999;
          }
        }
        .price{
          margin-top:30px;
          margin-left:240px;
          width:137px;
          font-size:14px;
          text-align: center;
        }
        .number{
          margin-top:26px;
          margin-left:15px;
          width:137px;
          text-align: center;
          &>ul{
            &>li{
              float: left;
              font-size:14px;
            }
            &>li:first-child{
              &>button{
                width:24px;
                line-height:22px;
                border:1px solid #E9E9E9;
                border-radius: 50%;
                outline: none;
                background: #F9F9F9;
                font-weight:900;
                font-size:18px;
                color: #959595;
                &:hover{
                  background: #DDDDDD;
                }
              }
            }
            &>li:last-child{
              &>button{
                width:24px;
                line-height:22px;
                border:1px solid #E9E9E9;
                border-radius: 50%;
                outline: none;
                background: #F9F9F9;
                font-weight:900;
                font-size:18px;
                color: #959595;
                box-shadow: 1px 1px 3px 4px #EFEFEF;
                &:hover{
                  background: #DDDDDD;
                }
              }
            }
            &>li:nth-of-type(2){
              &>input{
                width:56px;
                border:none;
                text-align: center;
                line-height:28px;
              }
            }
          }
        }
        .allprice{
          margin-top:30px;
          width:127px;
          font-size:14px;
          font-weight:700;
          text-align: right;
        }
        .del{
          margin-top:30px;
          width:135px;
          text-align: center;
          &>button{
            width:24px;
            line-height:22px;
            border:1px solid #E9E9E9;
            border-radius: 50%;
            outline: none;
            background: #F9F9F9;
            font-weight:900;
            font-size:18px;
            color: #959595;
            &:hover{
              background: #DDDDDD;
            }
          }
        }
      }
      .pay{
        overflow: hidden;
        border-top:1px solid #DDDDDD;
        .checked{
          float: left;
          margin-top:30px;
          margin-left:30px;
          &>span{
            font-size:12px;
          }
          &>span:first-child{
            display: inline-block;
            width:20px;
            line-height:20px;
            color: white;
            background: #799EEF;
            border-radius: 50%;
            text-align: center;
            &>a{
              font-size:14px;
            }
          }
          &>span:last-child{
            color: #999999;
          }
        }
        .paymoney{
          float: right;
          padding:20px 30px;
          &>div:first-child{
            float: left;
            margin-right:20px;
            padding:0 20px;
            box-sizing: border-box;
            width:160px;
            text-align: right;
            border-right:1px solid #DDDDDD;
            &>p:first-child{
              font-size:14px;
              &>span{
                color: #D44D44;
                font-weight:600;
              }
            }
            &>p:last-child{
              font-size:14px;
              color: #999999;
              line-height:25px;
              &>span{
                font-weight:600;
              }
            }

          }
          &>div:last-child{
            float: left;
            &>div{
              float: left;
            }
            &>div:first-child{
              font-size:14px;
              &>p{
                &>span{
                  font-size:16px;
                  font-weight:600;
                  color: #D44D44;
                }
              }
              &>span{
                line-height:25px;
                color: #999999;
              }
            }
            &>div:last-child{
              margin-left:10px;
              width:128px;
              line-height:48px;
              border-radius:6px;
              background: #5F86F1;
              text-align: center;
              &>a{
                text-decoration: none;
                color: white;
              }
            }
          }
        }
      }
    }
  }
</style>
