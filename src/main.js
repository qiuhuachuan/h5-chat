import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import 'vant/lib/index.css'


// 统一默认样式
import './assets/style/reset.css'


createApp(App).use(store).mount('#app')
