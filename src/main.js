import Vue from 'vue'
import './plugins/evenbus'
import './plugins/axios'
import './plugins/horizon'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap';
import './assets/sass/app-dark.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
