<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';

const props = defineProps<{
    username: string;
}>();

const getFriendsUser = async () => {
    try {
        let { data, error }: { data: any, error: any } = await supabase
            .from('users')
            .select('username')
            .eq('username', props.username);
    } catch (error) {
        console.error('Problème pendant le fetch :', (error as any).message);
    }
};

</script>

<template>


</template>

<style scoped>

</style>