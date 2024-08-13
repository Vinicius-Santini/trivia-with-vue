import { createApp } from 'vue'
import './app.css'
import App from './App.vue'
import router from './router'
import store from './store/store'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
