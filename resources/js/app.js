import Vue from "vue";
import App from './App.vue'
import router from './router';
import http from './utils/http';
import store from './store';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.prototype.$http = http;

window.app = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})