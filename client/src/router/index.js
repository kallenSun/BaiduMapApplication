import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home/showMap',
    component:()=>import('../views/Home'),
    children:[
      {path:'/home/showMap',component:()=>import('../views/ShowMap')}

    ]
  }

];

const router = new VueRouter({
  mode: 'history',
  routes,
});


export default router
