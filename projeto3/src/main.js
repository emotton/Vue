import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3Storage from "vue3-storage"

createApp(App).use(store).use(router).use(Vue3Storage).mount('#app')
