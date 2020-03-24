import Vue from 'vue';
import App from './App';
import router from './common/router';
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/common/styles/index.css';
//引入Font Awesome图标库
import 'font-awesome/css/font-awesome.min.css';
import Mui from 'vue-awesome-mui';

Vue.use(Mui);
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
