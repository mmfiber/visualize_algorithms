import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './plugins/router';
import chart from './plugins/chart'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  chart,
  render: h => h(App)
}).$mount('#app')
