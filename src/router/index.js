import Vue from 'vue'
import Router from 'vue-router'

// 导入路由组件
import Home from './home'
import Cinema from './cinema'
import Mine from './mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', redirect: '/home/nowplaying' },
    Home,
    Cinema,
    Mine
  ]
})
