<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import { ref } from 'vue';
import router from '@/router/index';

const props = defineProps<{
    username: string;
}>();

document.title = 'Profil';
let bio = ref('');
let urlPic = ref('');
let isUrlPic = ref(false);
let randomUrlCat = ref('');
const apiUrlCat = 'https://api.thecatapi.com/v1/images/search';

const getUrlCat = async () => {
    try {
        const response = await fetch(apiUrlCat);
        const result = await response.json();
        if (result && result[0].url) {
            randomUrlCat.value = result[0].url;
        } else {
            console.error('Problème pendant la récupération des données :', result.error || 'Données non trouvées');
        }
    } catch (error) {
        console.error('Problème pendant le fetch :', (error as any).message);
    }
};

const getUser = async () => {
    try {
        let { data, error }: { data: any, error: any } = await supabase
            .from('user')
            .select('username, bio')
            .eq('username', props.username);
        if (data) {
            bio.value = data[0].bio;
            urlPic.value = data[0].urlPic;
            if (urlPic.value) {
                isUrlPic.value = true;
            }
        } else {
            console.error('Problème pendant la récupération des données :', error);
        }
    } catch (error) {
        console.error('Problème pendant le fetch :', (error as any).message);
    }
};

const clickPic = () => {
    router.push('/edit-profile');
};

getUser();
getUrlCat();

</script>

<template>
        <div class="profil">
            <img v-if="isUrlPic" :src="urlPic" alt="Photo de profil" width="100" height="100">
            <img id="random-img" v-else :src="randomUrlCat" alt="Photo de profil" width="100" height="100" @click="clickPic">
            <p id="change-pp" v-if="!isUrlPic">Photo de profil aléatoire, cliquez dessus pour ajouter la vôtre</p>
            <p>Nom d'utilisateur<br><span class="username">{{ username }}</span></p>
            <p>Biographie<br><span class="bio">{{ bio }}</span></p>
            <div class="edit">
                <button>Modifier</button>
                <button>Supprimer</button>
            </div>
        </div>
</template>

<style scoped>

p {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-small);
    margin: 0 auto;
}


ul {
    list-style-type: none;
    padding-left: 0;
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
    color: black;
}

img {
    border-radius: 50%;
    margin: 0 auto;
    display: block;
    margin-bottom: 0.5rem;
}

.profil {
    background-color: rgba(128, 128, 128, 0.5);
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(240, 187, 90, 0.2);
    height: 27rem;
    max-width: 32rem;  
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

.profil p {
    width: 90%;
    border-radius: 0.5rem;
    text-align: left;
}

.username,
.bio {
    color: var(--primary-color);
    margin: 0 auto;
    margin-bottom: 0.5rem;
    display: block;
}

.bio {
    max-height: 5rem;
    overflow-y: auto;
    text-align: justify;
    border: 2px solid var(--primary-color);
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
}

.edit {
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 0;
}


#change-pp {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-xxsmall);
    margin: 0 auto;
    font-style: italic;
    width: 60%;
    margin-bottom: 1rem;
}

#random-img {
    cursor: pointer;
}

</style>