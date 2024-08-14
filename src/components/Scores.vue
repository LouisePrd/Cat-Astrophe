<script setup lang="ts">

</script>

<template>
    <div class="game">
        <p id="title-score">Liste des canards</p>
        <ul id="text-score">
            <li>Tom (Health : 16)</li>
            <li>Jude (Health : 12)</li>
            <li>Kristen (Health : 4)</li>
        </ul>
    </div>
</template>

<style scoped>
.game {
    background-color: rgba(128, 128, 128, 0.6);
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(240, 187, 90, 0.2);
}

#title-score {
    font-family: var(--font-title);
    color: var(--primary-color);
    text-align: center;
    font-size: var(--font-size-xsmall);
}

#text-score {
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