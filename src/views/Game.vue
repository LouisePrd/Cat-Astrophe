<script setup lang="ts">
import { ref } from 'vue';
import Duck from '@/components/Duck.vue';
document.title = 'Alaska';



</script>

<template>
    <h1>Mascotte du site</h1>
    <Duck />
</template>

<style scoped>
h1 {
    color: var(--primary-color);
    font-size: var(--font-size-large);
    font-family: var(--font-title);
    text-align: center;
    margin-top: 9rem;
}
</style>
