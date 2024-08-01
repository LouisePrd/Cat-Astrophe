<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import bcrypt from 'bcryptjs';
document.title = 'Connexion';

let errorRegister = '';

const saltRounds = 10;

const checkDB = async (username: string, password: string) => {
    try {
        let { data: users, error }: { data: any, error: any } = await supabase
            .from('users')
            .select('username, password')
            .eq('username', username);

        const user = users[0];
        const isMatch = bcrypt.compareSync(password, user.password);

        if (isMatch) {
            console.log('Mot de passe correct');
            return true;
        } else {
            console.log('Mot de passe incorrect');
            return false;
        }
    } catch (error) {
        console.error('Problème pendant le fetch :', (error as any).message);
        return false;
    }
};
</script>

<template>

</template>

<style scoped>
</style>