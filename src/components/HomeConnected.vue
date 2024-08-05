
<template>
    <div>
        <h1>Cat-astrophe</h1>
        <p>Encore un projet douteux</p>
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
    animation: fadeIn 5s;
}
</style>
