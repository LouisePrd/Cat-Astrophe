<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HomeConnected from '@/components/HomeConnected.vue';
import HomeNotConnected from '@/components/HomeNotConnected.vue';
import { supabase } from '@/lib/supabaseClient';

const connected = ref(false);

async function test() {
    const { data } = await supabase.from('User').select() 
    console.log(data);
}

onMounted(() => {
    document.title = 'Accueil';
    if (sessionStorage.getItem('name')) {
        connected.value = true;
    } else {
        connected.value = false;
    }
    test();
});

</script>

<template>
    <HomeConnected v-if="connected" />
    <HomeNotConnected v-else />
</template>



<style scoped></style>
