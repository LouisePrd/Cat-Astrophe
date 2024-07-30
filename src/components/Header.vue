<script setup lang="ts">
import router from '../router/index';
</script>

<template>
    <header>
        <nav>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
            </ul>
        </nav>
    </header>
    <audio autoplay loop>
        <source src="/sounds/Space-Ambient-Music.mp3" type="audio/mpeg">
    </audio>
</template>

<style scoped>
    header {
        position: fixed;
        background-color: #5e4a36;
        color: white;
        text-align: center;
        font-family: var(--font-text);
        font-size: 1rem;
        top: 0;
        width: 100%;
        opacity: 0.9;
    }

    nav {
        display: flex;
        justify-content: right;
        padding-right: 3rem;
    }

    ul {
        display: flex;
        gap: 2rem;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: white;
    }
</style>