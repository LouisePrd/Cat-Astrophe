<script setup lang="ts">
import { ref } from 'vue';
import HomeConnected from '@/components/HomeConnected.vue';
import HomeNotConnected from '@/components/HomeNotConnected.vue';
let connected = ref(false);
</script>

<template>

    <head>
        <title>Accueil</title>
    </head>>

    <HomeConnected v-if="connected" />
    <HomeNotConnected v-else />


</template>



<style scoped>

</style>
