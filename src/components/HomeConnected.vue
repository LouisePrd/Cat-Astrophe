<template>
    <div>
        <h1>Cat-astrophe</h1>
        <p>Encore un projet douteux</p>
        <img src="/props/cat.jpg" alt="cat">

        <p>Complète ton profil <a href="/profile">ici</a> !</p>

    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

html {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    font-family: var(--font-title);
    color: var(--primary-color);
    text-align: center;
    font-size: var(--font-size-large);
    margin-top: 8rem;
}

p {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-small);
    animation: fadeIn 5s;
}

img {
    width: 200px;
    height: auto;
    margin-top: 2rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

a {
    color: var(--primary-color);
    text-decoration: none;
}

@media screen and (max-width: 800px) {

    h1 {
        font-size: var(--font-size-medium);
    }

    p,
    a {
        font-size: var(--font-size-xsmall);
    }
}
</style>
