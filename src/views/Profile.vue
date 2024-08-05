<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
document.title = 'Profil';
let username = sessionStorage.getItem('name');
let bio = '';

const getUser = async () => {
    try {
        let { data, error }: { data: any, error: any } = await supabase
            .from('users')
            .select('username, bio')
            .eq('username', username);
        bio = data[0].bio;
        if (error) throw error;
        console.log(data);
    } catch (error) {
        console.error('Problème pendant le fetch :', (error as any).message);
    }
};

getUser();

</script>

<template>
    <h1>Profil</h1>

    <div v-if="!username">
        <p>Vous n'êtes pas connecté</p>
        <router-link to="/login">Connectez-vous</router-link>
    </div>
    <div class="profil" v-else>
        <p>Nom d'utilisateur : {{ username }}</p>
        <p>Biographie : {{ bio }}</p>
        <div class="edit">
            <button>Modifier</button>
            <button>Supprimer</button>
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

.edit {
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 0 auto;
}

button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    margin: 1rem;
    cursor: pointer;
    font-family: var(--font-text);
    font-size: var(--font-size-xxsmall);
    border-radius: 0.5rem;
}

button:hover {
    background-color: var(--secondary-color);
}

p {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-small);
    margin: 0 auto;
}

.profil {
    background-color: rgba(128, 128, 128, 0.2);
    width: 50%;
    margin: 0 auto;
    padding: 1rem;
}
</style>