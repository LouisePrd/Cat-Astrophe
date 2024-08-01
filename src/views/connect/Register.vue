<script setup lang="ts">
import router from '@/router';
import { supabase } from '@/lib/supabaseClient';
import { onMounted, ref } from 'vue';
import bcrypt from 'bcryptjs';

document.title = 'Inscription';

let errorRegister = ref('');
const saltRounds = 10;

const connect = () =>  {
    if (sessionStorage.getItem('name')) {
        router.push('/');
    }
};

const register = async (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    try {
        let { data: users, error }: { data: any, error: any } = await supabase
            .from('users')
            .select('username')
            .eq('username', username);
        if (error) throw error;
        if (users.length > 0) {
            errorRegister.value = 'Ce nom d\'utilisateur est déjà pris';
            return;
        } else {
            errorRegister.value = '';
        }
    } catch (error) {
        console.error('Problème pendant le fetch :', (error as any).message);
    }

    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    try {
        let { data, error }: { data: any, error: any } = await supabase
            .from('users')
            .insert([{ username, password: hashedPassword }]);
        sessionStorage.setItem('name', username);
        connect();
    } catch (error) {
        console.error('Problème pendant le fetch :', (error as any).message);
    }
};


</script>

<template>
    <h1>Inscription</h1>
    <form @submit="register">
        <label for="username">Nom d'utilisateur</label>
        <input type="username" id="username" name="username" required>
        <label for="password">Mot de passe</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">S'inscrire</button>
    </form>
    <p class="error" v-if="errorRegister">{{ errorRegister }}</p>
    <p class="connect">Vous avez déjà un compte ? <router-link to="/login">Connectez-vous</router-link></p>
</template>

<style scoped>
h1 {
    color: var(--primary-color);
    font-size: var(--font-size-large);
    font-family: var(--font-title);
    text-align: center;
    margin-top: 8rem;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-color);
    font-family: var(--font-text);
}

input[type="radio"] {
    display: none;
}

.connect {
    margin-top: 3rem;
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-small);
}

a {
    color: var(--primary-color);
    text-decoration: none;
}

.error {
    color: rgb(255, 255, 255);
    font-family: var(--font-text);
    font-size: var(--font-size-xsmall);
    text-align: center;
}
</style>