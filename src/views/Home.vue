<template>
  <div class="home">
      <Header />

      <div class="home-cover" style="">
        <div class="cover-text">
          <h2 class="font-bold">Discover your Real beauty in Nature</h2>
          <p class="my-5">
            We all have skincare concerns. It's not always 'simple' makes it easy with an minute expert targeting.
          </p>
           <ShopButton />
        </div>
        <img src="../assets/images/homehero.png" class="" alt="">
      </div>

      <div class="wedge">
        <div class="mb-20 mt-10 flex items-center justify-between">
          <div class="mini-shadowbox">
            <i class="fas fa-truck text-2xl"></i>
            <h4>Free & Fast Delivery</h4>
            <p class="">On all order over $100.00</p>
          </div>
          <div class="mini-shadowbox">
            <i class="fas fa-undo text-2xl"></i>
            <h4>Free Exchanges</h4>
            <p class="">Incase of Issues</p>
          </div>
          <div class="mini-shadowbox">
            <i class="fas fa-certificate text-2xl"></i>
            <h4>Source Payment</h4>
            <p class="">Source Payment</p>
          </div>
          <div class="mini-shadowbox">
            <i class="fas fa-headset text-2xl"></i>
            <h4>24/7 Extensive</h4>
            <p class="">Customer Support</p>
          </div>
        </div>

        <div class="productsCat">
          <h2>Product Category</h2>
          <h5>Browse the collection of our new products.</h5>
          <div class="flex items-center">
            <div class="product-group" v-for="product in products.slice(71,74)" :key="product.id">
              <router-link :to="{ name: 'ProductDetails', params: { id: product.id, name: product.name}}">
                <img class="product-img" :src="product.image_link" alt="">
                <span class="product-name">{{ product.name }}</span>
              </router-link>
            </div>
          </div>
        </div>

      </div>

      <div class="flex-section">
        <div class="w-1/3 flex items-end">
          <img class="" style="height:400px; width:500px" src="https://images.pexels.com/photos/4672616/pexels-photo-4672616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
          <!-- <img class="-ml-48 -mb-20 w-72 h-72" src="https://images.pexels.com/photos/4672654/pexels-photo-4672654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""> -->
        </div>
        <div class="w-1/2">
          <h3>Feel The Rich Cosmetic Experience!</h3>
          <p class="text-sm">A simplified ritual of powerful oxidant and naturally uplifting Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem optio illum magnam repudiandae vitae, hic animi nostrum officia voluptates eveniet natus quibusdam vero, veniam voluptas maxime maiores architecto error! <br>
          <br> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quibusdam deleniti magni excepturi animi dicta porro culpa commodi quo ad.</p>
           <ShopButton class="mt-5" />
        </div>
      </div>


      <div class="wedge">
        <div class="productsCat">
          <div class="row-section">
            <div>   
              <h2>New Products</h2>
              <h5>Browse the collection of our new products.</h5>
            </div>
             <MoreButton />
          </div>
          <div class="grid grid-cols-3">
            <div class="product-group" v-for="product in products.slice(64,67)" :key="product.id">
              <router-link :to="{ name: 'ProductDetails', params: { id: product.id, name: product.name}}">
                <img class="product-img" :src="product.image_link" alt="">
                <span class="product-name">{{ product.name }}</span>
                <p class="product-price">{{ product.price_sign }}{{ product.price }}</p>
                <Ratings />
              </router-link>
            </div>
          </div>
        </div>
      </div>


      <div class="my-20 py-20 bg-no-repeat bg-cover bg-center" style="height:400px; background-image: url('https://images.pexels.com/photos/3020129/pexels-photo-3020129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');">
          <div class="mx-auto w-8/12 py-5 px-40 bg-white bg-opacity-70">
              <div class="text-center">   
                <h3>GET THE BEST IN</h3>
                <h2>Get 70% Off In This Summer</h2>
                <ShopButton class="mt-5" />
            </div>
          </div>
      </div>


      <div class="wedge">
        <div class="productsCat">
          <div class="row-section">
            <div>   
              <h2>Latest Collections</h2>
              <h5>Browse the collection of our new products.</h5>
            </div>
            <MoreButton />
          </div>
          <div class="grid grid-cols-3">
             <div class="product-group" v-for="product in products.slice(50,56)" :key="product.id">
                <router-link :to="{ name: 'ProductDetails', params: { id: product.id, name: product.name}}">
                  <img class="product-img" :src="product.image_link" alt="">
                  <span class="product-name">{{ product.name }}</span>
                  <p class="product-price">{{ product.price_sign }}{{ product.price }}</p>
                  <Ratings />
                </router-link>
            </div>
          </div>
         
        </div>
      </div>

      <Reviews />

      <div class="wedge">
        <div class="home-blog">
          <div class="row-section">
            <div>
              <h3 class="my-7">Blog Update</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, illo.</p>
            </div>
              <MoreButton />
          </div>
          <div class="my-10 grid grid-cols-3 gap-10">
            <div class="flex flex-col gap-3">
              <img src="https://images.pexels.com/photos/2564890/pexels-photo-2564890.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
              <p class="text-xs not-italic">Denolla Witesyn-00/00/00</p>
              <p>The adipisicing elit. Rem possimus inventore quod? Non, minus consectetur?</p>
            </div>
            <div class="flex flex-col gap-3">
              <img src="https://images.pexels.com/photos/4672666/pexels-photo-4672666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
              <p class="text-xs not-italic">Denolla Witesyn-00/00/00</p>
              <p>The adipisicing elit. Rem possimus inventore quod? Non, minus consectetur?</p>
            </div>
            <div class="flex flex-col gap-3">
              <img src="https://images.pexels.com/photos/6417941/pexels-photo-6417941.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
              <p class="text-xs not-italic">Denolla Witesyn-00/00/00</p>
              <p>The adipisicing elit. Rem possimus inventore quod? Non, minus consectetur?</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Ratings from '../components/Ratings.vue'
import ShopButton from '../components/Buttons/ShopButton.vue'
import MoreButton from '../components/Buttons/MoreButton.vue'
import Reviews from '../components/Reviews.vue'

import { Hooper, Slide,  Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'

import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'Home',
  props: [
    
  ],
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    Header,
    Footer,
    Ratings,
    ShopButton,
    MoreButton,
    Reviews,
  },

  data () {
    return {
      
    }
  }, 

  mounted() {
    this.$store.dispatch('getProducts')
  },

  computed: {
    ...mapGetters(['products']),
   
  },

  methods: {
  
  }
}
</script>


<style scoped>
  /* h2 {
    color: rgb(231, 52, 52);
    font-size: 70px;
    font-family: 'montserrat';
  } */

  /* h3 {
    font-size: 18px;
    font-weight: 500;
    font-family: 'montserrat';
  }
   */

</style>

