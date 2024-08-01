<script setup lang="ts">
import router from '../router/index';
import MusicPlayer from '@/components/MusicPlayer.vue';
import { ref , onMounted} from 'vue';

const nameUser = ref<string | null>(sessionStorage.getItem('name'));

const disconnect = () => {
    sessionStorage.removeItem('name');
    nameUser.value = '';
    router.push('/');
}

window.addEventListener('storage', () => {
    nameUser.value = sessionStorage.getItem('name');
});

onMounted(() => {
    nameUser.value = sessionStorage.getItem('name');
});

</script>

<template>
    <header>
        <div class="left-section">
            <a href="/">
                <img src="/props/logo.png" alt="logo">
            </a>
            <h1>Chat-strologie</h1>
            <MusicPlayer />
        </div>
        <nav>
            <ul>
                <li>
                    <router-link to="/">Accueil</router-link>
                </li>
                <li>
                    <router-link to="/astro">Astro</router-link>
                </li>
                <li>
                    <router-link to="/about">A propos</router-link>
                </li>
                <div class="connected" v-if="!nameUser">
                    <li>
                        <router-link to="/login">Connexion</router-link>
                    </li>
                    <li>
                        <router-link to="/register">Inscription</router-link>
                    </li>
                </div>
                <div class="profile" v-if="nameUser">
                    <img id="img-profile" src="/props/profile-icon.png" alt="profile">
                    <router-link to="/profile">{{ nameUser }}</router-link>
                    <li @click="disconnect">Déconnexion</li>
                </div>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    header {
        position: fixed;
        background-color: #5e4a36;
        color: white;
        font-family: var(--font-text);
        font-size: 1.2rem;
        top: 0;
        width: 100%;
        opacity: 0.95;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        box-sizing: border-box;
    }

    .left-section {
        display: flex;
        align-items: center;
    }

    img {
        width: 70px;
        height: 70px;
        margin-right: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    h1 {
        margin: 0;
        font-size: 1.8rem;
    }

    nav, li {
        display: flex;
        align-items: center;
    }

    ul {
        display: flex;
        gap: 2rem;
        margin: 0;
        padding: 0;
        padding-right: 2rem;
    }

    li {
        list-style: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: white;
    }

    .profile {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    #img-profile {
        width: 30px;
        height: 30px;
    }
</style>