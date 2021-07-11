<template>
  <div>
    <Header />

    <div class="shop-cover" style="">
    
    </div>

    <div class="product-detail">
      <img class="" :src="product.image_link" alt="">
      <div class="product-info">
        <p>{{ product.name }}</p> 
        <p>{{ product.price_sign }}{{ product.price }}</p>  
        <Ratings />
        <ul>
          <li>In Stock</li>
          <li>Free Delivery Available</li>
          <li>Sales 25% Off Use Code: Anna2021</li>
        </ul>  
        <p>{{ product.description }}</p>
        <p><i class="far fa-heart text-red-500 mr-3"></i>ADD TO WISHLIST</p>
      </div>     
    </div>

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
      }
    },

    mounted() {
     this.$store.dispatch('getProducts')
   },

   computed: {
    ...mapGetters(['products']),  
    product() {
      return this.products.find((el) => el.id == this.id)
    },

   }
  }
</script>

<style>

  .product-detail {
    width: 60%;
    margin: 50px auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .product-detail img {
    border: 1px solid #fcfcfc;
    border-radius: 4px;
    padding: 17px;
    width: 50%;
    height: 400px;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .product-info p:nth-child(1) {
    font-size: 25px;
    font-weight: bold;
  }
  .product-info p:nth-child(2) {
    font-size: 20px;
    margin-top: 17px;
  }
  .product-info p:nth-child(5) {
    font-size: 14px;
  }
  .product-info p:nth-child(6) {
    font-size: 14px;
    margin-top: 20px;
  }
  .product-info ul {
    font-size: 13px;
    width: 100%;
    margin: 20px 0;
    padding: 10px 0 0 0;
    border-top: 1px solid #c4c4c4;
    list-style-type: disc;
  }

</style>