import {Menu, Submenu, MenuItem, MenuItemGroup, Avatar, Tree, Popover} from 'element-ui';

const element = {
  install: function (Vue) {
    Vue.use(Tree);
    Vue.use(Menu);
    Vue.use(Avatar);
    Vue.use(Popover);
    Vue.use(Submenu);
    Vue.use(MenuItem);
    Vue.use(MenuItemGroup);
  }
};

export default element
