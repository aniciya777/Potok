import { createApp } from 'vue'
import App from './App.vue'
import routers from './routes';
import breadcrumbs from 'vue-3-breadcrumbs'
import VueLatex from 'vatex'

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";
import './assets/styles/main.scss';

const app = createApp(App)
app.use(routers);
app.use(VueLatex);
app.use(breadcrumbs, {
    includeComponent: true // {boolean} [includeComponent=false] - Include global breadcrumbs component or not
})
app.mount('#app')
