<template>
  <div class="reviews-section">
        <h3>What People Say</h3>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nisi.</h5>

        <hooper>
          <slide v-for="customer in customers" :key="customer" class="my-5">
             <div class="flex flex-col items-center">
                <img class="w-20 h-20 rounded-full" :src="customer.image" alt="">
                <h5>{{ customer.name }}</h5>
                <p class="text-sm">{{ customer.occupation }}</p>
                <Ratings />
                <p class="w-1/2 mt-5">{{ customer.review }}</p>
              </div>
           </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
      </div>
</template>

<script>
import Ratings from './Ratings.vue'

import { mapActions, mapGetters, mapState } from 'vuex';

import { Hooper, Slide,  Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
    name: 'Reviews',
    components : {
        Ratings,
        Hooper,
        Slide,
        HooperNavigation,
    },

    data() {
        return {

        }
    },

    computed: {
        ...mapGetters(['customers']),
   
    }
}
</script>

<style>
  .reviews-section {
    margin: 60px 0;
    text-align: center;
    padding: 80px 200px;
    background-color: #fcfcfc;
  }
</style>