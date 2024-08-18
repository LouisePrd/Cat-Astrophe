<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import router from '@/router';
import bcrypt from 'bcryptjs';
import { ref } from 'vue';
document.title = 'Connexion';

let errorRegister = ref('');

const login = async (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    try {
        const { data, error } = await supabase.from('user').select('password, user_id').eq('username', username);
        if (data && data.length === 0) {
            errorRegister.value = 'Nom d\'utilisateur ou mot de passe incorrect';
            return;
        }
        const hash = data && data.length > 0 ? data[0].password : null;
        if (bcrypt.compareSync(password, hash)) {
            sessionStorage.setItem('name', username);
            if (data && data.length > 0) {
                sessionStorage.setItem('user_id', data[0].user_id);
            }
            router.push('/');
            setTimeout(() => {
                location.reload();
            }, 100);
        } else {
            errorRegister.value = 'Nom d\'utilisateur ou mot de passe incorrect';
        }
    } catch (error) {
        errorRegister.value = 'Une erreur est survenue';
    }
};


</script>

<template>
    <h1>Connexion</h1>
    <p id="useless">(La connexion n'apporte rien, mais c'est fun le back :))</p>
    <form @submit="login">
        <label for="username">Nom d'utilisateur</label>
        <input type="username" id="username" name="username" required>
        <label for="password">Mot de passe</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">Se Connecter</button>
    </form>
    <p class="error" v-if="errorRegister">{{ errorRegister }}</p>

</template>

<style scoped>
h1 {
    color: var(--primary-color);
    font-size: var(--font-size-large);
    font-family: var(--font-title);
    text-align: center;
    margin-top: 9rem;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-color);
    font-family: var(--font-text);
    font-size: var(--font-size-small);
    margin-top: 4rem;
}

input[type="radio"] {
    display: none;
}

a {
    color: var(--primary-color);
    text-decoration: none;
}

#useless {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-small);
    margin: 0 auto;
}

.error {
    color: rgb(255, 255, 255);
    font-family: var(--font-text);
    font-size: var(--font-size-xsmall);
    text-align: center;
}



</style>