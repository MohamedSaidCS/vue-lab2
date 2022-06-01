import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('./components/HomeComponent.vue'),
    },
    {
        path: '/users',
        component: () => import('./components/UsersComponent.vue'),
        children: [
            {
                path: ':id',
                component: () => import('./components/UserDetails.vue'),
            },
            {
                path: 'create',
                component: () => import('./components/CreateUser.vue'),
            },
            {
                path: ':id/edit',
                component: () => import('./components/EditUser.vue'),
            }
        ],
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


createApp(App).use(router).mount('#app')
