<script setup lang="ts">
import Profile from '@/components/Profile.vue';
import FriendList from '@/components/FriendList.vue';
import { ref } from 'vue';
document.title = 'Profil';
const username = ref<string>(sessionStorage.getItem('name') || '');

</script>

<template>
    <h1>Profil</h1>

    <div v-if="!username">
        <p>Vous n'êtes pas connecté</p>
        <router-link to="/login">Connectez-vous</router-link>
    </div>
    <div v-else>
        <Profile :username="username" />
        <FriendList :username="username" />
    </div>
</template>

<style scoped>
h1 {
    color: var(--primary-color);
    font-size: var(--font-size-large);
    font-family: var(--font-title);
    text-align: center;
    margin-top: 8rem;
}

p {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-small);
    margin: 0 auto;
}
</style>