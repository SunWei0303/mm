<template>
  <div class="list">
    <ul class="order">
      <li class="orderactive">综合排序</li>
      <li>销量排序</li>
      <li>价格低到高</li>
      <li>价格高到低</li>
    </ul>
    <div class="box_content">
      <goods :goods="list" v-for="(list,index) in listData"></goods>
    </div>
    <div class="back">
      <div>
        <span class="icon iconfont icon-ren"></span>
        <p>在线客服</p>
        <h6>周一至周日 9:00-18:00</h6>
      </div>
      <div>
        <span class="icon iconfont icon-ren"></span>
        <p>在线客服</p>
        <h6>周一至周日 9:00-18:00</h6>
      </div>
      <div>
        <span class="icon iconfont icon-ren"></span>
        <p>在线客服</p>
        <h6>周一至周日 9:00-18:00</h6>
      </div>
      <div>
        <span class="icon iconfont icon-ren"></span>
        <p>在线客服</p>
        <h6>周一至周日 9:00-18:00</h6>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import goods from '../views/goods'
export default {
  components: {
    goods
  },
  data () {
    return {
      listData: [],
      keyImg: 0
    }
  },
  created () {
    axios.get('http://www.easy-mock.com/mock/59f1df9dd00d13585e251066/hammer/goodsData').then((response) => {
//      console.log(response.data)
      this.listData = response.data
    })
    .catch((err) => {
      console.log(err)
    })
  },
  methods: {
    tabImg (indexImg) {
      this.keyImg = indexImg
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
  .list{
    margin:auto;
    width:1220px;
    border-top:1px solid #DDDDDD;
    .order{
      height:60px;
      .orderactive{
        color: #5683EA;
      }
      &>li:not(:first-child):before{
        content: ' ';
        position: absolute;
        left: 0;
        top: 28px;
        width: 2px;
        height: 2px;
        background: #bdbdbd;
      }
      &>li{
        position: relative;
        float: left;
        padding:0 20px;
        line-height:60px;
        font-size:12px;
        color: #999999;
        &:hover{
          color: #5683EA;
        }
      }
    }
    .box_content{
      overflow: hidden;
      margin: auto;
      width:1218px;
      background: white;
      border-radius: 8px;
      border:1px solid #d3d3d3;
    }
    .back{
      margin-top:10px;
      height:153px;
      background: white;
      border-radius:10px;
      &>div{
        float: left;
        width:304px;
        height:153px;
        text-align: center;
        &>span{
          display: inline-block;
          margin:33px auto 5px;
          font-size:36px;
        }
        &>p{
          font-size:15px;
          line-height:25px;
          font-weight:400;
        }
        &>h6{
          font-size:12px;
          color: #999999;
          font-weight: 400;
        }
      }
    }
  }
</style>
