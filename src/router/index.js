import Vue from 'vue'
import Router from 'vue-router'

import newAdvertising from '@/components/newAdvertising';     //新建广告
import Home from '@/components/Home'
import Element from '@/components/Element'
import Originality from '@/components/Originality'
import Login from '@/components/Login'

//挂载Vuex全局可调用
import store from '../store/store.js'

Vue.use(Router)

let router = new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect:"/home"  
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/element',
      name: 'Home',
      component: Element
    },
    {
      path: '/originality',
      name: 'Home',
      component: Originality
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/newAdvertising',
      name: 'newAdvertising',
      component: newAdvertising
    },
  ]
})


//路由拦截
router.beforeEach((to,form,next) => {
  let token = fn()
  if(to.name==='Login'){    //进login页面
     next()
  }else{                 
     if(token){        //进入别的页面是否有token  有就进 没有else
          next()
     }else{
          next({
            name:'Login'
          })
     }
  }
 

})

function fn () {
    let token = window.localStorage.getItem('token')

    if(!!token) {
      //路由拦截之前 判断本地是否 存储有没有username
      store.commit('mutations_getItem',localStorage.getItem('username'))
    }

    return !!token
}


export default router

