<script setup lang="ts">
import { ref } from 'vue';
let name = ref('');
let showGreeting = ref(false);
let showInput = ref(true);
let showShame = ref(true);

const addName = () => {
    if (name.value.trim()) {
        showGreeting.value = true;
        showInput.value = false;
        showShame.value = false;
    }
}

</script>

<template>
    <div class="title">
        <h1>Bienvenue !</h1>
        <p class="shame" v-if="showShame">Encore un projet douteux, parce qu'on change pas une équipe qui gagne... <br>
            L'équipe en question : moi (et je gagne pas beaucoup bref)</p>
    </div>

    <div class="greetings" v-if="showInput">
        <p>C'est quoi ton petit nom ?</p>
        <input class="name" type="text" v-model="name" placeholder="J'écoute">
        <button class="start" @click="addName">Valider</button>
    </div>

    <div v-if="showGreeting" class="greetings-form">
        <p>Joli nom ! <br> Content de te voir ici {{ name }}. Tu vas bien ?</p>
        <input class="share" type="text" placeholder="Des choses à partager">
        <button class="start" @click="createDots(10)">Partager</button>
    </div>


</template>

<style scoped>
html {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}


h1 {
    font-family: var(--font-title);
    color: var(--primary-color);
    text-align: center;
    font-size: var(--font-size-large);
    margin-top: 8rem;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

p {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-small);
}

.name,
.share {
    font-family: var(--font-text);
    font-size: var(--font-size-xsmall);
    color: var(--secondary-color);
    background-color: transparent;
    border: 2px solid var(--secondary-color);
    border-radius: 5px;
    padding: 0.4rem;
    display: block;
    margin: 0 auto;
    text-align: center;
}

.shame {
    animation: fadeIn 10s;
    font-size: var(--font-size-xxsmall);
}

.start {
    font-family: var(--font-text);
    font-size: var(--font-size-xsmall);
    color: var(--secondary-color);
    background-color: transparent;
    border: 2px solid var(--secondary-color);
    border-radius: 15px;
    padding-right: 1rem;
    padding-left: 1rem;
    display: block;
    margin: 0 auto;
    text-align: center;
    margin-top: 1.5rem;
    cursor: pointer;
}

.start:hover {
    background-color: var(--secondary-color);
    color: rgb(0, 0, 0);
    transition: 0.3s;
}

@keyframes blink {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>
