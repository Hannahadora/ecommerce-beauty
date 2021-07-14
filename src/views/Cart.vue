<template>
  <div>
    <Header />

    <div class="shop-cover" style=""></div>

    <div class="cart-details">
        <table>
            <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
            </tr>

            <tr v-for="item in cartItems" :key="item.id">
                <td><img :src="item.image_link" alt="">{{ item.name }}</td>
                <td>{{ item.price_sign }}{{ item.price }}</td>
                <td class="amt">
                    <button @click="decreaseQuantity" class="focus:outline-none">-</button>
                    <span>{{ productQuantity }}</span>
                    <button @click="increaseQuantity" class="focus:outline-none">+</button>
                </td> 
                <td>{{ productQuantity * item.price }}</td>
            </tr>
        </table>
    </div>

    <Footer />
  </div>
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'Cart',
    props: [],
    components: {
        Header,
        Footer,
    },

    mounted: {
        ...mapGetters(['cartItems'])
    }

}
</script>

<style>
    .cart-details {
        width: 70%;
        margin: 20px auto;
    }

    table, td, th {  
        border: 1px solid #ddd;
        text-align: left;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    th, td {
        padding: 15px;
    }

</style>