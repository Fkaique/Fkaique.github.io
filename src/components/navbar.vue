<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const emit = defineEmits(['toggle-theme'])
const isVisible = ref(false)

function mudarTema() {
    emit('toggle-theme')
}

function openBurguer(event) {
    event.stopPropagation()
    isVisible.value = !isVisible.value
}

function closeBurguer() {
    if (!isVisible.value) return
    isVisible.value = false
}

onMounted(() => {
    window.addEventListener('click', closeBurguer)
})

onUnmounted(() => {
    window.removeEventListener('click', closeBurguer)

})

</script>
<template>
    <nav class="navbar">
        <div class="linkMain">
            <router-link class="link" to="/">Galeria</router-link>
            <router-link class="link" to="/">Dormitório</router-link>
        </div>
        <div class="col-2">

            <router-link class="navHome" to="/">Home</router-link>
        </div>
        <div class="col-3">
            <div class="mudar-tema" @click="mudarTema"></div>
            <div class="mudar-tema-hamburguer" @click="openBurguer" />
            <div class="container-menu-burguer" @click.self="closeBurguer">
                <div v-if="isVisible" class="menu-burguer" @click.stop>
                    <div v-if="isVisible" class="mudar-tema-sus" @click="mudarTema">Mudar Tema</div>
                    <li v-if="isVisible"><router-link class="link-sus" to="/">Dormitório</router-link></li>
                    <li v-if="isVisible"><router-link class="link-sus" to="/">Galeria</router-link></li>
                </div>
            </div>

        </div>
    </nav>
</template>
<style>
.mudar-tema,
.mudar-tema-hamburguer {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--color-text);
}

.container-menu-burguer {
    position: relative;
}


.menu-burguer {
    position: absolute;
    top: 50px;
    padding: 10px;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    background-color: rgb(132, 128, 128);
}

.link,
.navHome {
    font-size: 1.5rem;
    text-decoration: none;
    color: var(--color-text);
    transition: all .2s;
}

.link,
.navHome:hover {
    transform: translateY(-2px);
}

.mudar-tema-hamburguer {
    display: none;
}

.navHome {
    font-size: 2.5rem;
}

.linkMain {
    display: flex;
    gap: 10px;

}


.navHome:hover {
    transform: translateX(-50%) translateY(-2px);
}

.col-2 {
    text-align: center;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-image: linear-gradient(to bottom, var(--color-text-contrast), rgba(0, 0, 0, 0));
    position: relative;
    overflow: hidden;
}

.navbar >* {
    flex: 1;
    overflow: hidden;
}

.navbar .col-3 {
    display: flex;
    justify-content: end;
    align-items: center;
    list-style: none;
    font-weight: bold;
}

@media (max-width: 900px) {
    .link {
        display: none;
    }

    .mudar-tema {
        display: none;
    }

    .mudar-tema-hamburguer {
        display: block;
    }
}
</style>