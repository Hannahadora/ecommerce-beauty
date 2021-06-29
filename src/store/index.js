import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },

  getters: {
    products: (state) => state.products
  },

  mutations: {
    SET_PRODUCTS (state, products) {
      state.products = products
    }
  },

  actions: {
    getProducts ({ commit }) {
      axios.get('http://makeup-api.herokuapp.com/api/v1/products.json')
      .then(response => {
        commit('SET_PRODUCTS', response.data)
          console.log(response.data)
      })
      .catch(error => console.log(error))
    }
  },

  modules: {}
})
