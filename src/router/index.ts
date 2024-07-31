import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Home.vue';
import AstroPage from '@/views/Astro.vue';
import AboutPage from '@/views/About.vue';
import ProfilePage from '@/views/Profile.vue';
import '@/assets/main.css';

const routes = [
  { path: '/', component: HomePage },
  { path: '/astro', component: AstroPage },
  { path: '/about', component: AboutPage },
  { path: '/profile', component: ProfilePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
