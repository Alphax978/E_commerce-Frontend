import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";



const app = createApp(App)
app.use(router)
app.use(PaperDashboard)
app.mount('#app')









