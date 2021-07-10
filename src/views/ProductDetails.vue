<template>
  <div>
    <Header />

    <div class="shop-cover" style="">
      
    </div>

      <div v-for="product in products" :key="product.id" class="">           
        <img class="product-img" :src="product.image_link" alt="">
        <span class="product-name">{{ product.name }}</span>
        <Ratings />
        <p class="product-price">{{ product.price_sign }}{{ product.price }}</p>            
      </div>
 
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import Ratings from '../components/Ratings.vue'

  import { mapGetters } from 'vuex'

  export default {
    name: 'Index',
    components: { Footer, Header, Ratings, },
    data() {
      return {
        
      }
    },

    mounted() {
     this.$store.dispatch('getProducts')
   },

   computed: {
    ...mapGetters(['products']),
   },

   }
</script>

<style>

</style>