import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Notifications from "vt-notifications";

Vue.use(Notifications);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
