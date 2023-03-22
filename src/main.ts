import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(ElementUI)

app.mount('#app')
