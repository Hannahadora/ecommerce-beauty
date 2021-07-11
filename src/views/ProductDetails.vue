<template>
  <div>
    <Header />

    <div class="shop-cover" style="">
    
    </div>

    <img class="product-img" :src="product.image_link" alt="">
    <span class="product-name">{{ product.name }}</span>
    <Ratings />
    <p class="product-price">{{ product.price_sign }}{{ product.price }}</p>            


    <Footer />
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import Ratings from '../components/Ratings.vue'

  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'ProductDetails',
    components: { Footer, Header, Ratings, },
    props: [
      'id'
    ],
    data() {
      return {
        id: this.$route.params.id,
        product: {},
      }
    },

    mounted() {
     this.$store.dispatch('getProducts')
   },

   computed: {
    ...mapGetters(['products']),
    ...mapMutations(['PRODUCT_DETAILS'])
   },

   }
</script>

<style>

</style>