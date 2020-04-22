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
  hidden: true,
  component: () => import('@/common/components/login/index'),
}, {
  path: '/error',
  component: Layout,
  hidden: true,
  children: [{
    path: '/error',
    name: '错误',
    component: () => import('@/common/components/error/index')
  }]
}, {
  path: '/step',
  hidden: true,
  component: () => import('@/model/projectcost/index')
},{
  path: '/home',
  hidden: true,
  component: Layout,
  redirect: '/projectCost/projectCost'
}, {
  path: '/sys',
  name: '系统设置',
  component: Layout,
  meta: {title: '系统设置', icon: 'fa fa-cogs'},
  children: [{
    path: 'function',
    name: '功能菜单维护',
    component: () => import('@/model/sys/functionmenu/index'),
    meta: {title: '功能菜单维护', icon: 'fa fa-sitemap', requireAuth: true}
  }, {
    path: 'logUser',
    name: '登录用户维护',
    component: () => import('@/model/sys/loguser/index'),
    meta: {title: '登录用户维护', icon: 'fa fa-user-plus', requireAuth: true}
  }]
}, {
  path: '/basic',
  name: '基础数据',
  component: Layout,
  meta: {title: '基础数据', icon: 'fa fa-tasks'},
  children: [{
    path: 'department',
    name: '部门维护',
    component: () => import('@/model/basic/department/index'),
    meta: {title: '部门维护', icon: 'fa fa-users', requireAuth: true}
  }, {
    path: 'user',
    name: '用户维护',
    component: () => import('@/model/basic/user/index'),
    meta: {title: '用户维护', icon: 'fa fa-address-card', requireAuth: true}
  }, {
    path: 'custom',
    name: '客户维护',
    component: () => import('@/model/project/index'),
    meta: {title: '客户维护', icon: 'fa fa-user-circle-o', requireAuth: true}
  }, {
    path: 'project',
    name: '项目维护',
    component: () => import('@/model/basic/project/index'),
    meta: {title: '项目维护', icon: 'fa fa-cubes', requireAuth: true}
  }, {
    path: 'cost',
    name: '成本项',
    component: () => import('@/model/project/index'),
    meta: {title: '成本项', icon: 'fa fa-university', requireAuth: true}
  }]
}, {
  path: '/projectCost',
  name: '项目成本',
  component: Layout,
  meta: {title: '项目成本', icon: 'fa fa-university'},
  children: [{
    path: 'projectCost',
    name: '项目成本录入',
    component: () => import('@/model/home/index'),
    meta: {title: '项目成本录入', icon: 'fa fa-align-justify', requireAuth: true}
  }, {
    path: 'projectCheck',
    name: '项目成本审核',
    component: () => import('@/model/step/index'),
    meta: {title: '项目成本审核', icon: 'fa fa-flag-checkered', requireAuth: true}
  }]
}, {
  path: '/reports',
  name: '查询报表',
  component: Layout,
  meta: {title: '查询报表', icon: 'fa fa-search'},
  children: [{
    path: 'myReport',
    name: '个人项目成本统计',
    component: () => import('@/model/step/index'),
    meta: {title: '个人项目成本统计', icon: 'fa fa-file-text', requireAuth: true}
  }, {
    path: 'userReport',
    name: '项目人员成本统计',
    component: () => import('@/model/step/index'),
    meta: {title: '项目人员成本统计', icon: 'fa fa-file-text', requireAuth: true}
  }, {
    path: 'projectReport',
    name: '项目成本项统计',
    component: () => import('@/model/step/index'),
    meta: {title: '项目成本项统计', icon: 'fa fa-file-text', requireAuth: true}
  }, {
    path: 'usersReport',
    name: '人员日工时统计',
    component: () => import('@/model/step/index'),
    meta: {title: '人员日工时统计', icon: 'fa fa-file-text', requireAuth: true}
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
