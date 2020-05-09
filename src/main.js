import Vue from 'vue';
import App from './App';

import store from './common/store';
import router from './common/router';
import element from './common/element';
import Fragment from 'vue-fragment'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/common/styles/index.css';
//引入Font Awesome图标库
import 'font-awesome/css/font-awesome.min.css';
import Mui from 'vue-awesome-mui';
// 引入echarts
import echarts from 'echarts';

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

Vue.use(Mui);
Vue.use(Vant);
Vue.use(echarts);
Vue.use(element);
Vue.use(Fragment.Plugin);

new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
});
