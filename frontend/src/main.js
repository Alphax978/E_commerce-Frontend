import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'



import "vue-notifyjs/themes/default.css";
import paperDashboard from './Admin/plugins/paperDashboard';




createApp(App).use(router).mount('#app').use(paperDashboard)
