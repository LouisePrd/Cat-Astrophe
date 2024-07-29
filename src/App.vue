<script setup lang="ts">
import { ref } from 'vue';

let message = 'douteux :)';
let name = ref('');
let showGreeting = ref(false);
let showInput = ref(true);

const addName = () => {
  if (name.value.trim()) {
    showGreeting.value = true;
    showInput.value = false;
  }
}
</script>

<template>
  <div class="title">
    <h1>Bienvenue sur un nouveau projet<br>aux aboutissants {{ message }} </h1>
    <p class="shame">Parce qu'on change pas une équipe qui gagne... <br>
      L'équipe en question : moi (et je gagne pas beaucoup bref)</p>
  </div>

  <div class="greetings" v-if="showInput">
    <p>C'est quoi ton petit nom ?</p>
    <input class="name" type="text" v-model="name" placeholder="J'écoute">
    <button class="start" @click="addName">Valider</button>
  </div>

  <div v-if="showGreeting" class="greetings-form">
    <h2>Salut {{ name }} !</h2>
    <legend>Content de te voir ici, tu vas bien ?</legend>
    <div>
      <input type="radio" id="mood-oui" name="mood" value="oui" />
      <label for="mood-oui">Oui</label>
    </div>
    <div>
      <input type="radio" id="mood-oui-rose" name="mood" value="oui-rose" />
      <label id="mood-oui-rose" for="mood-oui-rose">Oui en rose</label>
    </div>
    <p>Clique sur l'image pour commencer (stp)</p>
    <img class="charming-guy" src="/charming-guy.jpg" alt="Un charmant jeune homme" />
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
}

h2 {
  font-family: var(--font-title);
  color: var(--primary-color);
  text-align: center;
  font-size: var(--font-size-small);
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

.name {
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
  padding: 0.4rem;
  display: block;
  margin: 0 auto;
  text-align: center;
  margin-top: 1rem;
  cursor: pointer;
}

.greetings-form {
  font-family: var(--font-text);
  font-size: var(--font-size-xsmall);
  color: var(--secondary-color);
  padding: 0.4rem;
  text-align: center;
}

#mood-oui-rose {
  color: rgb(234, 0, 247);
}

.charming-guy {
  max-width: 10%;
}
</style>
