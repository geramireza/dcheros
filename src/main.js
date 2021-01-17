import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery'
import 'bootstrap/dist/js/bootstrap'
import '@popperjs/core'
import "./assets/css/style.css"
import "./assets/js/script"
import mixins  from  './mixins/mixins'


import mitt from 'mitt'
const emitter = mitt()
const app = createApp(App)
app.mixin(mixins)
app.config.globalProperties.emitter = emitter
app.use(store)
app.mount('#app')
