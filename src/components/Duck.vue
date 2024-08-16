<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';

let tabDuck = ref<any>([]);

const getDataDuck = async () => {
    try {
        let { data, error } = await supabase
            .from('duck')
            .select('name, happiness, hunger, thirst, fatigue, health')
            .single();
            console.log(data);
            if (data) {
                tabDuck.value = data;
            }
    } catch (error) {
        console.error(error);
    }
};

const updateDataDuck = async (event: MouseEvent) => {
    if (event && event.target) {
        const target = event.target as HTMLElement;
        switch (target.textContent) {
            case 'Nourrir':
                if (tabDuck.value.hunger > 0 && tabDuck.value.hunger < 20) {
                    tabDuck.value.hunger -= 1;
                }
                break;
            case 'Jouer':
                if (tabDuck.value.happiness > 0 && tabDuck.value.happiness < 20) {
                    tabDuck.value.happiness += 1;
                }
                break;
            case 'Donner à boire':
                if (tabDuck.value.thirst > 0 && tabDuck.value.thirst <= 20) {
                    tabDuck.value.thirst -= 1;
                }
                break;
            case 'Mettre au lit':
                if (tabDuck.value.fatigue > 0 && tabDuck.value.fatigue < 20) {
                    tabDuck.value.fatigue -= 1;
                }
                break;
            case 'Soigner':
                if (tabDuck.value.health > 0 && tabDuck.value.health < 20) {
                    tabDuck.value.health += 1;
                }
                break;
        }
    }
};

getDataDuck();
</script>

<template>
    <div class="mascotte">
        <h2>✨ {{ tabDuck.name }} ✨</h2>
        <p id="img-tom">🦆</p>

        <p>Santé : {{ tabDuck.health }}</p>
        <p>Bonheur : {{ tabDuck.happiness }}</p>
        <p>Faim : {{ tabDuck.hunger }}</p>
        <p>Soif : {{ tabDuck.thirst }}</p>
        <p>Fatigue : {{ tabDuck.fatigue }}</p>
    </div>

    <div class="action">
        <button @click="updateDataDuck">Nourrir</button>
        <button @click="updateDataDuck">Jouer</button>
        <button @click="updateDataDuck">Donner à boire</button>
        <button @click="updateDataDuck">Mettre au lit</button>
        <button @click="updateDataDuck">Soigner</button>
    </div>
    
</template>


<style scoped>
h2 {
    color: var(--primary-color);
    font-size: var(--font-size-medium);
    font-family: var(--font-title);
    text-align: center;
    color: white;
    margin-bottom: 0.5rem;
}

p {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-small);
    color: white;
    margin: 0 auto;
}

#img-tom {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.mascotte {
    display: flex;
    flex-direction: column;
}

.action {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 3rem;
}

.action button {
    color: var(--secondary-color);
    background-color: transparent;
    border: 2px solid var(--secondary-color);
    border-radius: 15px;
    padding-right: 1rem;
    padding-left: 1rem;
    cursor: pointer;
    font-family: var(--font-text);
    font-size: var(--font-size-small);
}

.action button:hover {
    background-color: var(--secondary-color);
    color: rgb(0, 0, 0);
    transition: 0.3s;
}

</style>
