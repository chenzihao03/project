import Vue from 'vue'
// import store from '../store'
import Router from 'vue-router'

// /* Layout */
import Layout from '@/common/layout/index'

Vue.use(Router);

export const constantRoutes = [{
  path: '*', // 页面不存在的情况下会跳到404页面
  redirect: '/error',
  name: 'notFound',
  hidden: true,
}, {
  path: '/',
  redirect: '/login',
  hidden: true,
}, {
  path: '/login',
  component: () => import('@/common/components/login/index'),
}, {
  path: '/projectCost',
  component: () => import('@/model/projectcost/index'),
}, {
  path: '/error',
  component: Layout,
  children: [{
    path: '/error',
    name: '错误',
    component: () => import('@/common/components/error/index')
  }]
}, {
  path: '/home',
  component: Layout,
  children: [{
    path: '/home',
    component: () => import('@/model/home/index')
  }]
}, {
  path: '/project',
  component: Layout,
  children: [{
    path: '/project',
    component: () => import('@/model/project/index')
  }]
}, {
  path: '/step',
  component: Layout,
  children: [{
    path: '/step',
    component: () => import('@/model/step/index')
  }]
}];


const createRouter = () => new Router({
  mode: 'hash',//去掉url的#
  base: '/project/',
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
});

const router = createRouter();

/**
 * 路由重复调用报错的问题
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
};

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher
}

// 注册全局钩子用来拦截导航
// router.beforeEach((to, from, next) => {
//   const token = store.state.token;
//   if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//     if (token) { // 通过vuex state获取当前的token是否存在
//       next()
//     } else {
//       next({
//         path: '/login'
//       })
//     }
//   } else {
//     next()
//   }
// });

//抛出这个这个实例对象方便外部读取以及访问
export default router
