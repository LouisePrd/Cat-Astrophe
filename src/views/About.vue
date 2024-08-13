<script setup lang="ts">
document.title = 'A propos';
</script>

<template>
    <h1>A PROPOS</h1>
    <div class="presentation">
    <p>
        Bienvenue sur Cat-astrophe, un site sans prétention, sans chichis, et surtout sans interêt !
        <br><br>
        Ici, on profite de la vie : on se bat avec des APIs, on galère avec les composants, on a envie de se jeter sur la route au lieu d'en créer (un peu border celle-là). Bref, on se demande si partir élever des canards en Alaska serait une activité lucrative.
        Mais surtout on se challenge, alors les canards attendront 🦆
        <br><br>
        Pourquoi ce site est né ? 
        <br>
        La réponse elle est vite répondue : parce que j'ai trop de temps devant moi.
        <br><br>
        Bonne visite :)
    </p>
</div>
</template>

<style scoped>

h1 {
    color: var(--primary-color);
    font-size: var(--font-size-large);
    font-family: var(--font-title);
    text-align: center;
    margin-top: 8rem;
}

.presentation {
    width: 60%;
    margin: 0 auto;
    margin-top: 3rem;
    background-color: rgba(128, 128, 128, 0.3);
    border-radius: 10px;
}

.presentation p {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-xsmall);
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
    margin-bottom: 0.5rem;
}

/* Media queries */

@media screen and (max-width: 1200px) {
    h1 {
        font-size: var(--font-size-medium);
    }
    
    .presentation {
        width: 70%;
    }

    .presentation p {
        font-size: var(--font-size-xsmall);
    }
}
@media screen and (max-width: 800px) {
    h1 {
        font-size: var(--font-size-medium);
    }
    
    .presentation {
        width: 80%;
    }

    .presentation p {
        font-size: var(--font-size-xxsmall);
    }
}

</style>