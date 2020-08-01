import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css'
import BaiduMap from 'vue-baidu-map';


Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key
  ak: 'HygCOnsAeZMxBSl2EVCBFzBA6rphGnG6'
});




new Vue({
  router,
  render: h => h(App)
}).$mount('#app');