import {Menu, Submenu, MenuItem, MenuItemGroup} from 'element-ui';

const element = {
  install: function (Vue) {
    Vue.use(Menu);
    Vue.use(Submenu);
    Vue.use(MenuItem);
    Vue.use(MenuItemGroup);
  }
};

export default element
