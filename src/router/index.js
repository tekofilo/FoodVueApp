import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import searchmeals from '../views/searchmeals.vue'
import categories from '../views/categories.vue'
import areas from '../views/areas.vue'
import '../assets/bootstrap.min.css'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/areas',
    name: 'areas',

    component: areas
  },
  {
    path: '/searchmeals',
    name: 'Searchmeals',
    component: searchmeals
  },
  {
    path: '/categories',
    name: 'Categories',
    component: categories
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
