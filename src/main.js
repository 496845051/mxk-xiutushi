import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './utils/http'
import './style/animate.css'
import api from './api/index'
import vueCropper from 'vue-cropper'
Vue.use(ElementUI)
Vue.use(api)
Vue.use(vueCropper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
