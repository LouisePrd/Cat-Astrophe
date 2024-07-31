<script setup lang="ts">
import router from '../router/index';
import MusicPlayer from '@/components/MusicPlayer.vue';
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
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/astro">Astro</router-link>
                </li>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
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

    nav {
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
    }

    a {
        text-decoration: none;
        color: white;
    }
</style>