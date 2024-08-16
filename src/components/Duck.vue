<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';

let user_id = ref<number | null>(Number(sessionStorage.getItem('user_id')));
let duck_name = ref<string | null>(null);
let found = ref<boolean>(false);

let arrayDucksName = ref<string[]>(['Bonheur', 'Faim', 'Soif', 'Fatigue', 'Santé']);
const arrayDucks = ref<{ name: string; stats: number[] }[]>([]);

const getDataDuck = async () => {

};

getDataDuck();
</script>

<template>
    <div class="canards" v-if="found"></div>
</template>


<style scoped>
h1 {
    color: var(--primary-color);
    font-size: var(--font-size-large);
    font-family: var(--font-title);
    text-align: center;
    margin-bottom: 5.5rem;
    margin-top: 3rem;
}

h2 {
    color: var(--secondary-color);
    font-size: var(--font-size-xxsmall);
    font-family: var(--font-title);
    text-align: center;
    margin-bottom: 1.5rem;
}

p {
    color: var(--primary-color);
    font-size: var(--font-size-small);
    font-family: var(--font-text);
    text-align: center;
    margin: 0 auto;
}

.duck-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(128, 128, 128, 0.5);
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 0 1rem rgba(240, 187, 90, 0.2);
    width: fit-content;
}

#voir {
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
    text-decoration: none;
}

#voir:hover {
    background-color: var(--secondary-color);
    color: black;
}

.canards {
    width: 70%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 0 auto;
}

</style>
