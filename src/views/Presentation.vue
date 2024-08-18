<script setup lang="ts">
import { ref } from 'vue';
document.title = 'Aviculture';

let discover = ref(false);

</script>

<template>
    <div class="intro" v-if="!discover">
        <h1 id="question">Avi-quoi ?</h1>
        <img id="jamy" src="/props/jamy.png" alt="jamy">
        <p id="intro"> Il y a quelques mois, je suis tombée sur un documentaire sur les canards thérapeuthiques. Vous
            saviez que 55% des
            personnes interrogées par un sondage en 2022 déclaraient penser souvent à leur santé mentale ? <br>Moi non
            mais
            si on met en correlation ces deux informations, devenir avicultrice, ça sent le métier d'avenir... non ?
            <br><br>Mais c'est quoi l'aviculture ?
        </p>
        <a @click="discover = true">Découvrir</a>
    </div>

    <div class="discover" v-if="discover">
        <h1>L'aviculture</h1>
        <p>Du latin avis (« oiseau ») et culture, on parle d'aviculture dans le cas d'élevage d'oiseaux ou de volaille.
            En général, ces animaux sont élevés pour être abattus et consommés ensuite.<br>
            Mais ici, on va parler des canards thérapeuthiques alors pas question de les manger hein 😾</p>

        <div class="duck-dev">
            <p>En tant que développeur, on a tous des souvenirs de ces sombres heures de débogage, de schémas sur
                papier
                et de reset mental pour reprendre le problème à 0. La méthode du canard, ça vous parle ? Si si, la
                mthode qui consiste à parler à un canard en lui expliquant notre problème et en espérant que la solution
                nous vienne comme une épiphanie ou que l'incohérence saute finalement aux yeux. La technique en image
                ci-jointe.</p>
            <img id="duck-dev-img" src="/props/duck-method.jpg" alt="duck-dev">
        </div>
    </div>

</template>

<style scoped>
a {
    font-family: var(--font-text);
    font-size: var(--font-size-small);
    color: var(--secondary-color);
    background-color: transparent;
    border: 2px solid var(--secondary-color);
    border-radius: 15px;
    padding-right: 1rem;
    padding-left: 1rem;
    display: block;
    margin: 0 auto;
    text-align: center;
    margin-top: 2rem;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 2rem;
    width: fit-content;
}

a:hover {
    background-color: var(--secondary-color);
    color: rgb(0, 0, 0);
    transition: 0.3s;
}

h1 {
    color: var(--primary-color);
    font-size: var(--font-size-medium);
    font-family: var(--font-title);
    text-align: center;
    margin-top: 8rem;
}

p {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-small);
    margin: 0 auto;
    background-color: rgba(128, 128, 128, 0.3);
    border-radius: 10px;
    margin-top: 1rem;
    padding: 1rem;
}

#jamy {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
    margin-top: 1rem;
}

.intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    margin-top: 1rem;
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
    background-color: rgba(128, 128, 128, 0.3);
    border-radius: 10px;
}

.discover {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
}

.duck-dev {
    display: flex;
    margin: 0 auto;
    margin-top: 2rem;
    flex-direction: row;
    width: 60%;
    margin-bottom: 5rem;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.duck-dev p {
    margin: 0;
    flex: 1;
}

#duck-dev-img {
    width: 30%;
    border-radius: 5px;
    height: auto;
    flex-shrink: 0;
    max-width: 100%;
    height: auto;
}

#duck-dev-img:hover {
    transform: rotate(10deg);
    transition: transform 0.5s ease-in-out;
}

.discover p {
    width: 80%;
}


@media (max-width: 1000px) {
    #duck-dev-img {
        width: 50%;
    }

    .duck-dev {
        flex-direction: column;
    }
}

</style>