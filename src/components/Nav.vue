<template>
  <div id="nav" class="flex items-center justify-between">
      <div class="nav-content nav-text">
          <router-link to="/">Home</router-link>
          <router-link to="/shop">Shop</router-link>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/about">About</router-link>
      </div>

      <div class="nav-content nav-icons">
          <router-link to="/cart"><i class="fas fa-shopping-cart"><span class="bg-blue-500 p-2 text-white">{{ cartLength }}</span></i></router-link>
          <router-link to="/search"><i class="fas fa-search"></i></router-link>
          <router-link to="/profile"><i class="fas fa-user"></i></router-link>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Nav',

    data() {
        return {
            cartLength: '0'
        }
    },

    mounted: {
        ...mapGetters(['cartItems'])
    },

    computed: {
       calcCartLength() {
           this.cartLength = this.cartItems.length
       }
    }
}
</script>
    
<style>
    .nav-content {
        font-size: 14px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }

</style>