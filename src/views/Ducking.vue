<script setup lang="ts">
import { ref } from 'vue';
document.title = 'Aviculture';



</script>

<template>
    <h1 id="question">Avi-quoi ?</h1>
    <p id="intro">En codant, j'ai réflechi à mes perspectives d'avenir. Le test de lit était une option intéressante
        mais
        compliqué de faire ses 10 000 pas avec ça. Le dogsitting ? Parfois, les chiens,
        c'est comme les enfants mais en pires. <br>
        J'ai vu un documentaire sur les canards thérapeuthes il y a quelques mois. Vous saviez que 55% des
        personnes interrogées par un sondage en 2022 déclaraient penser souvent à leur santé mentale ? Moi non mais
        si on met en correlation ces deux stats, devenir avicultrice, ça c'est un métier d'avenir... non ?
        <br><br>Mais c'est quoi l'aviculture ?</p>


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
    margin-top: 3rem;
}
</style>
