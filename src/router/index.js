import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'product-list',
    component: () => import(/* webpackChunkName: "product-list" */ '../views/ProductList/listItem.vue')
  },
  {
    path: '/product-details/:id',
    name: 'product-details',
    component: () => import(/* webpackChunkName: "product-details" */ '../views/ProductList/productDetails.vue')
  },
  {
    path: '/product-cart',
    name: 'product-cart',
    component: () => import(/* webpackChunkName: "product-cart" */ '../views/ProductList/cartItems.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
