<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';

const props = defineProps<{
    username: string;
    user_id: string;
}>();

let friendUsernames = ref<{ username: string }[]>([]);

const getFriendUsernames = async () => {
    try {
        let { data, error } = await supabase
            .from('friendships')
            .select(`
                friend_id (
                    username
                )
            `)
            .eq('user_id', props.user_id);

        if (error) {
            throw error;
        }

        if (data) {
            friendUsernames.value = data.map((friend: any) => ({ username: friend.friend_id.username }));
        }
    } catch (error : any) {
        console.error('Problème pendant la récupération des données :', error.message);
    }
};

getFriendUsernames();
</script>


<template>
    <div class="friendlist">
        <h2 id="titleFriendlist">Amis</h2>
        <ul id="list">
            <li v-if="friendUsernames.length === 0">Vous n'avez pas encore d'amis</li>
            <li v-for="friend in friendUsernames" :key="friend.username">{{ friend.username }}</li>
        </ul>
    </div>


</template>

<style scoped>
.friendlist {
    background-color: rgba(128, 128, 128, 0.6);
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(240, 187, 90, 0.2);
    margin: 0 auto;
    overflow-y: auto;
    width: 25rem;
    height: 11rem;
}

#titleFriendlist {
    font-family: var(--font-title);
    color: var(--primary-color);
    text-align: center;
    font-size: var(--font-size-small);
}

#list {
    list-style-type: circle;
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: justify;
    font-size: var(--font-size-xsmall);
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
}
</style>