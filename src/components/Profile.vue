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
let confirmDelete = ref(false);
let randomUrlCat = ref('');
const apiUrlCat = 'https://api.thecatapi.com/v1/images/search';

const disconnect = () => {
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('user_id');
    router.push('/');
    setTimeout(() => {
        location.reload();
    }, 100);
}

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
            const userData = data[0];
            if (userData.bio) {
                bio.value = userData.bio;
            } else {
                userData.value = 'Aucune biographie';
            }
            if (userData.urlPic) {
                urlPic.value = userData.urlPic;
            }
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

const deleteProfile = async () => {
    alert('Êtes-vous sûr de vouloir supprimer votre profil ? Cliquez une nouvelle fois pour confirmer');
    if (!confirmDelete.value) {
        confirmDelete.value = true;
        return;
    }
    else {
        try {
            let { error }: { error: any } = await supabase
                .from('user')
                .delete()
                .eq('username', props.username);
            if (error) throw error;
            disconnect();
            router.push('/');
        } catch (error) {
            console.error('Problème pendant le fetch :', (error as any).message);
        }
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
        <img v-if="isUrlPic" :src="urlPic" alt="Photo de profil" width="90" height="90">
        <img id="random-img" v-else :src="randomUrlCat" alt="Photo de profil" width="90" height="90" @click="clickPic">
        <p id="change-pp" v-if="!isUrlPic">Photo de profil aléatoire, cliquez dessus pour ajouter la vôtre</p>
        <p>Nom d'utilisateur<br><span class="username">{{ username }}</span></p>
        <p>Biographie<br><span class="bio">{{ bio }}</span></p>
        <div class="edit">
            <button @click="clickPic">Modifier</button>
            <button @click="deleteProfile">Supprimer</button>
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
    margin-bottom: 0;
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

#change-pp {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-xxsmall);
    margin: 0 auto;
    font-style: italic;
    margin-bottom: 2rem;
    margin-top: 1rem;
}

#random-img {
    cursor: pointer;
}

.profil {
    background-color: rgba(128, 128, 128, 0.6);
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(240, 187, 90, 0.2);
    height: 26rem;
    max-width: 35rem;
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
    max-height: 4.5rem;
    overflow-y: auto;
    text-align: justify;
    border: 2px solid var(--primary-color);
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin-bottom: 0.2rem;
    margin-top: 0.3rem;
}

.edit {
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 0;
}
</style>