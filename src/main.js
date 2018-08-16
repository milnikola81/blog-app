import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Navbar from './components/Navbar.vue';
import AppPosts from './components/AppPosts.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', redirect: '/posts'},
  {path: '/posts', component: AppPosts}
  // {path: '/contacts/:id', component: Contacts, name: 'contact-details'}
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App), router
}).$mount('#app')
