<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Navbar from './components/navbar.vue'
import Footer from './components/Footer.vue'

const tema = ref('tema--escuro')

onMounted(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
        tema.value = savedTheme
    }
})

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

        <Footer />
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
</style>