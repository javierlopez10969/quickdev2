import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Impostamos axios
import axios from 'axios'




// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

//Creamos la instancia de axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080"
})

//Para aceder a axios desde this.$http
Vue.prototype.$http = axiosInstance;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')





