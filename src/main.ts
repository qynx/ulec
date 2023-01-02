import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import { Message } from '@arco-design/web-vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
Message._context = app._context
app.use(ArcoVue, {componentPrefix: 'arco'})
app.use(ElementPlus)

app.mount('#app')
