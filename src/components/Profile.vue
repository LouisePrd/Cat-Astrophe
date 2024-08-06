<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import { ref } from 'vue';
document.title = 'Profil';
let bio = ref('');
let quote = ref('');
let urlPic = ref('');
let isUrlPic = ref(false);
let randomUrlCat = ref('');

const props = defineProps<{
    username: string;
}>();

const apiUrl = 'https://programming-quotesapi.vercel.app/api/random';

const getQuote = async () => {
    try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        if (result && result.quote) {
            quote.value = `${result.quote} - ${result.author}`;
        } else {
            console.error('Problème pendant la récupération des données :', result.error || 'Données non trouvées');
        }
    } catch (error) {
        console.error('Problème pendant le fetch :', (error as any).message);
    }
};

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
            .from('users')
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

getUser();
getQuote();
getUrlCat();

</script>

<template>
    <div class="allProfile">
        <div class="profil">
            <img v-if="isUrlPic" :src="urlPic" alt="Photo de profil" width="100" height="100">
            <img id="random-img" v-else :src="randomUrlCat" alt="Photo de profil" width="100" height="100">
            <p id="change-pp" v-if="!isUrlPic">Photo de profil aléatoire, cliquez dessus pour ajouter la vôtre</p>
            <p>Nom d'utilisateur<br><span class="username">{{ username }}</span></p>
            <p>Biographie<br><span class="bio">{{ bio }}</span></p>
            <div class="edit">
                <button>Modifier</button>
                <button>Supprimer</button>
            </div>
        </div>
        <div class="right-section">
            <div class="quote">
                <p id="title-quote">Citation inspirante</p>
                <p id="text-quote">{{ quote }}</p>
            </div>
            <div class="game">
                <p id="title-score">Scores des jeux (WIP)</p>
                <ul id="text-score">
                    <li>Jeux 1 : 0</li>
                    <li>Jeux 2 : 0</li>
                    <li>Jeux 3 : 0</li>
                </ul>
            </div>
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

.allProfile {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 5rem;
    gap: 5rem;
    flex-wrap: wrap;
    align-items: stretch;
}

.profil {
    background-color: rgba(128, 128, 128, 0.5);
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(240, 187, 90, 0.2);
    min-height: 20rem;
}

.profil p {
    width: 80%;
    margin: 0.5rem auto;
    border-radius: 0.5rem;
    text-align: left;
}

.username,
.bio {
    color: var(--primary-color);
    text-align: end;
    font-family: var(--font-title);
}

.quote {
    background-color: rgba(128, 128, 128, 0.5);
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(240, 187, 90, 0.2);
    max-width: 25rem;
    min-height: 8rem;
    flex-direction: column;
    text-align: justify;
}


.edit {
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.game {
    background-color: rgba(128, 128, 128, 0.5);
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(240, 187, 90, 0.2);
    min-height: 8rem;
}

.right-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 20rem;
}

#title-quote, #title-score {
    font-family: var(--font-title);
    color: var(--primary-color);
    text-align: center;
    font-size: var(--font-size-xsmall);
    margin-bottom: 1rem;
}

#text-quote, #text-score {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: justify;
    font-size: var(--font-size-xsmall);
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
}

#change-pp {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-xxsmall);
    margin: 0 auto;
    font-style: italic;
}

#random-img {
    cursor: pointer;
}

</style>