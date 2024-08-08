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
    audioPlayer.value.volume = 0.3;
    }
};

const pauseAudio = () => {
    if (audioPlayer.value) {
        audioPlayer.value.pause();
        isPlaying.value = false;
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
        <img id="ambient-sound" src="/props/play.png" alt="Play/Pause" @click="isPlaying ? pauseAudio() : playAudio()">
    </div>
</template>

<style scoped>
img {
    width: 40px;
    height: auto;
    cursor: pointer;
    margin-left: 1rem;
    margin-top: 5px;
}

@media screen and (max-width: 800px) {
    img {
        width: 30px;
    }
}
</style>
