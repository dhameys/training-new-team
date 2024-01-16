// import './bootstrap.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '../src/app.css'
import router from './router'
import Qrcode from 'vue-qrcode';

const pinia = createPinia()
// Register the Qrcode component globally

const app = createApp(App)
app.component('qrcode', Qrcode);
app.use(pinia)
app.use(router)
app.mount('#app-system')
