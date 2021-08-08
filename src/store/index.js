import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],

    customers : [
      {id: '1', name: 'Anna Adora', occupation: 'Software Engineer', image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', review: 'This is truly what i love. Tempore animi et nam, eveniet itaque architecto quibusdam nulla tempora similique repellendus cum repudiandae delectus ipsam, officia maiores voluptatibus ad sint nobis optio, rerum distinctio quod ex.'},
      {id: '2', name: 'Emmy Yong',  occupation: 'Software Designer', image: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', review: 'Regardless of the fact that, Tempore animi et nam, eveniet itaque architecto quibudam nulla tempora similique repellendus cum repudiandae delectus ipsam, officia maiores voluptatibus ad sint nobis optio, rerum distinctio quod ex.'},
      {id: '3', name: 'Dimkpa Grace', occupation: 'Product Designer', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', review: 'It is not just that i am Tempore animi et nam, eveniet itaque architecto quibusdam nulla tempora similique repellendus cum repudiandae delectus ipsam, officia maiores voluptatibus ad sint nobis optio, rerum distinctio quod ex.'},
      {id: '4', name: 'Purity Harry', occupation: 'Graphics Designer', image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', review: 'Considering the fact thet Tempore animi et nam, eveniet itaque architecto quibusdam nulla tempora similique repellendus cum repudiandae delectus ipsam, officia maiores voluptatibus ad sint nobis optio, rerum distinctio quod ex.'},
      {id: '5', name: 'Eve Lyn', occupation: 'Product Manager', image: 'https://images.pexels.com/photos/8365068/pexels-photo-8365068.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', review: 'I am a product of good and Tempore animi et nam, eveniet itaque architecto quibusdam nulla tempora similique repellendus cum repudiandae delectus ipsam, officia maiores voluptatibus ad sint nobis optio, rerum distinctio quod ex.'},
    ],
    
    selectedId: '',

    cart: [],
  },

  getters: {
    products: (state) => state.products,
    customers: (state) => state.customers,
    selectedProduct: state => {
      return state.products.find(product => product.id == state.selectedId );
    },
    similarProducts: (state, getters) => {
      return state.products.filter(product => product.product_type == getters.selectedProduct.product_type)  
    },

    // *************CART GETTERS***********

    cartItems: state => state.cart
  },

  mutations: {
    SET_PRODUCTS (state, products) {
      state.products = products
    }, 
    SET_CART (state) {
      if (!state.cart) {
        state.cart = localStorage.setItem('cart', JSON.stringify(state.cart))
      } else {
        state.cart = JSON.parse(localStorage.getItem('cart'))
      }
    },
    pushItem (state, getters) {
      state.cart.push(selectedProduct)
    }
  },

  actions: {
    getProducts ({ commit }) {
      axios.get('https://makeup-api.herokuapp.com/api/v1/products.json')
      .then(response => {
        commit('SET_PRODUCTS', response.data)
          console.log(response.data)
      })
      .catch(error => console.log(error))
    },

    addItem ({ commit, state }, selectedProduct) {
      commit('SET_CART', selectedProduct);
    },
    
  },

  modules: {}
})
