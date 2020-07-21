import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 配置全局样式
import '@/assets/css/global.css'

// 配置全局自定义设置
import settings from '@/assets/js/settings'
Vue.prototype.$settings = settings;
// 在所有需要与后台交互的组件中：this.$settings.base_url + '再拼接具体后台路由'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import aixos from 'axios'
Vue.prototype.$axios = aixos

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
