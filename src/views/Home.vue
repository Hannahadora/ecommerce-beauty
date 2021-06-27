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
            <div v-for="product in products.slice(10, 13)" :key="product.id">
              <img class="productTab" :src="product.image_link" alt=""> {{ product.name }}
            </div>
          </div>
        </div>

      </div>

      <div class="flex-section">
        <div class="w-1/3 flex items-end">
          <img src="https://images.pexels.com/photos/4672616/pexels-photo-4672616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
          <img class="-ml-48 -mb-20 w-72 h-72" src="https://images.pexels.com/photos/4672654/pexels-photo-4672654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
        </div>
        <div class="w-1/2">
          <h1>Feel The Rich Cosmetic Experience!</h1>
          <p>A simplified ritual of powerful oxidant and naturally uplifting Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem optio illum magnam repudiandae vitae, hic animi nostrum officia voluptates eveniet natus quibusdam vero, veniam voluptas maxime maiores architecto error! <br/>
          <br/> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quibusdam deleniti magni excepturi animi dicta porro culpa commodi quo ad.</p>
          <button class="px-5 py-1 rounded border border-gray-700 hover:bg-gray-500 hover:text-white hover:border-0">Shop Now</button>
        </div>
      </div>


      <div class="wedge">
        <div class="productsCat">
          <div class="row-section">
            <div>   
              <h1>New Products</h1>
              <p>Browse the collection of our new products.</p>
            </div>
            <div class="row-section">
              <i class="fas fa-arrow-left"></i>
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-10">
            <div v-for="product in products.slice(20, 22)" :key="product.id">
              <img class="productTab" :src="product.image_link" alt=""> 
              <p>{{ product.name }}</p>
              <p>{{ product.price_sign }}{{ product.price }}</p>
              <div>
                <i class="fas fa-star text-red-300"></i>
                <i class="fas fa-star text-red-300"></i>
                <i class="fas fa-star text-red-300"></i>
                <i class="fas fa-star text-red-300"></i>
                <i class="fas fa-star text-red-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="" style="height:500px; background-image: url('https://images.pexels.com/photos/3020129/pexels-photo-3020129.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');">

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
   
  },

  methods: {
   
  }
}
</script>

