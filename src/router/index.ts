import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import LoginView from '../views/LoginView.vue'
// import ProviderView from '../views/ProviderView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/provider/:id',
      name: 'provider',
      component: import('@/views/ProviderView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: import('@/views/LoginView.vue')
    }
  ]
})

export default router
