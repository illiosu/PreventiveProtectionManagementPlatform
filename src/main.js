import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js";
import AMap from 'vue-amap'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'




createApp(App).use(router).use(AMap).use(ElementPlus, {
    locale: zhCn,
}).mount('#app')
