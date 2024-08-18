<script setup lang="ts">
import { ref } from 'vue';
import Login from '@/components/connect/Login.vue';
import Register from '@/components/connect/Register.vue';

let account = ref('false');

</script>

<template>
    <div v-if="account === 'false'">
        <Login />
        <p class="connect">Vous n'avez pas encore de compte ?<br><a @click="account = 'true'">Inscrivez-vous</a></p>
    </div>
    <div v-else>
        <Register />
        <p class="connect">Vous avez déjà un compte ?<br><a @click="account = 'false'">Connectez-vous</a></p>
    </div>
</template>

<style scoped>
a {
    color: var(--primary-color);
    text-decoration: none;
    cursor: pointer;
}

a:hover {
    color: var(--secondary-color);
}
.connect {
    margin-top: 3.5rem;
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-small);
}
</style>