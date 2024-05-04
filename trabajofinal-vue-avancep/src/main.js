import 'primevue/resources/themes/saga-blue/theme.css';       //theme
import 'primevue/resources/primevue.min.css';                 //core css
import 'primeicons/primeicons.css';                           //icons


import PrimeVue from 'primevue/config';
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./app/router/router.js";

createApp(App)
    .use(PrimeVue)
    .use(router)
    .mount('#app')
