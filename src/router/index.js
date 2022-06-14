import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'


import Home from "@/pages/Home.vue"
import Search from "@/pages/Search.vue"
import Login from "@/pages/Login.vue"
import Register from "@/pages/Register.vue"
import Study from "@/pages/Study";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/home",
      component:Home
    },
    {
      path:"/search",
      component:Search
    },
    {
      path:"/login",
      component:Login
    },
    {
      path:"/register",
      component:Register
    },
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/study",
      component:Study
    }
    //
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },{
    //   path:'/first',
    //   name:'First',
    //   component:First
    // }
  ]
})
