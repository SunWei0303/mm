<template>
  <div class="goods">
    <div>
      <img :src="goods.sku_info[keyImg].ali_image" alt="">
    </div>
    <h3>{{goods.name}}</h3>
    <h6>{{goods.name_title}}</h6>
    <ul class="cir">
      <li v-for="(listCir,indexImg) in goods.sku_info" @click="tabImg(indexImg)">
        <img :src="'http://img01.smartisanos.cn/' + listCir.spec_json.image + '20X20.jpg'" alt="">
      </li>
    </ul>
    <h4>￥<span>{{goods.price}}</span></h4>
    <div class="content_btn">
      <router-link :to="{path: '/details', query: {'sku_id': goods.sku_info[saveDataIndex].sku_id}}">
        <input type="button" value="查看详情">
      </router-link>
      <input type="button" value="加入购物车" @click="addCar(goods.sku_info[saveDataIndex])">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goods: {
      type: Object
    }
  },
  data () {
    return {
      keyImg: 0,
      saveDataIndex: 0
    }
  },
  methods: {
    tabImg (indexImg) {
      this.keyImg = indexImg
      this.saveDataIndex = indexImg
    },
    addCar (skuData) {
      this.$store.dispatch('getListAction', skuData)
    }
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .goods{
    position: relative;
    padding-top:50px ;
    box-sizing: border-box;
    float: left;
    width:305px;
    height:429px;
    outline:1px solid #d3d3d3;
    text-align: center;
    &>div:nth-of-type(1){
      img{
        width: 215px;
      }
    }
    &>h3{
      font-size:16px;
      font-weight:400;
    }
    &>h6{
      font-size: 12px;
      color: #999999;
      margin:8px auto 14px;
      font-weight:200;
    }
    .cir{
      margin-top:23px;
      margin-bottom:28px;
      text-align: center;
      &>li:first-child{
        margin-left:0;
      }
      &>li{
        display: inline-block;
        margin-left:15px;
        width:14px;
        height:14px;
        line-height: 10px;
        border: 1px solid #DDDDDD;
        border-radius: 50%;
        &:hover{
          box-shadow: 0px 0px 10px -2px inset;
        }
        &>img{
          width:8px;
          height:8px;
          border-radius: 50%;
        }
      }
    }
    &>h4{
      font-weight:700;
      color: #D44D44;
    }
    &:hover{
      box-shadow: 0 0 38px rgba(0,0,0,.08) inset;
      .content_btn{
        display: block;
      }
    }
    .content_btn{
      position: absolute;
      left:1px;
      right:0;
      bottom:20px;
      width:303px;
      background: white;
      display: none;
      &>a{
        &>input{
          width:100px;
          height:30px;
          border-radius:5px;
          font-size:12px;
        }

      }
      &>a:first-child{
        &>input{
          border:1px solid #DDDDDD;
          background: white;
          color: #999999;
        }
      }
      &>input{
        margin-left:5px;
        width:100px;
        height:30px;
        border-radius:5px;
        font-size:12px;
        background: #5c85e5;
        color: white;
        border:none;
      }
    }
  }
</style>
