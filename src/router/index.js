import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// SHOP COMPONENTS
import Index from '../views/Shop/Index.vue'
import ProductType from '../views/Shop/ProductType.vue'
import Brand from '../views/Shop/Brand.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Index,
    children: [
      {
        path: 'product_type/:product_type',
        name: 'Product_type',
        component: ProductType
      },
      {
        path: 'brand/:brand',
        name: 'Brand',
        component: Brand
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
