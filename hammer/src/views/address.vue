<template>
  <div class="alert">
    <div class="addadd">
      <div class="addTit">
        <p>管理收货地址</p>
        <span @click="turnOff">×</span>
      </div>
      <div class="addCon">
        <div class="addWrite">
          <div>
            <input type="text" placeholder="收货人姓名" v-model="name">
          </div>
          <div>
            <input type="text" placeholder="手机号" v-model="mobile">
          </div>
          <div class="addNumber">
            <div>
              <input type="text" placeholder="区号 ( 可选 )" v-model="area">
            </div>
            <div>
              <input type="text" placeholder="固定电话 ( 可选 )" v-model="telephone">
            </div>
          </div>
          <div>
            <select v-model="province" @click="checkProvince">
              <option selected>请选择省份</option>
              <option :value="province.area_name" v-for="province in addCity" >{{province.area_name}}</option>
            </select>
          </div>
          <div class="addCity">
            <div>
              <select v-model="city" @click="checkCity">
                <option selected>请选择城市</option>
                <option :value="city.area_name" v-for="city in gangCity">{{city.area_name}}</option>
              </select>
            </div>
            <div>
              <select v-model="county">
                <option selected>请选择区县</option>
                <option :value="county.area_name" v-for="county in gangCounty">{{county.area_name}}</option>
              </select>
            </div>
          </div>
          <div>
            <input type="text" placeholder="详细地址,如街道名称,楼层,门牌号等" v-model="detadd">
          </div>
        </div>
        <div class="setSave">
          <input type="radio"> 设为默认
          <div>
            <input type="button" value="保存" @click="saveAdd()">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      mobile: '',
      telephone: '',
      area: '',
      province: '请选择省份',
      city: '请选择城市',
      county: '请选择区县',
      detadd: '',
      gangCity: [],
      gangCounty: []
    }
  },
  computed: {
    addCity () {
      return this.$store.state.addCity
    }
  },
  methods: {
    turnOff () {
      this.$store.state.isaddShow = false
    },
    saveAdd () {
      this.$store.commit('saveData', {
        name: this.name,
        mobile: this.mobile,
        telephone: this.telephone,
        area: this.area,
        province: this.province,
        city: this.city,
        county: this.county,
        detadd: this.detadd
      })
      this.$store.state.isaddShow = false
    },
    checkProvince () {
//      console.log(this.province)
      this.addCity.forEach((res, index, array) => {
//        console.log(res.area_name)
        if (this.province === res.area_name) {
          this.gangCity = res.city_list
//          console.log(this.gangCity)
        }
      })
    },
    checkCity () {
      this.gangCity.forEach((res, index, array) => {
        if (this.city === res.area_name) {
          this.gangCounty = res.county_list
          console.log(this.gangCounty)
        }
      })
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .alert{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 1349px;
    height: 100%;
    background: rgba(0,0,0,0.5);
    .addadd{
      margin:5px auto;
      width: 450px;
      background: white;
      border-radius: 8px;
      .addTit{
        position: relative;
        padding:0 10px;
        width:430px;
        height:60px;
        line-height:60px;
        text-align: center;
        background: #FAFAFA;
        font-size:18px;
        border-bottom:1px solid #DDDDDD;
        border-radius: 8px 8px 0 0;
        &>span{
          position: absolute;
          right:10px;
          top:0;
          font-weight: 800;
          font-size: 30px;
          color: #CBCBCB;
          cursor: pointer;
          &:hover{
            color: #999999;
          }
        }
      }
      .addCon{
        padding: 20px 0 40px 0;
        .addWrite{
          &>div{
            padding:12px 15px;
            box-sizing: border-box;
            margin:15px auto;
            width:368px;
            height:48px;
            border:1px solid #DDDDDD;
            border-radius:6px;
            &>input{
              width:100%;
              height:24px;
              border:none;
              font-size:16px;
            }
            &>select{
              width:100%;
              height:24px;
              border:none;
              font-size:16px;
              color: #757575;
            }
          }
          .addNumber{
            padding:0;
            border: none;
            &>div{
              padding:12px 15px;
              box-sizing: border-box;
              &>input{
                width:100%;
                border:none;
                font-size:16px;
              }
            }
            &>div:first-child{
              float: left;
              width:120px;
              height:48px;
              border:1px solid #DDDDDD;
              border-radius:6px;
            }
            &>div:last-child{
              float: right;
              width:236px;
              height:48px;
              border:1px solid #DDDDDD;
              border-radius:6px;
            }
          }
          .addCity{
            padding:0;
            border: none;
            &>div{
              padding:12px 15px;
              box-sizing: border-box;
              &>select{
                width:100%;
                border:none;
                font-size: 16px;
                color: #757575;
              }
            }
            &>div:first-child{
              float: left;
              width:178px;
              height:48px;
              border:1px solid #DDDDDD;
              border-radius:6px;
            }
            &>div:last-child{
              float: right;
              width:178px;
              height:48px;
              border:1px solid #DDDDDD;
              border-radius:6px;
            }
          }
        }
        .setSave{
          margin:auto;
          width:370px;
          &>div{
            margin-top:10px;
            &>input{
              margin-top:10px;
              width:100%;
              height:48px;
              background: #C2D2F3;
              color: white;
              border: none;
              border-radius:6px;
              font-size:16px;
            }
          }
        }
      }

    }
  }
</style>
