<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';
import router from '../../router/index';

document.title = 'Modifier le profil';
const user_id = sessionStorage.getItem('user_id');

let bio = ref('');
let errorRegister = ref('');

const getBioUser = async () => {
    try {
        let { data, error }: { data: any, error: any } = await supabase
            .from('user')
            .select('bio')
            .eq('user_id', user_id);
        if (error) throw error;
        if (data && data.length > 0) {
            bio.value = data[0].bio;
        }
    } catch (error) {
        console.error('Problème pendant le fetch :', (error as any).message);
    }
};

const testPP = async (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const file = formData.get('avatar') as File;
    
};



const editBio = async (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const bio = formData.get('bio') as string;

    try {
        let { data, error }: { data: any, error: any } = await supabase
            .from('user')
            .update({ bio })
            .eq('user_id', user_id);
        if (error) throw error;
        router.push('/profile');
    } catch (error) {
        console.error('Problème pendant le fetch :', (error as any).message);
    }
};

getBioUser();

</script>

<template>
    <h1>Modifier le profil</h1>
    <form @submit="testPP">
        <label for="avatar">Photo de profil</label>
        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">
        <button @click="">Changer la photo de profil</button>
    </form>
    <form @submit="editBio">
        <label id="bio-label" for="bio">Bio</label>
        <textarea id="bio" name="bio" v-model="bio">{{ bio }}</textarea>
        <button type="submit">Enregistrer</button>
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


label {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-small);
    margin: 0 auto;
    margin-bottom: 0.5rem;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    display: block;
    margin: 0 auto;
    margin-top: 1rem;
}

button:hover {
    background-color: var(--secondary-color);
    color: black;
}

textarea {
    width: 40%;
    height: 3rem;
    border-radius: 0.5rem;
    font-family: var(--font-text);
    font-size: var(--font-size-xsmall);
    padding: 0.5rem;
    margin: 0 auto;
    background-color: var(--secondary-color);
}

input[type="file"] {
    display: block;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    color: var(--secondary-color);
}

#bio-label {
    margin-top: 3rem;
}
</style>