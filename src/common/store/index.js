import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex);

const state = {
  user: window.localStorage.getItem('user'),
  token: window.localStorage.getItem('token'),
  popupShow: false,
  myShow: false,
  functionMenu: [{
    path: '/myprojectcost',
    hidden: true,
    component: 'model/cost/projectcost/index'
  }, {
    path: '/home',
    hidden: true,
    redirect: '/projectCost/projectCost',
    meta: {requireAuth: true}
  },{
    path: '/projectcost',
    hidden1: true,
    component: 'model/projectcost/index',
    meta: {title: '项目成本统计',requireAuth: true}
  }, {
    path: '/sys',
    name: '系统设置',
    component: 'common/layout/index',
    meta: {title: '系统设置', icon: 'fa fa-cogs'},
    children: [{
      path: 'function',
      name: '功能菜单维护',
      component: 'model/sys/functionmenu/index',
      meta: {title: '功能菜单维护', icon: 'fa fa-sitemap', requireAuth: true}
    }, {
      path: 'logUser',
      name: '登录用户维护',
      component: 'model/sys/loguser/index',
      meta: {title: '登录用户维护', icon: 'fa fa-user-plus', requireAuth: true}
    }]
  }, {
    path: '/basic',
    name: '基础数据',
    component: 'common/layout/index',
    meta: {title: '基础数据', icon: 'fa fa-tasks'},
    children: [{
      path: 'department',
      name: '部门维护',
      component: 'model/basic/department/index',
      meta: {title: '部门维护', icon: 'fa fa-users', requireAuth: true}
    }, {
      path: 'user',
      name: '用户维护',
      component: 'model/basic/user/index',
      meta: {title: '用户维护', icon: 'fa fa-address-card', requireAuth: true}
    }, {
      path: 'custom',
      name: '客户维护',
      component: 'model/project/index',
      meta: {title: '客户维护', icon: 'fa fa-user-circle-o', requireAuth: true}
    }, {
      path: 'project',
      name: '项目维护',
      component: 'model/basic/project/index',
      meta: {title: '项目维护', icon: 'fa fa-cubes', requireAuth: true}
    }, {
      path: 'cost',
      name: '成本项',
      component: 'model/project/index',
      meta: {title: '成本项', icon: 'fa fa-university', requireAuth: true}
    }, {
      path: 'my',
      name: '我的',
      hidden: true,
      component: 'model/basic/my/index',
      meta: {title: '我的', icon: 'fa fa-university', requireAuth: true}
    }]
  }, {
    path: '/projectCost',
    name: '项目成本',
    component: 'common/layout/index',
    meta: {title: '项目成本', icon: 'fa fa-university'},
    children: [{
      path: 'projectCost',
      name: '项目成本录入',
      component: 'model/home/index',
      meta: {title: '项目成本录入', icon: 'fa fa-align-justify', requireAuth: true}
    }, {
      path: 'projectCheck',
      name: '项目成本审核',
      component: 'model/step/index',
      meta: {title: '项目成本审核', icon: 'fa fa-flag-checkered', requireAuth: true}
    }]
  }, {
    path: '/reports',
    name: '查询报表',
    component: 'common/layout/index',
    meta: {title: '查询报表', icon: 'fa fa-search'},
    children: [{
      path: 'myReport',
      name: '个人项目成本统计',
      component: 'model/step/index',
      meta: {title: '个人项目成本统计', icon: 'fa fa-file-text', requireAuth: true}
    }, {
      path: 'userReport',
      name: '项目人员成本统计',
      component: 'model/step/index',
      meta: {title: '项目人员成本统计', icon: 'fa fa-file-text', requireAuth: true}
    }, {
      path: 'projectReport',
      name: '项目成本项统计',
      component: 'model/step/index',
      meta: {title: '项目成本项统计', icon: 'fa fa-file-text', requireAuth: true}
    }, {
      path: 'usersReport',
      name: '人员日工时统计',
      component: 'model/step/index',
      meta: {title: '人员日工时统计', icon: 'fa fa-file-text', requireAuth: true}
    }]
  }]
};

const mutations = {
  //将token保存到sessionStorage里，token表示登陆状态
  SET_TOKEN: (state, data) => {
    state.token = data;
    window.localStorage.setItem('token', data);
  },
  //设置用户名
  SET_USER: (state, data) => {
    // 把用户名存起来
    state.user = data;
    window.localStorage.setItem('user', data);
  },
  //设置路由
  SET_ROUTE: (state, data) => {
    // 把用户名存起来
    state.functionMenu = data;
  },
  SET_POPUP: (state, data) => {
    // 是否显示弹出框
    state.popupShow = data;
  },
  SET_MY_POPUP: (state, data) => {
    // 是否显示弹出框
    state.myShow = data;
  },
  //登出
  LOGOUT: (state) => {
    // 登出的时候要清除token
    state.token = null;
    state.user = null;
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
  }
};

const actions = {};

export default new Vuex.Store({
  state,
  mutations,
  actions
});

