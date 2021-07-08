<template>
  <div>
    <Header />

    <div class="shop-cover" style="">
      
    </div>

    <div class="mx-24">
      <div class="flex items-center justify-between">
        <form action="">
          <input type="text" placeholder="Search for products..." class="border-b focus:outline-none px-5 py-2 text-xs">
        </form>
         <p>500 Items</p>
      </div>

      <div class="mt-10">
        <div class="shop-container">
          <div class="w-1/4">
            <h4 class="">Product Category</h4>

            <ul>
              <li class="product-type-list">Blush</li>
              <li class="product-type-list">Bronzer</li>
              <li class="product-type-list">Eyebrow</li>
              <li class="product-type-list">EyeLiner</li>
              <li class="product-type-list">Eye Shadow</li>
              <li class="product-type-list">Foundation</li>
              <li class="product-type-list">Lip LIner</li>
              <li class="product-type-list">Lipstick</li>
              <li class="product-type-list">Mascara</li>
              <li class="product-type-list">Nail Polish</li>
            </ul>

            <div class="mt-10">
              <h4>Filter By Price</h4>
              <div class="flex flex-col items-start">
                <button>High</button>
                <button>Average</button>
                <button>Low</button>
              </div>
            </div>

            <div class="mt-10">
              <h4>Filter By Brands</h4>
              <ul>
                <li>maybeline</li>
              </ul>
            </div>
            
            <div class="mt-10">
              <router-link to="/Studio">Our Studio</router-link>
              <div class="grid grid-cols-2">
                <img class="studio-sample-img" src="https://images.pexels.com/photos/925292/pexels-photo-925292.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                <img class="studio-sample-img" src="https://images.pexels.com/photos/3674234/pexels-photo-3674234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                <img class="studio-sample-img" src="https://images.pexels.com/photos/5896079/pexels-photo-5896079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                <img class="studio-sample-img" src="https://images.pexels.com/photos/1202000/pexels-photo-1202000.png?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
              </div>
            </div>
            
           
          </div>

          <div class="">
            <div class="grid grid-cols-3">
              <div v-for="product in displayedProducts" :key="product.id" class="product-group">
                <img class="product-img" :src="product.image_link" alt="">
                <span class="product-name">{{ product.name }}</span>
                <Ratings />
                <p class="product-price">{{ product.price_sign }}{{ product.price }}</p>
              </div>
            </div>
            <div class="flex items-center justify-center gap-10">
                <p class="arrows" @click="sliceProducts(250)">1</p>
                <p class="arrows" @click="sliceProducts(280)">2</p>
                <p class="arrows" @click="sliceProducts(500)">3</p>
                <p class="arrows" @click="sliceProducts(600)">4</p>
                <p class="arrows" @click="sliceProducts(700)">5</p>
            </div>
          </div>


        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import Ratings from '../../components/Ratings.vue'
import MoreButton from '../../components/Buttons/MoreButton.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  components: { Footer, Header, Ratings, MoreButton, },
  data() {
    return {
      displayedProducts: []
    }
  },

   mounted() {
    this.$store.dispatch('getProducts')
    this.sliceProducts(201)
  },

  computed: {
    ...mapGetters(['products'])
  }, 

  methods: {
    sliceProducts(index) {
      this.displayedProducts = this.products.slice(index, (index + 12))
    }
  },
}
</script>

<style scoped>
h4 {
  font-size: 18px;
  font-weight: 600; 
  border-bottom: 2px solid coral;
  padding: 5px 10px;
  width: auto;
}
  .product-type-list {
    padding: 10px 15px  0;
    cursor: pointer;
    /* border-bottom: 1px solid red; */
  }
  .product-type-list:hover {
    color:coral;
  }

  .product-group {
    background: #fcfcfc;
    /* border: 1px solid #ebebeb; */
    margin: 10px ;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .studio-sample-img {
    width: 100px;
    height: 100px;
    margin: 5px;
  }

</style>