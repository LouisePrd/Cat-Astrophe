import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Home.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: () => import('@/views/About.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
