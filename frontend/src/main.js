import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'


import PaperDashboard from "./Admin/plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";






const app = createApp(App)

app.use(router)
  
app.mount('#app')

app.use(PaperDashboard)

