<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';

document.title = 'Mascotte';

let tabDuck = ref<any>([]);
let lastAction = ref<string | null>(null);
    let actionsDisabled = ref<{ [key: string]: boolean }>({
    'Nourrir': false,
    'Jouer': false,
    'Donner à boire': false,
    'Mettre au lit': false,
    'Soigner': false,
});

const getDataDuck = async () => {
    try {
        let { data } = await supabase
            .from('duck')
            .select('name, happiness, hunger, thirst, fatigue, health')
            .single();
        if (data) {
            tabDuck.value = data;
        }
    } catch (error) {
        console.error(error);
    }
};

const updateDataDuckDB = async () => {
    try {
        const { error } = await supabase
            .from('duck')
            .update(tabDuck.value)
            .eq('name', tabDuck.value.name);
        if (error) {
            throw error;
        }
    } catch (error) {
        console.error(error);
    }
};


const actions: { [key: string]: () => void } = {
    'Nourrir': () => {
        if (tabDuck.value.hunger > 0 && tabDuck.value.hunger <= 20) {
            tabDuck.value.hunger -= 1;
        } else {
            alert('La mascotte n\'a plus faim');
        }
    },
    'Jouer': () => {
        if (tabDuck.value.happiness >= 0 && tabDuck.value.happiness < 20) {
            tabDuck.value.happiness += 1;
        } else {
            alert('La mascotte n\'a plus envie de jouer');
        }
    },
    'Donner à boire': () => {
        if (tabDuck.value.thirst > 0 && tabDuck.value.thirst <= 20) {
            tabDuck.value.thirst -= 1;
        } else {
            alert('La mascotte n\'a plus soif');
        }
    },
    'Mettre au lit': () => {
        if (tabDuck.value.fatigue > 0 && tabDuck.value.fatigue <= 20) {
            tabDuck.value.fatigue -= 1;
        } else {
            alert('La mascotte n\'a plus sommeil');
        }
    },
    'Soigner': () => {
        if (tabDuck.value.health >= 0 && tabDuck.value.health < 20) {
            tabDuck.value.health += 1;
        } else {
            alert('La mascotte n\'a pas besoin de soins');
        }
    }
};

const handleAction = async (event: MouseEvent) => {
    if (event && event.target) {
        const target = event.target as HTMLElement;
        const actionName = target.textContent || '';
        const action = actions[actionName];

        if (action && !actionsDisabled.value[actionName]) {
            action();
            await updateDataDuckDB();
            actionsDisabled.value[actionName] = true;
        } else {
            alert('Action déjà effectuée ou non reconnue.');
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
        <button @click="handleAction" :disabled="actionsDisabled['Nourrir']">Nourrir</button>
        <button @click="handleAction" :disabled="actionsDisabled['Jouer']">Jouer</button>
        <button @click="handleAction" :disabled="actionsDisabled['Donner à boire']">Donner à boire</button>
        <button @click="handleAction" :disabled="actionsDisabled['Mettre au lit']">Mettre au lit</button>
        <button @click="handleAction" :disabled="actionsDisabled['Soigner']">Soigner</button>
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

.action button:disabled {
    cursor: not-allowed;
    background-color: rgb(104, 78, 78);
    color: rgb(0, 0, 0);
}
</style>
