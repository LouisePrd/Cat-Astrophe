<script lang="ts">

</script>

<template>
    <div class="game">
        <p id="title-score">Scores des jeux (WIP)</p>
        <ul id="text-score">
            <li>Jeux 1 : 0</li>
            <li>Jeux 2 : 0</li>
            <li>Jeux 3 : 0</li>
        </ul>
    </div>
</template>

<style scoped>
.game {
    background-color: rgba(128, 128, 128, 0.5);
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(240, 187, 90, 0.2);
}

#title-score {
    font-family: var(--font-title);
    color: var(--primary-color);
    text-align: center;
    font-size: var(--font-size-small);
    margin-bottom: 1rem;
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