import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Statistics from '../views/Statistics.vue'
import Programs from '../views/Programs.vue'
import LoginAndReg from '../views/LoginAndReg.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/stats',
    name: 'statistics',
    component: Statistics
  },
  {
    path: '/programs',
    name: 'programs',
    component: Programs
  },
  {
    path: '/Login',
    name: 'loginandreg',
    component: LoginAndReg
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
