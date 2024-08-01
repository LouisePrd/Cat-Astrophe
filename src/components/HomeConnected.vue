
<template>
    <div class="second-entry">
        <h1>Chat-strologie</h1>
        <p>Un site pour les gens qui aiment les chats et l'astrologie. <br> Ou pas.</p>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
html {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

h1 {
    font-family: var(--font-title);
    color: var(--primary-color);
    text-align: center;
    font-size: var(--font-size-large);
    margin-top: 8rem;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

p {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-small);
}
</style>
