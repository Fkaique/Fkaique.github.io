<script setup lang="ts">
import { ref } from 'vue';
import Navbar from './components/navbar.vue';

const tema = ref('tema--escuro')

const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
    tema.value = savedTheme
}

function toggleTheme() {
    tema.value = tema.value === 'tema--claro'
    ? 'tema--escuro'
    : 'tema--claro'
    localStorage.setItem('theme', tema.value)
}

</script>

<template>
    <div class="defaultLayout tema" :class="tema">
        <Navbar @toggle-theme="toggleTheme" />
        <main class="content">
            <router-view />
        </main>
        <footer>@ Fkaique, 2026</footer>
    </div>
</template>

<style>
.defaultLayout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: linear-gradient(to bottom, var(--color-black), var(--color-white));
    transition: all .3s;
}

.content {
    display: flex;
    flex-direction: column;
    flex: 1;
}

footer {
    text-align: center;
    padding: 1rem;
}
</style>