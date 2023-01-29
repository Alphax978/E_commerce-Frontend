import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'





const app = createApp(App)

app.use(router)
  
app.mount('#app')

app.config.compilerOptions.isCustomElement = (tag) => {
    return tag.startsWith('ion-')
  }