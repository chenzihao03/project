import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  mode: 'hash',//去掉url的#
  base: '/project/',
  scrollBehavior: () => ({y: 0}),
  routes: [{
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
    component: () => import('@/common/layout/index'),
    hidden: true,
    children: [{
      path: '/error',
      name: '错误',
      component: () => import('@/common/components/error/index')
    }]
  }]
});

const functionMenu = store.state.functionMenu;
const menu = menusToRoutes(functionMenu);
router.addRoutes(menu);

/**
 * 路由重复调用报错的问题
 */
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
};

// 将菜单信息转成对应的路由信息 动态添加
function menusToRoutes(data) {
  const result = [];
  data.forEach(router => {
    const component = router.component;
    router.component = resolve => {
      require(['@/' + component + '.vue'], resolve)
    };

    let children = router.children;
    if (children && children instanceof Array) {
      children = menusToRoutes(children)
    }

    router.children = children;

    result.push(router);
  });

  return result
}

// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  // const token = store.state.token;
  // if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
  //   if (token) { // 通过vuex state获取当前的token是否存在
  //     next()
  //   } else {
  //     next({
  //       path: '/login'
  //     })
  //   }
  // } else {
  //   next()
  // }
  next();
});

//抛出这个这个实例对象方便外部读取以及访问
export default router
