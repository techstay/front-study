import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ClientInfo from '@/components/ClientInfo'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }, {
      path: '/ClientInfo',
      name: 'ClientInfo',
      component: ClientInfo
    }, {
      path: '/About',
      name: 'About',
      component: About
    }

  ],
  linkExactActiveClass: 'active',
  mode: 'hash'
})
