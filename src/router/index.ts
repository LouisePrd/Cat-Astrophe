import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Home.vue';
import GamePage from '@/views/Game.vue';
import AboutPage from '@/views/About.vue';
import ProfilePage from '@/views/profile/ProfilePage.vue';
import LoginPage from '@/views/connect/Login.vue';
import RegisterPage from '@/views/connect/Register.vue';
import EditPage from '@/views/profile/EditProfile.vue';
import '@/assets/main.css';

const routes = [
  { path: '/', component: HomePage },
  { path: '/games', component: GamePage },
  { path: '/about', component: AboutPage },
  { path: '/profile', component: ProfilePage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/edit-profile', component: EditPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
