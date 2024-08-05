import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Home.vue';
import GamePage from '@/views/Game.vue';
import AboutPage from '@/views/About.vue';
import ProfilePage from '@/views/Profile.vue';
import LoginPage from '@/views/connect/Login.vue';
import RegisterPage from '@/views/connect/Register.vue';
import '@/assets/main.css';

const routes = [
  { path: '/', component: HomePage },
  { path: '/game', component: GamePage },
  { path: '/about', component: AboutPage },
  { path: '/profile', component: ProfilePage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
