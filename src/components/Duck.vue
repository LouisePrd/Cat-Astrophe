<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';

const getDataDuck = async () => {

};

getDataDuck();
</script>

<template>
    <div class="mascotte">WIP...</div>
</template>


<style scoped>
.mascotte {
    font-size: 2rem;
    color: white;
    font-family: var(--font-text);
    background-color: rgba(128, 128, 128, 0.6);
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(240, 187, 90, 0.2);
    width: fit-content;
    margin: 0 auto;
    overflow-y: auto;
}

</style>
