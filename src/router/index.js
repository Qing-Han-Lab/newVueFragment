import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('@/views/home/home'),
    meta : {
      isKeepAlive : true
    }
  }
]

var resolve_scope = require.context('@/views',true,/\.json$/);
let complier = (param) =>{ // 解析路由页面函数
  param.keys().forEach((item) => {
    let str = param(item).page;
    let routerItem = {};
    routerItem.component = ()=>import(`@/views/${str}.vue`);
    routerItem.name = str.split('/').pop();
    routerItem.path = '/'+str.split('/').pop();
    routerItem.meta = {
      isKeepAlive : false
    }
    routes.push(routerItem);
  })
}
complier(resolve_scope);

const router = new VueRouter({
  routes
})

export default router
