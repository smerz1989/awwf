import { createApp } from 'vue'
import App from './App.vue'
import $ from 'jquery'
import router from './router'
import VueCookies from 'vue3-cookies'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).use(VueCookies).mount('#app')
