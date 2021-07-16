import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/pages/Login';
import HelloWorld from '@/components/HelloWorld';

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: HelloWorld,
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
