import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './assets/css/global.css'
import axios from './axios'

const app = createApp(App);
installElementPlus(app);
// 挂载axios到vue原型对象上
app.config.globalProperties.$http = axios;
app.config.globalProperties.$store = store;
app.use(store).use(router).mount('#app');