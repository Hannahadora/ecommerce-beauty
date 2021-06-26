<template>
  <div class="home">
      <Header />

      <div class="border" style="heigth:400px;">
         <div class="flex items-center justify-between">
           <div  class="ml-24 w-1/3 text-center font-serif text-gray-500">
             <h1 class="font-medium text-5xl">
               Beauty without Measure
             </h1>
             <p class="text-gray-500 my-10 text-2xl">
               All shades of beautiful...
             </p>
             <button class="px-5 py-1 rounded border border-gray-700 hover:bg-gray-500 hover:text-white hover:border-0">Shop Now</button>
           </div>
           <img class="" src="" alt="" >
         </div>
      </div>

      <div class="wedge">
        <div class="my-20 flex items-center justify-between">
          <div class="mini-shadowbox">
          <i class="fas fa-truck text-3xl"></i>
          <p>Free & Fast Delivery</p>
          <p>On all order over $100.00</p>
        </div>
        <div class="mini-shadowbox">
          <i class="fas fa-undo text-3xl"></i>
          <p>Free Exchanges</p>
          <p>Incase of Issues</p>
        </div>
        <div class="mini-shadowbox">
          <i class="fas fa-certificate text-3xl"></i>
          <p>Source Payment</p>
          <p>Source Payment</p>
        </div>
        <div class="mini-shadowbox">
          <i class="fas fa-headset text-3xl"></i>
          <p>24/7 Extensive</p>
          <p>Customer Support</p>
        </div>
      </div>

      <div class="productsCat">
        <h1>Product Category</h1>
        <p>Browse the collection of our new products.</p>
        <div class="flex items-center gap-10">
          <div class="productTab" v-for="product in fewProducts" :key="product.id">
          <img :src="product.image_link" alt=""> {{ product.name }}
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  },

  data () {
    return {
      products: [],
    }
  }, 

  beforeMount() {
    axios
      .get('http://makeup-api.herokuapp.com/api/v1/products.json')
      .then(response => {
          this.products = response.data
          console.log(this.products)
      })
      .catch(error => console.log(error))
  },

  computed: {
    fewProducts () {
      this.products.slice(1, 3)
      return goat console.log(goat)
    }
  },

  methods: {
   
  }
}
</script>

