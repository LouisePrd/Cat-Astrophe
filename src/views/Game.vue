<script setup lang="ts">
import { ref } from 'vue';
import Duck from '@/components/Duck.vue';
document.title = 'Alaska';



</script>

<template>
    <h1 id="question">Et si on partait vraiment en Alaska ?</h1>
    <Duck />

</template>

<style scoped>
#question {
    color: var(--primary-color);
    font-size: var(--font-size-xxxsmall);
    font-family: var(--font-title);
    text-align: center;
    margin-top: 6.5rem;
    font-style: italic;
}
</style>
