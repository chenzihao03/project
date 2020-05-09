import {
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Avatar,
  Tree,
  Popover,
  Button,
  Container,
  Main,
  Aside
} from 'element-ui';

const element = {
  install: function (Vue) {
    Vue.use(Tree);
    Vue.use(Menu);
    Vue.use(Main);
    Vue.use(Aside);
    Vue.use(Button);
    Vue.use(Avatar);
    Vue.use(Popover);
    Vue.use(Submenu);
    Vue.use(Container);
    Vue.use(MenuItem);
    Vue.use(MenuItemGroup);
  }
};

export default element
