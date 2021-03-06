import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
import {Toast} from 'vant';

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
    redirect: '/home',
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
  const token = store.state.token;
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (!token) {
      next('/login');
    }
  }

  let popupShow = store.state.popupShow,
    myShow = store.state.myShow,
    quit = false, isGo = true;

  mui.back = function () {  //按下物理返回键
    let popupShow1 = store.state.popupShow,
      myShow1 = store.state.myShow;
    if (to.path === '/projectCost/projectCost' || to.path === '/login') {
      if (!quit) {
        console.log("1" + popupShow1 + "2" + myShow1);
        store.commit('SET_POPUP', false);
        store.commit('SET_MY_POPUP', false);
        Toast("再按一次退出程序");
        quit = true;
        setTimeout(function () {
          quit = false;
        }, 2000);
      } else {
        plus.runtime.quit(); //退出app
      }
    } else {
      next(from);
    }
  };

  if (popupShow || myShow) {
    store.commit('SET_POPUP', false);
    store.commit('SET_MY_POPUP', false);
    isGo = false;
  }
  next(isGo);
});

//抛出这个这个实例对象方便外部读取以及访问
export default router
