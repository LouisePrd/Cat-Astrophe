<script setup lang="ts">
import router from '../router/index';
import MusicPlayer from '@/components/MusicPlayer.vue';
import { ref, onMounted } from 'vue';

const nameUser = ref<string | null>(sessionStorage.getItem('name'));

const disconnect = () => {
    sessionStorage.removeItem('name');
    nameUser.value = '';
    router.push('/');
}

const profileRedirect = () => {
    router.push('/profile');
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
                <img src="/props/logo2.png" alt="logo">
            </a>
            <a href="/">
                <h1 id="header-title">Cat-astrophe</h1>
            </a>
            <MusicPlayer />
        </div>
        <nav>
            <ul>
                <li id="home">
                    <router-link to="/">Accueil</router-link>
                </li>
                <li>
                    <router-link to="/games">Canards</router-link>
                </li>
                <li>
                    <router-link to="/culture">Avi-quoi</router-link>
                </li>
                <li>
                    <router-link to="/about">A propos</router-link>
                </li>
                <div class="connected" v-if="!nameUser">
                    <router-link to="/connect">Connexion</router-link>
                </div>
                <div class="profile" v-if="nameUser">
                    <img id="img-profile" src="/props/profile-icon.png" alt="profile" @click="profileRedirect">
                    <router-link to="/profile">{{ nameUser }}</router-link>
                    <li class="disconnect" @click="disconnect">Déconnexion</li>
                </div>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
@keyframes color-change {
    0% {
        color: #420B08;
    }

    100% {
        color: var(--secondary-color);
    }
}

header {
    position: fixed;
    background-color: #c79494;
    color: #420B08;
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
    overflow-x: hidden;
    margin: 0;
    left: 0;
}

img {
    width: 55px;
    height: 50px;
    margin-right: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
}

h1:hover {
    color: var(--secondary-color);
    animation: color-change 0.5s;
}

nav,
li {
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

li:hover {
    text-decoration: underline;
}

a {
    text-decoration: none;
    color: #420B08;
}

.left-section {
    display: flex;
    align-items: center;
    box-sizing: border-box;
}

.profile {
    display: flex;
    align-items: center;
}

.disconnect {
    margin-left: 1rem;
    cursor: pointer;
}

#img-profile {
    width: 30px;
    height: 30px;
    cursor: pointer;
}

#header-title {
    margin: 0;
    font-size: var(--font-size-small);
    font-family: var(--font-title);
}

/* Media queries */

@media screen and (max-width: 800px) {

    h1,
    li {
        font-size: 0.8rem;
    }

    img {
        width: 35px;
        height: 35px;
    }

    p {
        font-size: 0.8rem;
    }

    #home {
        display: none;
    }

    .profile {
        gap: 0.5rem;
    }

    #header-title {
        font-size: var(--font-size-xxxsmall);
    }

}
</style>