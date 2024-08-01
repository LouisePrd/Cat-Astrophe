<script setup lang="ts">
import { ref } from 'vue';

const answer = ref('');
let signTab = ['Bélier', 'Taureau', 'Gémeaux', 'Cancer', 'Lion', 'Vierge', 'Balance', 'Scorpion', 'Sagittaire', 'Capricorne', 'Verseau', 'Poissons'];
let selected = ref('');
let astroFormDisplay = ref(false);

const requestForm = () => {
    astroFormDisplay.value = true;
    let form = document.querySelector('form') as HTMLElement | null;
    let astroForm = document.querySelector('.astro-form') as HTMLElement | null;
    if (form != null && astroForm != null) {
        form.style.display = 'none';
        astroForm.style.display = 'block';
    }
};

</script>

<template>
    <head>
        <title>Astro</title>
    </head>
    <div class="astro">
        <h1>Vous avez dit <br>astrologie ?</h1>
        <form action="" @submit.prevent="requestForm">
            <input type="radio" id="yes" name="answer" value="oui" v-model="answer">
            <label for="yes">OUI</label><br>
            <input type="radio" id="no" name="answer" value="non" v-model="answer">
            <label for="no">NON</label><br>
            <input type="submit" value="Submit">
        </form>

        <div class="astro-form" v-if="astroFormDisplay">
            <p>Quel est votre signe astrologique ?<br>(oui, meme si t'as dit non)</p>
            <select v-model="selected">
                <option value="">Pas de timidité stp</option>
                <option v-for="sign in signTab" :key="sign" :value="sign">{{ sign }}</option>
            </select>
            <span v-if="selected">Sélectionné : {{ selected }}</span>
            <input type="submit" value="Submit">
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

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

input[type="radio"] {
    display: none;
}

label {
    font-family: var(--font-text);
    font-size: var(--font-size-xsmall);
    color: black;
    background-color: var(--primary-color);
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
}

input[type="radio"]:checked+label {
    border: 3px solid rgb(185, 128, 59);
}

input[type="submit"] {
    font-family: var(--font-text);
    font-size: var(--font-size-xsmall);
    color: white;
    background-color: var(--primary-color);
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: rgb(185, 128, 59);
}

.astro-form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    font-size: var(--font-size-small);
    font-family: var(--font-text);
    color: var(--secondary-color);
}

.astro-form input[type="submit"] {
    font-size: var(--font-size-xxsmall);
}
</style>
