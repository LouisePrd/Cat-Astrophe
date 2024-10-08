<script setup lang="ts">
import { ref } from 'vue';
import { nextTick } from 'vue';
let showGreeting = ref(true);
let showShame = ref(true);
let showAll = ref(true);

const createDots = (numDots: number) => {
    let html = document.querySelector('html');
    if (html) {
        for (let i = 0; i < numDots; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const size = Math.random() * 6;
            dot.style.cssText = `
                top: ${top}%;
                left: ${left}%;
                width: ${size}px;
                height: ${size}px;
                background-color: white;
                position: absolute;
                border-radius: 50%;
            `;
            html.appendChild(dot);
        }
    }
};

const progressiveDisplay = async (message: string) => {
    await nextTick();
    let writing = document.querySelector('.writing');
    if (writing) {
        let i = 0;
        let interval = setInterval(() => {
            if (i < message.length) {
                writing.innerHTML += message.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                judgingMessage();
            }
        }, 500);
    } else {
        console.error('Element with class "writing" not found.');
    }
};


const displayMessage = () => {
    let ambientSound = document.querySelector('#ambient-sound') as HTMLElement;
    if (ambientSound) {
        ambientSound.click();
    }

    let inputUser = document.querySelector('.share');
    if (inputUser instanceof HTMLInputElement && inputUser.value) {
        createDots(100);
        showGreeting.value = false;
        showAll.value = false;
        progressiveDisplay(inputUser.value);
        judgingMessage();
    } else {
        const comeOn = document.querySelector('.comeOn');
        if (comeOn instanceof HTMLElement) {
            comeOn.innerHTML = 'Allez, un petit effort...';
        } else {
            console.error('Element with class "comeOn" is not an instance of HTMLElement or is null.');
        }
    }
}


const judgingMessage = () => {
    const messageJudge = document.querySelector('.judge');
    if (messageJudge instanceof HTMLElement) {
        messageJudge.innerHTML = 'Impressionnant, poétique, romanesque, un chouilla prétentieux...';
        messageJudge.style.opacity = '1';

        const messages = [
            '<br>Mais pas mal.',
            '<br>Vraiment pas mal.',
            '<br><br>Passons aux choses sérieuses.<br><a href="/connect" style="color: inherit;">Connecte toi</a> ou <a href="/connect" style="color: inherit;">inscris toi</a> pour découvrir la suite.'
        ];

        messages.forEach((msg, index) => {
            setTimeout(() => {
                messageJudge.innerHTML += msg;
            }, (index + 1) * 2000 + 1000);
        });
    }
};


</script>

<template>

    <head>
        <title>A propos</title>
    </head>
    <div class="title" v-if="showAll">
        <h1>Bienvenue !</h1>
        <p class="shame" v-if="showShame">Encore un projet douteux, parce qu'on change pas une équipe qui gagne...
            <br>
            L'équipe en question : moi (et je gagne pas beaucoup bref)
        </p>
    </div>


    <div class="greeting" v-if="showGreeting">
        <p>Content de te voir ici ! <br>Avant de commencer, quelques mots à partager ?</p>
        <input class="share" type="text" placeholder="Des choses à partager">
        <button class="start" @click="displayMessage">Envoyer</button>
        <p class="comeOn"></p>
    </div>

    <div class="message" v-if="!showAll">
        <h1 class="writing"></h1>
        <p class="judge"></p>
    </div>


</template>

<style scoped>
@keyframes moving {
    from {
        transform: translateY(-200px);
    }

    to {
        transform: translateY(0px);
    }
}

@keyframes rotate {
    from {
        rotate: -10deg;
    }

    to {
        rotate: 0deg;
    }
}

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
    height: 100vh;
}

h1 {
    font-family: var(--font-title);
    color: var(--primary-color);
    text-align: center;
    font-size: var(--font-size-large);
    margin-top: 9rem;
    margin-bottom: 4rem;
}

p {
    font-family: var(--font-text);
    color: var(--secondary-color);
    text-align: center;
    font-size: var(--font-size-small);
}


.share {
    font-family: var(--font-text);
    font-size: var(--font-size-small);
    color: var(--secondary-color);
    background-color: transparent;
    border: 2px solid var(--secondary-color);
    border-radius: 5px;
    padding: 0.4rem;
    display: block;
    margin: 0 auto;
    text-align: center;
}

.shame {
    animation: fadeIn 8s;
    font-size: var(--font-size-xxsmall);
    background-color: rgba(128, 128, 128, 0.2);
    padding: 0.5rem;
    border-radius: 5px;
    width: fit-content;
    margin: 0 auto;
}

.start {
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
}

.start:hover {
    background-color: var(--secondary-color);
    color: rgb(0, 0, 0);
    transition: 0.3s;
}

.writing {
    font-family: var(--font-title);
    font-size: var(--font-size-large);
    color: var(--secondary-color);
    text-align: center;
}

.judge {
    font-family: var(--font-text);
    font-size: var(--font-size-xsmall);
    color: var(--secondary-color);
    text-align: center;
    margin-top: 5rem;
    opacity: 0;
    transition: opacity 5s ease-in-out;
}

.dot {
    animation: fadeIn 10s;
}

.comeOn {
    font-family: var(--font-text);
    font-size: var(--font-size-xsmall);
    color: var(--secondary-color);
    text-align: center;
    margin-top: 1rem;
}

.greeting {
    margin-top: 3rem;
}

.title h1 {
    animation: moving 3s ease-out;
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