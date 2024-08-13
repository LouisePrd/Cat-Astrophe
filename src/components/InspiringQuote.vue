<script setup lang="ts">
import { ref } from 'vue';

const apiUrl = 'https://programming-quotesapi.vercel.app/api/random';
let quote = ref('');
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

getQuote();

</script>

<template>
    <div class="quote">
        <p id="title-quote">Citation aléatoire</p>
        <p id="text-quote">{{ quote }}</p>
    </div>

</template>

<style scoped>
.quote {
    background-color: rgba(128, 128, 128, 0.5);
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(240, 187, 90, 0.2);
    max-width: 34rem;
    text-align: justify;
    height: 10rem;
    overflow-y: auto;
}

#title-quote {
    font-family: var(--font-title);
    color: var(--primary-color);
    text-align: center;
    font-size: var(--font-size-small);
    margin-bottom: 1rem;
}

#text-quote {
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

</style>