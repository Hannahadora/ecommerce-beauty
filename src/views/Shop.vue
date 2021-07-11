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
        <p>{{ type.length }} {{ type }} Found</p>
         <p>{{ products.length }} Items Available</p>
      </div>

      <div class="mt-10">
        <div class="shop-container">
          <div class="w-1/4">
            <h4 class="">Product Category</h4>

            <ul>
              <li :class="{active: type ===''}" @click="filterType('')" class="product-type-list">All</li>
              <li :class="{active: type ==='blush'}" @click="filterType('blush')" class="product-type-list">Blush</li>
              <li :class="{active: type ==='bronzer'}" @click="filterType('bronzer')" class="product-type-list">Bronzer</li>
              <li :class="{active: type ==='eyebrow'}" @click="filterType('eyebrow')" class="product-type-list">Eyebrow</li>
              <li :class="{active: type ==='eyeliner'}" @click="filterType('eyeliner')" class="product-type-list">EyeLiner</li>
              <li :class="{active: type ==='eyeshadow'}" @click="filterType('eyeshadow')" class="product-type-list">Eye Shadow</li>
              <li :class="{active: type ==='foundation'}" @click="filterType('foundation')" class="product-type-list">Foundation</li>
              <li :class="{active: type ==='lipliner'}" @click="filterType('lipliner')" class="product-type-list">Lip LIner</li>
              <li :class="{active: type ==='lipstick'}" @click="filterType('lipstick')" class="product-type-list">Lipstick</li>
              <li :class="{active: type ==='mascara'}" @click="filterType('mascara')" class="product-type-list">Mascara</li>
              <li :class="{active: type ==='nailpolish'}" @click="filterType('nailpolish')" class="product-type-list">Nail Polish</li>
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
               <router-link :to="{ name: 'ProductDetails', params: { id: product.id }}">
                  <img class="product-img" :src="product.image_link" alt="">
                  <span class="product-name">{{ product.name }}</span>
                  <Ratings />
                  <p class="product-price">{{ product.price_sign }}{{ product.price }}</p>
               </router-link>
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
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Ratings from '../components/Ratings.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Shop',
  components: { Footer, Header, Ratings, },
  data() {
    return {
      // displayedProducts: [],
      type: '',
    }
  },

   mounted() {
    this.$store.dispatch('getProducts')
    // this.sliceProducts(201)
  },

  computed: {
    ...mapGetters(['products']),

    displayedProducts() {
      return this.products.filter(product => {
          switch(this.type) {
              case 'blush':
                  return product.product_type === "blush";
              case 'bronzer':
                  return product.product_type === "bronzer";
              case 'eyebrow':
                  return product.product_type === "eyebrow";
              case 'eyeliner':
                  return product.product_type === "eyeliner";
              case 'eyeshadow':
                  return product.product_type === "eyeshadow";
              case 'foundation':
                  return product.product_type === "foundation";
              case 'lipliner':
                  return product.product_type === "lip_liner";
              case 'lipstick':
                  return product.product_type === "lipstick";
              case 'mascara':
                  return product.product_type === "mascara";
              case 'nailpolish':
                  return product.product_type === "nail_polish";
              default:
                  return  this.products.slice(201, 213);
          }
      });
    }
  }, 

  methods: {
    sliceProducts(index) {
       this.products.slice(index, (index + 12))
    },

    filterType(type) {
      this.type = type;
    },

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

 
  .studio-sample-img {
    width: 140px;
    height: 100px;
    margin: 5px;
  }

</style>