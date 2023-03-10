import Vue from 'vue'
import App from './App'
import VMilsymbol from '@'

Vue.use(VMilsymbol)

new Vue({
  render: h => h(App)
}).$mount('#app')