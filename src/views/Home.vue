<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HomeConnected from '@/components/HomeConnected.vue';
import HomeNotConnected from '@/components/HomeNotConnected.vue';



const connected = ref(false);

onMounted(() => {
    document.title = 'Accueil';
    if (sessionStorage.getItem('name')) {
        connected.value = true;
    } else {
        connected.value = false;
    }
});

</script>

<template>
    <HomeConnected v-if="connected" />
    <HomeNotConnected v-else />
</template>