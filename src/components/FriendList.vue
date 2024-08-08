<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';

const props = defineProps<{
    username: string;
}>();


const getFriendUsernames = async () => {
    try {
        let { data, error } = await supabase
            .from('friendships')
            .select('friend_user(username)')
            .eq('username', props.username)
            .join('user', 'friend_user', 'friend_user.user_id = friendships.friend_id');

        if (error) {
            throw error;
        }

        if (data) {
            friendUsernames.value = data.map(friend => friend.friend_user.username);
        }
    } catch (error) {
        console.error('Problème pendant la récupération des données :', error.message);
    }
};


getFriendsUser();

</script>

<template>


</template>

<style scoped></style>