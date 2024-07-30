<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
let audio = document.querySelector("audio");
audio?.play();
</script>

<template>
  <Header />
  <router-view></router-view>

  <Footer />
</template>

<style scoped></style>
