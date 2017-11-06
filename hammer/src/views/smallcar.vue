<template>
  <div class="smallcar">
    <div class="car_list" v-for="small in goodsData">
      <div><img :src="small.ali_image" alt=""></div>
      <div>
        <h4>{{small.title}}</h4>
        <p>{{small.spec_json.show_name}}</p>
        <h6><span>¥ {{small.price}}</span> x{{small.count}}</h6>
      </div>
      <div>
        <button>×</button>
      </div>
    </div>
    <div class="car_money">
      <div>
        <h6>共 {{allNumber}} 件商品</h6>
        <h4><span>合计: </span>¥{{allPrice}}</h4>
      </div>
      <div>
        <button>去购物车</button>
      </div>
    </div>
    <p></p>
  </div>
</template>
<script>
export default {
  computed: {
    allPrice () {
      return this.$store.getters.allPrice
    },
    allNumber () {
      return this.$store.getters.allNumber
    },
    goodsData () {
      return this.$store.state.goodsData
    }
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .smallcar{
    position: absolute;
    right:-30px;
    top:40px;
    z-index: 1;
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
        &>img{
          width: 100%;
        }
      }
      &>div:nth-of-type(2){
        margin-left:10px;
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
          width:24px;
          line-height:22px;
          border:1px solid #E9E9E9;
          border-radius: 50%;
          outline: none;
          background: #F9F9F9;
          color: #959595;
          font-weight: 900;
          font-size:18px;
          &:hover{
            background: #DDDDDD;
          }
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

</style>
