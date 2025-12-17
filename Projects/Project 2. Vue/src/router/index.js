import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import AboutView from "../views/AboutView.vue";
import CartView from "../views/CartView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;