<template>
  <div class="home">
      <Header />

      <div class="bg-red-200" style="">
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
           <img class="" src="../assets/images/mdintro.png" alt="" >
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
          <i class=""></i>
          <p>Free Exchanges</p>
          <p>Incase of Issues</p>
        </div>
        <div class="mini-shadowbox">
          <i class=""></i>
          <p>Source Payment</p>
          <p>Source Payment</p>
        </div>
        <div class="mini-shadowbox">
          <i class=""></i>
          <p>24/7 Extensive</p>
          <p>Customer Support</p>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

