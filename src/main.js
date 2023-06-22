import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import message from './message'

const app = createApp(App)
app.provide("message", message)
app.use(router)
app.mount('#app')