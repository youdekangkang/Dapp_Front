/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


// css
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/magnific-popup.min.css'
import '@/assets/css/meanmenu.min.css'
import '@/assets/css/style.css'
import '@/assets/css/responsive.css'
import '@/assets/fonts/remixicon.css'
import '@/assets/css/owl.theme.default.min.css'
import '@/assets/css/owl.carousel.min.css'


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');


