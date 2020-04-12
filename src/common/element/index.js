import {Menu, Submenu, MenuItem, MenuItemGroup, Avatar} from 'element-ui';

const element = {
  install: function (Vue) {
    Vue.use(Menu);
    Vue.use(Avatar);
    Vue.use(Submenu);
    Vue.use(MenuItem);
    Vue.use(MenuItemGroup);
  }
};

export default element
