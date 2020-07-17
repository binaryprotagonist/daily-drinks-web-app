import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Order from './components/Order.vue'
import Productlist from './components/Productlist.vue'
import UpdateDetail from './components/UpdateDetail.vue'


Vue.use(VueRouter);
const routes =[
  {
    path:'/',component:Home
  },
  {
     path:'/productlist',component:Productlist
  },
  {
    path:'/order',component:Order
  },
   {
    path:'/UpdateDetail',component:UpdateDetail
  }
  
]
const router= new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
