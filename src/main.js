import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/albb_font/iconfont.css'

Vue.use(Vant);
Vue.use(VueAxios,axios);

Vue.config.productionTip = false;

// 定义全局域名
Vue.prototype.hostName = "http://localhost:3000"; //http://129.204.180.14:3000

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
