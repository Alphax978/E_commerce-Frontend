import { createApp } from 'vue'
import App from './App.vue'
import store from './Admin/store/index'
import router from './router'
import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from './Admin/assets/icons'







const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.mount('#app')








