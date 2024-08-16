<script setup lang="ts">
import router from '@/router';
import { supabase } from '@/lib/supabaseClient';
import { onMounted, ref } from 'vue';
import bcrypt from 'bcryptjs';

document.title = 'Inscription';

let errorRegister = ref('');
const saltRounds = 10;

const connect = () => {
    if (sessionStorage.getItem('name')) {
        router.push('/');
        setTimeout(() => {
            location.reload();
        }, 100);
    }
};

const register = async (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    try {
        const { data: users, error: selectError } = await supabase
            .from('user')
            .select('username')
            .eq('username', username);

        if (selectError) throw selectError;
        if (users && users.length > 0) {
            errorRegister.value = 'Ce nom d\'utilisateur est déjà pris';
            return;
        }

        errorRegister.value = '';
        const hashedPassword = bcrypt.hashSync(password, saltRounds);

        const { data: insertData, error: insertError } = await supabase
            .from('user')
            .insert([{ username, password: hashedPassword }])
            .select('user_id');

        if (insertError) throw insertError;
        sessionStorage.setItem('name', username);
        if (insertData && insertData.length > 0) {
            sessionStorage.setItem('user_id', insertData[0].user_id);
        }
        connect();

    } catch (error: any) {
        console.error('Problème pendant le fetch :', error.message);
    }
};



</script>

<template>
    <h1>Inscription</h1>
    <p id="useless">(L'inscription n'apporte rien, mais c'est fun le back :))</p>
    <form @submit="register">
        <label for="username">Nom d'utilisateur</label>
        <input type="username" id="username" name="username" required>
        <label for="password">Mot de passe</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">S'inscrire</button>
    </form>
    <p class="error" v-if="errorRegister">{{ errorRegister }}</p>
    <p class="connect">Vous avez déjà un compte ?<br><router-link to="/login">Connectez-vous</router-link></p>
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

.connect {
    margin-top: 3.5rem;
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-small);
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

@media screen and (max-width: 800px) {

    h1 {
        font-size: var(--font-size-medium);
    }

    p,
    a {
        font-size: var(--font-size-xsmall);
    }
}
</style>