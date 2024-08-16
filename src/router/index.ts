import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Home.vue';
import GamePage from '@/views/Mascot.vue';
import AboutPage from '@/views/About.vue';
import ProfilePage from '@/views/profile/ProfilePage.vue';
import Connect from '@/views/Connect.vue';
import EditPage from '@/views/profile/EditProfile.vue';
import Intro from '@/views/Presentation.vue';
import '@/assets/main.css';

const routes = [
  { path: '/', component: HomePage },
  { path: '/games', component: GamePage },
  { path: '/about', component: AboutPage },
  { path: '/profile', component: ProfilePage },
  { path: '/connect', component: Connect },
  { path: '/edit-profile', component: EditPage },
  { path: '/culture', component: Intro },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
