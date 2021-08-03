import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/pages/Login';
import HelloWorld from '@/components/HelloWorld';

Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    redirect: 'login',
  },
  {
    path: '',
    name: 'home',
    component: HelloWorld,
    meta: {requiresAuth: true},
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
]

const router = new VueRouter({
  routes
})

export default router
