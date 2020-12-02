import Vue from 'vue';
import App from './App';
import Antd from 'ant-design-vue';
import router from './router'
import store from './store'
import i18n from './lang'
import './theme/index.less'
import 'animate.css/source/animate.css'


Vue.use(Antd);
Vue.config.productionTip = false;

bootstrap({router, store, i18n, message: Vue.prototype.$message})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
