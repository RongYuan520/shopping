import Router from 'vue-router'
import Vue from 'vue'
const Home = () => import('views/home')
const Cart = () => import('views/cart')
const Category = () => import('views/category')
const Detail = () => import('views/detail')
const Profile = () => import('views/profile')
Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new Router({
  mode: 'history',
  routes
})
export default router