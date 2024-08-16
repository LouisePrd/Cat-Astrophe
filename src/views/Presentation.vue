<script setup lang="ts">
import { ref } from 'vue';
document.title = 'Aviculture';

let discover = ref(false);

</script>

<template>
    <div class="intro" v-if="!discover">
        <h1 id="question">Avi-quoi ?</h1>
        <img src="/props/jamy.png" alt="jamy">
        <p id="intro"> Il y a quelques mois, je suis tombée sur un documentaire sur les canards thérapeuthiques. Vous
            saviez que 55% des
            personnes interrogées par un sondage en 2022 déclaraient penser souvent à leur santé mentale ? <br>Moi non
            mais
            si on met en correlation ces deux informations, devenir avicultrice, ça sent le métier d'avenir... non ?
            <br><br>Mais c'est quoi l'aviculture ?
        </p>
        <a href="/presentation" @click="discover = true">Découvrir</a>
    </div>

    <div class="discover" v-if="discover">

    </div>

</template>

<style scoped>
#question {
    color: var(--primary-color);
    font-size: var(--font-size-large);
    font-family: var(--font-title);
    text-align: center;
    margin-top: 9rem;
}

#intro {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-small);
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    width: 60%;
    margin: 0 auto;
    background-color: rgba(128, 128, 128, 0.3);
    border-radius: 10px;
    margin-top: 1rem;
}

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 15%;
    margin-top: 1rem;
}


</style>
