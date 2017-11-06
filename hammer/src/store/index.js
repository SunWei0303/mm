import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    goodsData: [],
    isaddShow: false,
    addCity: [],
    saveData: []
  },
  getters: {
    allPrice (state) {
      let allPrice = 0
      for (var i = 0; i < state.goodsData.length; i++) {
        allPrice += state.goodsData[i].count * state.goodsData[i].price
      }
      return allPrice
    },
    allNumber (state) {
      let allNumber = 0
      for (var i = 0; i < state.goodsData.length; i++) {
        allNumber += state.goodsData[i].count
      }
      return allNumber
    }
  },
  mutations: {
    saveData (state, saveAction) {
      this.state.saveData.push(saveAction)
    }
  },
  actions: {
    getListAction (content, skuData) {
      axios.get('http://www.easy-mock.com/mock/59f1df9dd00d13585e251066/hammer/goodsData')
        .then((response) => {
          var flag = true
          for (var i = 0; i < this.state.goodsData.length; i++) {
            if (this.state.goodsData[i].sku_id === skuData.sku_id) {
              this.state.goodsData[i].count++
              console.log(this.state.goodsData[i])
              flag = false
            }
          }
          if (flag) {
            Vue.set(skuData, 'count', 1)
            this.state.goodsData.push(skuData)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getCityAction (content) {
      axios.get('http://www.easy-mock.com/mock/59f1df9dd00d13585e251066/hammer/addressData')
        .then((response) => {
          this.state.addCity = response.data
          console.log(this.state.addCity)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})
export default store
