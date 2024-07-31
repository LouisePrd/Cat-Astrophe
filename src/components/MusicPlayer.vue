<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const audioSource = '/sounds/Space-Ambient-Music.mp3';
const audioPlayer = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);

const playAudio = () => {
    alert('playAudio');
    if (audioPlayer.value) {
        audioPlayer.value.play()
            .then(() => {
                isPlaying.value = true;
                console.log("Audio is playing");
            })
            .catch(error => {
                console.error("Error playing audio:", error);
            });
    }
};

const pauseAudio = () => {
    alert('pauseAudio');
    if (audioPlayer.value) {
        audioPlayer.value.pause();
        isPlaying.value = false;
        console.log("Audio is paused");
    }
};

onMounted(() => {
    audioPlayer.value = new Audio(audioSource);
});

onBeforeUnmount(() => {
    if (audioPlayer.value) {
        audioPlayer.value.pause();
        audioPlayer.value = null;
    }
});
</script>

<template>
    <div>
        <img src="/props/play.png" alt="Play/Pause" @click="isPlaying ? pauseAudio() : playAudio()">
    </div>
</template>

<style scoped>
img {
    width: 50px;
    height: auto;
    cursor: pointer;
    margin-left: 1rem;
    margin-top: 5px;
}
</style>
