<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';

let user_id = ref<number | null>(Number(sessionStorage.getItem('user_id')));
let duck_name = ref<string | null>(null);
let found = ref<boolean>(false);
let arrayStatsName = ref<string[]>(['Bonheur', 'Faim', 'Soif', 'Fatigue', 'Santé']);
let arrayStats = ref<number[]>([]);

const getDataDuck = async () => {
    try {
        let { data, error } = await supabase
            .from('duck')
            .select('name, happiness, hunger, thirst, fatigue, health')
            .eq('owner_id', user_id.value);

        if (error) {
            console.error('Problème pendant la récupération des données :', error.message);
        } else if (data && data.length > 0) {
            duck_name.value = data[0].name;
            arrayStats.value = [
                data[0].happiness,
                data[0].hunger,
                data[0].thirst,
                data[0].fatigue,
                data[0].health,
            ];
            found.value = true;
        } else {
            console.log('Aucune donnée trouvée');
        }
    } catch (error) {
        console.error('Problème pendant le fetch :', (error as any).message);
    }
};

getDataDuck();
</script>

<template>
    <h1>Mes canards</h1>
    <div class="duck-profile" v-if="found">
        <p>🦆</p>
        <h2>{{ duck_name }}</h2>
        <div v-for="(stat, index) in arrayStats" :key="index">
            <p>{{ arrayStatsName[index] }} : {{ stat }}</p>
        </div>
    </div>

    <div v-else>
        <p>Vous n'avez pas encore de canard</p>
    </div>
</template>

<style scoped>
h1 {
    color: var(--primary-color);
    font-size: var(--font-size-large);
    font-family: var(--font-title);
    text-align: center;
    margin-bottom: 6rem;
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
    margin: 0 auto;
    box-shadow: 0 0 1rem rgba(240, 187, 90, 0.2);
    width: fit-content;
}
</style>
