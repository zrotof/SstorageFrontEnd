import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Products.vue'
import Contact from '../views/Contact.vue'
import AddProduct from '../views/Add.vue'
import Product from '../views/Product.vue'

const routes = [
  {
    path: "/",
    alias: "/products",
    name: 'products',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: "/add",
    name: "add",
    component: AddProduct
  },
  {
    path: "/product",
    name: "product",
    component: Product,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
