<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import MusicPlayer from '@/components/MusicPlayer.vue';

</script>

<template>
  <Header />
  <router-view></router-view>
  <MusicPlayer />
  <Footer />
</template>

<style scoped></style>
