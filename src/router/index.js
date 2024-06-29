import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import SignupForm from '../components/SignupForm.vue'
import Login from '../components/Login.vue'
import HomeTask from '../components/HomeTask.vue'
import UserDetails from '../components/UserDetails.vue'

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'SignupForm',
    component: SignupForm
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/task',
    name: 'HomeTask',
    component: HomeTask
  },
  {
    path:'/user-details',
    name:'UserDetails',
    component: UserDetails
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
