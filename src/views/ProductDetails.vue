<template>
  <div>
    <Header />

    <div class="shop-cover" style="">
    
    </div>

    <div class="product-detail">
      <img class="" :src="selectedProduct.image_link" alt="">
      <div class="product-info">
        <p>{{ selectedProduct.name }}</p> 
        <p>{{ selectedProduct.price_sign }}{{ selectedProduct.price }}</p>  
        <Ratings />
        <ul>
          <li>In Stock</li>
          <li>Free Delivery Available</li>
          <li>Sales 25% Off Use Code: Anna2021</li>
        </ul>  
        <p>{{ selectedProduct.description }}</p>
        <p v-if="!wishListProduct"><i @click="wishListProduct = true" class="far fa-heart text-red-500 text-xl mr-2 cursor-pointer"></i>ADD TO WISHLIST</p>
        <p v-if="wishListProduct"><i @click="wishListProduct = false" class="fas fa-heart text-red-500 text-xl mr-2 cursor-pointer"></i>REMOVE FROM WISHLIST</p>
        <div class="addToCart" action="">
          <div class="amt">
            <button @click="decreaseQuantity" class="focus:outline-none">-</button>
            <span>{{ productQuantity }}</span>
            <button @click="increaseQuantity" class="focus:outline-none">+</button>
          </div> 
          <button @click="addToCart" class="btn focus:outline-none">Add To Cart</button>
        </div>
        <p>Category: {{ selectedProduct.category }}</p>
        <p>Brand: {{ selectedProduct.brand }}</p>
        <p>Tags:</p>
        <li v-for="tag in selectedProduct.tag_list" :key="tag.index">{{ tag }}</li>
      </div>      
    </div>

    <div class="similarProducts">
      <h1>Similar Products</h1>
      <div class="grid grid-cols-4">
        <div v-for="product in similarProducts.slice(0, 4)" :key="product.id" class="product-group">
          <router-link :to="{ name: 'ProductDetails', params: { id: product.id, name: product.name}}">
            <img class="product-img" :src="product.image_link" alt="">
            <span class="product-name">{{ product.name }}</span>
            <Ratings />
            <p class="product-price">{{ product.price_sign }}{{ product.price }}</p>
          </router-link>
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
        productQuantity: '1',
        wishListProduct: false 
      }
    },

    mounted() {
     this.$store.dispatch('getProducts')
     this.$store.state.selectedId = this.id
   },

   computed: {
    ...mapGetters(['products', 'selectedProduct', 'similarProducts', 'cartItems']),  
   
   },

   methods: {
     decreaseQuantity() {
       this.productQuantity--;
     },
     increaseQuantity(n) {
        this.productQuantity++;
     },
     addToCart() {
        // this.$store.dispatch('addItem', this.selectedProduct)
        this.$store.state.cart.push(this.selectedProduct)
        this.$router.push({ name: 'Cart' }) 
     }
   }
  }
</script>

<style>

  .product-detail {
    width: 70%;
    margin: 50px auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-size: 14px;
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
  .product-info p:nth-child(6) {
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

  .addToCart {
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .addToCart .btn {
    padding: 10px 33px;
    background: coral;
    border-radius: 4px;
    color: #fff;
  }

  .addToCart .amt {
    width: 180px;
    padding: 10px;
    background: transparent;
    border-radius: 4px;
    border: 1px solid black;
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .similarProducts {
     background-color: #fff7ed;
     padding: 50px 100px;
     text-align: center;
  }
 
</style>