<template>
  <div class="details">
    <div class="detaLeft">
      <ul class="small">
        <li v-for="(images,smallKey) in witch.ali_images" :class="{smallactive: smallKey === k}" @click="smallChecked(smallKey)">
          <img :src="images" alt="">
        </li>
      </ul>
      <div class="big">
        <img :src="witch.ali_image" alt="">
      </div>
    </div>
    <div class="detaRight">
      <div>
        <h4>Smartisan 原装快充充电器 18W</h4>
        <h6>18W 安全快充、支持主流 QC3.0, MTK PE+2.0 快充协议</h6>
        <span><a>￥</a>59.00</span>
      </div>
      <div>
        <div>
          <span>颜色</span>
          <ul>
            <li v-for="(color,index) in witch.sku_list" :class="{colorActive: index === n}" @click="colorChecked(index)">
              <img :src="'http://img01.smartisanos.cn/' + color.image + '20X20.jpg'" alt="">
            </li>
          </ul>
        </div>
        <div>
          <span>数量</span>
          <ul>
            <li><button>-</button></li>
            <li><input type="text" value="1"></li>
            <li><button>+</button></li>
          </ul>
        </div>
      </div>
      <div>
        <button>加入购物车</button>
        <button>现在购买</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      detailData: [],
      n: 0,
      k: 0,
      imgIndex: 0,
      witch: []
    }
  },
  created () {
    this.res()
  },
  methods: {
    res () {
      axios.get('http://www.easy-mock.com/mock/59f1df9dd00d13585e251066/hammer/detailData')
        .then((response) => {
          response.data.forEach((res, index, array) => {
//          console.log(res)
            if (res.sku_id === this.$route.query.sku_id) {
              this.witch = res
              return false
            }
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    colorChecked (index) {
      this.n = index
      this.$router.push({path: '/details', query: {sku_id: this.witch.sku_list[index].id}})
      this.res()
    },
    smallChecked (smallKey) {
      this.k = smallKey
      this.witch.ali_image = this.witch.ali_images[smallKey]
    }
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .details{
    overflow: hidden;
    padding:60px;
    box-sizing: border-box;
    margin:auto;
    width:1220px;
    background: white;
    border-radius: 8px;
    border:1px solid #d3d3d3;
    .detaLeft{
      float: left;
      width:648px;
      height:440px;
      .smallactive{
        padding: 8px!important;
        border:3px solid #CCCCCC!important;
      }
      .small{
        float: left;
        &>li:first-child{
          margin-top:0;
        }
        &>li{
          margin-top:10px;
          padding:10px;
          box-sizing: border-box;
          width:78px;
          height:78px;
          border:1px solid #F0F0F0;
          border-radius: 5px;

          &>img{
            width: 100%;

          }
        }
      }
      .big{
        float: right;
        width:440px;
        height:440px;
        &>img{
          width:100%;
        }
      }
    }
    .detaRight{
      float: left;
      width:450px;
      height:440px;
      &>div:first-child{
        overflow: hidden;
        padding:30px 0 10px 10px;
        margin-top:40px;
        &>h4{
          margin-bottom:10px;
          font-size:22px;
          font-weight:200;
        }
        &>h6{
          float: left;
          font-size:14px;
          color: #999999;
          font-weight: 200;
        }
        &>span{
          float: right;
          font-size:24px;
          color: #D44D44;
          font-weight:700;
          &>a{
            font-size:16px;
          }
        }
      }
      &>div:last-child{
        padding: 29px 0 8px 10px;
        &>button{
          width:145px;
          height:50px;
          border-radius: 5px;
          border:none;
        }
        &>button:first-child{
          color: white;
          background: #658AE4;
        }
        &>button:last-child{
          margin-left:10px;
          color: #999999;
          background: white;
          border:1px solid #DDDDDD;
        }
      }
      &>div:nth-of-type(2){
        padding: 29px 0 29px 10px;
        border-top:1px solid #DDDDDD;
        border-bottom:1px solid #DDDDDD;
        &>div{
          overflow: hidden;
          &>span{
            float: left;
            color: #8d8d8d;
          }
          &>ul{
            float: left;
            margin-left:15px;
            &>li{
              float: left;
            }
          }
        }
        &>div:first-child{
          &>span{
            line-height:36px;
          }
          &>ul{
            .colorActive{
              padding:1px;
              border-radius: 50%;
              border:4px solid #DDDDDD;
            }
            &>li{
              margin-right:10px;
              padding:3px;
              width:26px;
              height:26px;
              border-radius: 50%;
              border:2px solid #DDDDDD;
              &>img{
                width: 26px;
                height: 26px;
                border-radius: 50%;
              }
            }
          }
        }
        &>div:last-child{
          margin-top:30px;
          line-height:36px;
          &>ul{
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
              }
            }
          }
        }
      }
    }
  }
</style>
