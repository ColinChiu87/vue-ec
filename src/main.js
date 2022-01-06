import axios from 'axios';
import VueAxios from 'vue-axios';
import $ from 'jquery';
import 'bootstrap';
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './bus';

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

Vue.component('Loading', Loading);

axios.default.withCredentials = true;

window.$ = $;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  // console.log("to", to,"from", from,"next", next);
  if(to.meta.requiresAuth){
    console.log("這裡需要驗證");
    const api = `${process.env.VUE_APP_API}/api/user/check`;
      axios.post(api).then((resp) => {
        console.log(resp.data);
        if (resp.data.success) {
          next();
        }else{
          next({
            path:'/login'
          })
        }
      });
  }else{
    next();
  }
});
