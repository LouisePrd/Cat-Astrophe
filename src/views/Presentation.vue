<script setup lang="ts">
import { ref } from 'vue';
document.title = 'Aviculture';

let discover = ref(false);

</script>

<template>
    <div class="intro" v-if="!discover">
        <h1>Avi-quoi ?</h1>
        <img id="jamy" src="/props/jamy.png" alt="jamy">
        <p id="intro"> Il y a quelques mois, je suis tombée sur un documentaire sur les canards thérapeuthiques. Vous
            saviez que 55% des
            personnes interrogées par un sondage en 2022 déclaraient penser souvent à leur santé mentale ? <br>Moi non
            mais
            si on met en correlation ces deux informations, devenir avicultrice, ça sent le métier d'avenir... non ?
            <br><br>Mais c'est quoi l'aviculture ?
        </p>
        <a id="discover-btn" @click="discover = true">Découvrir</a>
    </div>

    <div class="discover" v-if="discover">
        <h1>L'aviculture</h1>
        <p>Du latin avis (« oiseau ») et culture, on parle d'aviculture dans le cas d'élevage d'oiseaux ou de volaille.
            En général, ces animaux sont élevés pour être abattus et consommés ensuite.<br>
            Mais ici, on va parler des canards thérapeuthiques alors pas question de les manger hein 😾</p>

        <div class="duck-dev">
            <p>En tant que développeur, on a tous des souvenirs de ces sombres heures de débogage, de schémas sur
                papier
                et de reset mental pour reprendre le problème à 0. La méthode du canard, ça vous parle ? Si si, la
                mthode qui consiste à parler à un canard en lui expliquant notre problème et en espérant que la solution
                nous vienne comme une épiphanie ou que l'incohérence saute finalement aux yeux. La technique en image
                ci-jointe.</p>
            <img id="duck-dev-img" src="/props/duck-method.jpg" alt="duck-dev">
        </div>

        <div class="therapy">
            <h2>Therapie moins cher que le psy</h2>
            <div class="block-duck">
                <img src="https://www.jsonline.com/gcdn/-mm-/2844b5684d30e1992db34d81dcedf913bb3f93fb/c=0-28-1137-1544/local/-/media/2016/10/25/WIGroup/Milwaukee/636130063253597777-MJS-STINCOL-duck-2.jpg?width=458&height=610&fit=crop&format=pjpg&auto=webp"
                    alt="therapy">
                <p>Si si promis, fini les séances à 80 euros ! Il a été prouvé que les animaux avaient un réel
                    pouvoir
                    thérapeutique. Ils sont utilisés pour apporter du réconfort et des bienfaits émotionnels, on les
                    retrouve d'ailleurs souvent dans les hopitaux et les maisons de retraite.</p>
            </div>
            <p>Pour la petite anecdote, j'ai dit avec assurance dès l'introduction que j'avais vu un documentaire là
                dessus, et qu'il m'était resté en tête. Pourtant, plus je creuse mes recherches, plus je me dis que
                j'ai
                tout inventé. Sans vouloir raconter
                ma vie, j'ai eu de nombreuses expériences de rêves qui semblaient si réalistes que j'étais persuadée
                de
                les avoir vraiment vécus au reveil. Et là, il y a tellement peu de ressources que je crois que ce
                n'est
                jamais arrivé ???</p>
            <p>Bref pas grave, il y a au moins un article qui en parle, ça suffira pour le troll qu'est ce
                site.<br><span id="checkup">Si
                    quelqu'un lit ça, t'es sûr que ça va ???</span><br>
                Vous pourrez lire l'article <a id="article"
                    href="https://www.ouest-france.fr/insolite/daniel-le-canard-therapeute-plumes-video-4581875"
                    target=_blank>ici</a> si la curiosité vous
                prend. Pour résumer, il parle de Daniel, un thérapeuthe qui a pour but d'aider à gérer le syndrome
                post-traumatique
                de sa maîtresse Carla, et c'est un canard ! Il a même le droit de prendre l'avion et se ballader
                entre les passagers car il est
                considéré comme "animal de soutien affectif".</p>
        </div>
    </div>

</template>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

h1 {
    color: var(--primary-color);
    font-size: var(--font-size-medium);
    font-family: var(--font-title);
    text-align: center;
    margin-top: 8rem;
}

h2 {
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 3rem;
    text-align: center;
    font-family: var(--font-title);
    color: white;
}

p {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-small);
    margin: 0 auto;
    background-color: rgba(128, 128, 128, 0.3);
    border-radius: 10px;
    margin-top: 1rem;
    padding: 1rem;
}


#discover-btn {
    font-family: var(--font-text);
    font-size: var(--font-size-small);
    color: var(--secondary-color);
    background-color: transparent;
    border: 2px solid var(--secondary-color);
    border-radius: 15px;
    padding-right: 1rem;
    padding-left: 1rem;
    display: block;
    margin: 0 auto;
    text-align: center;
    margin-top: 2rem;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 2rem;
    width: fit-content;
}

#discover-btn:hover {
    background-color: var(--secondary-color);
    color: rgb(0, 0, 0);
    transition: 0.3s;
}

#jamy {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
    margin-top: 1rem;
    animation: fadeIn 3s;
}

#intro {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-small);
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: rgba(128, 128, 128, 0.3);
    border-radius: 10px;
}

#duck-dev-img {
    width: 30%;
    border-radius: 5px;
    height: auto;
    flex-shrink: 0;
    max-width: 100%;
    height: auto;
    transform: rotate(10deg);
    z-index: -100;
}

#duck-dev-img:hover {
    transform: rotate(0deg);
    transition: transform 0.5s ease-in-out;
}

#checkup:hover {
    color: var(--secondary-color);
    background-color: transparent;
}

#article {
    color: var(--secondary-color);
    text-decoration: underline;
}

#article:hover {
    color: var(--primary-color);
}

#checkup {
    color: #310504;
    background-color: #310504;
}

.intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    margin-top: 1rem;
}


.discover {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
}

.duck-dev {
    display: flex;
    margin: 0 auto;
    margin-top: 2rem;
    flex-direction: row;
    width: 60%;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.duck-dev p {
    margin: 0;
    flex: 1;
}

.discover p {
    width: 60%;
}

.block-duck {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 60%;
    gap: 2rem;
}

.block-duck img {
    border-radius: 5px;
    height: auto;
    flex-shrink: 0;
    max-width: 12%;
}

.block-duck p {
    margin: 0;
    flex: 1;
}

@media (max-width: 1000px) {
    #duck-dev-img {
        width: 50%;
    }

    .duck-dev {
        flex-direction: column;
    }
}
</style>