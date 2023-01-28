import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
import { Message } from '@arco-design/web-vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {router} from './router'

const app = createApp(App)
Message._context = app._context
app.use(router)
app.use(ArcoVueIcon)
app.use(ArcoVue, {componentPrefix: 'arco'})
app.use(ElementPlus)
app.mount('#app')
