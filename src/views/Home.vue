<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HomeConnected from '@/components/HomeConnected.vue';
import HomeNotConnected from '@/components/HomeNotConnected.vue';
import { supabase } from '@/lib/supabaseClient';

const connected = ref(false);


const test = async () => {
    try {
        let { data: users, error }: { data: any, error: any } = await supabase
            .from('users')
            .select('*');
        if (error) throw error;
        console.log(users);
    } catch (error) {
        console.error('Probleme pendant le fetch :', (error as any).message);
    }
};


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
