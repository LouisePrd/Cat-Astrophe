<script setup lang="ts">
import Profile from '@/components/Profile.vue';
import FriendList from '@/components/FriendList.vue';
import InspiringQuote from '@/components/InspiringQuote.vue';
import Scores from '@/components/Scores.vue';
import { ref } from 'vue';
document.title = 'Profil';
const username = ref<string>(sessionStorage.getItem('name') || '');
const user_id = ref<string>(sessionStorage.getItem('user_id') || '');

</script>

<template>
    <h1>Profil</h1>

    <div v-if="!username">
        <p>Vous n'êtes pas connecté</p>
        <router-link to="/login">Connectez-vous</router-link>
    </div>
    <div v-else class="profile-container">
        <div class="left-container">
            <Profile :username="username" />
        </div>

        <div class="right-container">
            <InspiringQuote />
            <div class="sub-right-container">
                <FriendList :username="username" :user_id="user_id" />
            </div>
        </div>

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

.profile-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-bottom: 5rem;
    flex-wrap: wrap;
}

.right-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.sub-right-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.sub-right-container>div {
    margin: 0 auto;
}

@media screen and (max-width: 800px) {
    .profile-container {
        flex-direction: column;
    }

    .sub-right-container {
        flex-direction: row;
        gap: 1rem;
        width: 60%;
        margin: 0 auto;
    }
}

@media screen and (max-width: 500px) {
    .sub-right-container {
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        margin: 0 auto;
    }
    
}
</style>