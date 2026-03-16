<script setup>
import { ref } from 'vue';

const emit = defineEmits(['toggle-theme'])

function mudarTema() {
    emit('toggle-theme')
}

</script>
<template>
    <nav class="navbar">
        <ul class="linkMain">
            <li><router-link class="link navHome" to="/">Home</router-link></li>
            <li><router-link class="link" to="/">Galeria</router-link></li>
            <li><router-link class="link" to="/">Dormitório</router-link></li>
        </ul>
        <ul>
            <li>
                <div class="mudar-tema" @click="mudarTema"></div>
            </li>
        </ul>
    </nav>
</template>
<style>
.mudar-tema {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--color-text);
}

.link {
    font-size: 25px;
    text-decoration: none;
    color: var(--color-text);
    transition: all .2s;
}

.link:hover {
    transform: translateY(-2px);
}

.navHome {
    font-size: 40px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.navHome:hover {
    transform: translateX(-50%) translateY(-2px);
}

.navbar {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-image: linear-gradient(to bottom, var(--color-text-contrast), rgba(0, 0, 0, 0));
    position: relative;
}

.navbar ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.navbar li {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    font-weight: bold;
}
</style>