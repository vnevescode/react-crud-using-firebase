import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


import LoginComponent from './pages/Login/LoginComponent.vue'
import HomeComponent from './pages/Home/HomeComponent.vue' 
import ProductsComponent from './pages/Products/ProductsComponent.vue'


const routes = [
    {   path: '/', name:'Login', component: LoginComponent},
    {   path: '/home', name:'Home', component: HomeComponent },
    {   path: '/products', name:'Products', component: ProductsComponent },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
});

const app = createApp(App);

app.use(router);

app.mount('#app');