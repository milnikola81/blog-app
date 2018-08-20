import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Navbar from './components/Navbar.vue';
import AppPosts from './components/AppPosts.vue';
import SinglePost from './components/SinglePost.vue';
import AddPost from './components/AddPost.vue';
import AddComment from './components/AddComment.vue';
import SuggestedPost from './components/SuggestedPost.vue';
import tinymce from '@tinymce/tinymce-vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', redirect: '/posts'},
  {path: '/posts', component: AppPosts},
  {path: '/posts/:id', component: SinglePost, name: 'single-post'},
  {path: '/add', component: AddPost},
  {path: '/edit/:id', component: AddPost, name: 'edit-post'},
  // {path: '/contacts/:id', component: Contacts, name: 'contact-details'}
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

Vue.component("tinymce", tinymce)

new Vue({
  render: h => h(App), router
}).$mount('#app')
