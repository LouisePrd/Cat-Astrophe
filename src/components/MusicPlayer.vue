<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const audioSource = '/sounds/Space-Ambient-Music.mp3';
const audioPlayer = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);

const playAudio = () => {
  if (audioPlayer.value) {
    audioPlayer.value.play()
      .then(() => {
        isPlaying.value = true;
      })
      .catch(error => {
        console.error("Error playing audio:", error);
      });
  }
};

const pauseAudio = () => {
  if (audioPlayer.value) {
    audioPlayer.value.pause();
    isPlaying.value = false;
  }
};

onBeforeUnmount(() => {
  pauseAudio();
});
</script>

<template>
  <div>
    <audio ref="audioPlayer" :src="audioSource" loop></audio>
    <button @click="playAudio" v-if="!isPlaying">Play</button>
    <button @click="pauseAudio" v-if="isPlaying">Pause</button>
  </div>
</template>
