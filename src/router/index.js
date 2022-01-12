import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/pages/Login';
// import HelloWorld from '@/components/HelloWorld';
import Dashboard from '@/components/Dashboard';
import Products from '@/components/pages/Products';
import OrderList from '@/components/pages/OrderList';
import CouponList from '@/components/pages/CouponList';

Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    redirect: 'login',
  },
  // {
  //   path: '',
  //   name: 'home',
  //   component: HelloWorld,
  //   meta: {requiresAuth: true},
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: Dashboard,
    meta: {requiresAuth: true},
    children:[
      {
        path: 'products',
        name: 'Products',
        component: Products,
        meta: {requiresAuth: true},
      },
      {
        path: 'order_list',
        name: 'order_list',
        component: OrderList,
        meta: {requiresAuth: true},
      },
      {
        path: 'coupon_list',
        name: 'coupon_list',
        component: CouponList,
        meta: {requiresAuth: true},
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
