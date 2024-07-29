<script setup lang="ts">
import { ref } from 'vue';
let message = 'douteux :)';
let name = ref('');
let showGreeting = ref(false);
let showInput = ref(true);

const addName = () => {
  if (name) {
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
      <label for="mood-oui-rose">Oui en rose</label>
    </div>
    <p>Clique sur l'image pour commencer. (stp)</p>
    <img class="charming-guy" src="/charming-guy.jpg" alt="Un charmant jeune homme" />
  </div>

</template>

<style scoped></style>
