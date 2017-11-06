<template>
  <div class="account">
    <div class="address">
      <div class="addressTit"><span>收货信息</span></div>
      <div class="addressCon">
        <div v-for="addmore in addData">
          <h4>{{addmore.name}} (默认地址)<span>√</span></h4>
          <p>{{addmore.mobile}}</p>
          <span>{{addmore.province}}{{addmore.city}}{{addmore.county}}{{addmore.detadd}}</span>
        </div>
        <div class="add" @click="changeAdd">
          <h2>+</h2>
          <p>使用新地址</p>
        </div>
      </div>
    </div>
    <div class="bill">
      <div class="billTit"><span>发票信息</span></div>
      <div class="billCon">
        <p>发票类型 : 电子发票<span>i</span></p>
        <p>发票抬头 : <input type="radio">个人  <input type="radio">单位</p>
        <p>发票内容 : 购买商品明细</p>
        <h6>* 电子发票是税务局认可的有效收付款凭证，可作为售后服务凭据。电子发票打印后可以用于企业报销。</h6>
      </div>
    </div>
    <div class="car">
      <div class="car_tit">
        <span>购物清单</span>
      </div>
      <div class="car_mes">
        <span>商品名称</span>
        <span>小计</span>
        <span>数量</span>
        <span>单价</span>
      </div>
      <div class="car_list">
        <div class="goods" v-for="accgoods in goodsData">
          <div class="img">
            <img :src="accgoods.ali_image" alt="">
          </div>
          <div class="name">
            <h4>{{accgoods.title}}<span> ( {{accgoods.spec_json.show_name}} ) </span></h4>
          </div>
          <div class="price">
            <sapn>￥{{accgoods.price}}</sapn>
          </div>
          <div class="number">
            <span>{{accgoods.count}}</span>
          </div>
          <div class="allprice">
            <span>￥59.00</span>
          </div>
        </div>
      </div>
      <div class="all">
        <p>商品总计 :<span>￥{{allPrice}}</span></p>
        <p>运费 :<span>+￥15.00</span></p>
      </div>
      <div class="submit">
        <span>应付金额 : <a>￥{{allPrice}}</a></span>
        <button><router-link to="/myAddress">提交订单</router-link></button>
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
    addData () {
      return this.$store.state.saveData
    }
  },
  methods: {
    changeAdd () {
      this.$store.state.isaddShow = true
      this.$store.dispatch('getCityAction')
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .account{
    margin:auto;
    width:1220px;
    .address{
      margin-bottom:30px;
      background: white;
      border-radius: 8px;
      .addressTit{
        padding-left: 30px;
        background: #F6F6F6;
        line-height:60px;
        font-size:18px;
      }
      .addressCon{
        overflow: hidden;
        padding: 30px 20px;
        &>div{
          float: left;
          margin-right:15px;
          margin-bottom:15px;
          padding: 19px 14px 0 19px;
          box-sizing: border-box;
          width:276px;
          height:158px;
          border:1px solid #6A8FE5;
          border-radius:3px;
          &>h4{
            &>span{
              float: right;
              color: #6A8FE5;
            }
          }
          &>p{
            line-height:40px;
            font-size:14px;
          }
        }
        .add{
          text-align: center;
          border:1px solid #DDDDDD;
          &:hover{
            background: #F6F6F6;
          }
          &>h2{
            margin-top:30px;
          }
          &>p{
            color: #999999;
          }
        }
      }
    }
    .bill{
      margin-bottom:30px;
      background: white;
      border-radius: 8px;
      .billTit{
        padding-left: 30px;
        background: #F6F6F6;
        line-height:60px;
        font-size:18px;
      }
      .billCon{
        padding: 30px 20px;
        &>p{
          line-height:35px;
          font-size:14px;
        }
        &>h6{
          margin-top:10px;
          font-size:12px;
          color: #999999;
          height:40px;
          line-height:70px;
          font-weight:200;
          border-top:1px solid #DDDDDD;
        }
      }
    }
    .car{
      margin:auto;
      width:1220px;
      border-radius: 8px;
      border:1px solid #d3d3d3;
      .car_tit{
        padding-left:30px;
        line-height:60px;
        font-size:18px;
        background: #F7F7F7;
        font-weight:400;
      }
      .car_mes{
        overflow: hidden;
        padding:0 30px;
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
          text-align: right;
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
        overflow: hidden;
        background: white;
        &>.goods{
          padding:30px;
          box-sizing: border-box;
          height:140px;
          &>div{
            float: left;
          }
          .img{
            margin-right:30px;
            width:78px;
            height:78px;
            border: 1px solid #DDDDDD;
            &>img{
              width:100%;
            }
          }
          &>.name{
            margin-top:30px;
            width:300px;
            overflow: hidden;
            &>h4{
              font-size:14px;
              font-weight:400;
            }
          }
          &>.price{
            margin-top:30px;
            margin-left:335px;
            font-weight:400;
            width:137px;
            font-size:14px;
            text-align: right;
          }
          &>.number{
            margin-top:26px;
            width:137px;
            text-align: right;
            &>ul{
              &>li{
                float: left;
                font-size:14px;
              }
              &>li:first-child{
                width:28px;
                line-height:28px;
                border-radius:50%;
                border:1px solid #8d8d8d;
                text-align: center;
              }
              &>li:last-child{
                width:28px;
                line-height:28px;
                border-radius:50%;
                border:1px solid #8d8d8d;
                text-align: center;
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
            width:137px;
            font-size:14px;
            font-weight:700;
            text-align: right;
          }
        }
      }
      .all{
        padding:30px;
        overflow: hidden;
        text-align: right;
        border-top:1px solid #DDDDDD;
        border-bottom:1px solid #DDDDDD;
        background: white;
        &>p{
          font-size:14px;
          line-height:30px;
          &>span{
            display: inline-block;
            width:157px;
            height:20px;
            font-weight:700;
          }
        }
      }
      .submit{
        padding:30px;
        overflow: hidden;
        text-align: right;
        background: white;
        &>span{
          font-size:14px;
          &>a{
            font-size:24px;
            color: #D44D44;
            font-weight:700;
          }
        }
        &>button{
          margin-left:40px;
          width:146px;
          height:46px;
          background: #608ADF;
          color: white;
          border: none;
          border-radius: 5px;
        }
      }
    }
  }
</style>
