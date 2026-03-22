<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import patoBg from '@/assets/pato.png'
import discoBg from '@/assets/disco.png'

const contar = ref(0)
const dormiu = ref(false)

const audioInput = ref<HTMLInputElement | null>(null)
const player = ref<HTMLAudioElement | null>(null)

let inicio = Date.now()
let frameId = 0

function contarCarneirinhos() {
    contar.value += 1
    inicio = Date.now()
    dormiu.value = false

    if (player.value) {
        player.value.volume = 1
    }
}

function onAudioChange(event: Event) {
    const input = event.target as HTMLInputElement
    const file = input.files?.[0]
    if (!file || !player.value) return

    const url = URL.createObjectURL(file)
    player.value.src = url
    player.value.play()
}

function loop() {
    const agora = Date.now()

    if (agora - inicio > 1000 * 30) {
        dormiu.value = true
        if (player.value) player.value.volume = 0.5
    }

    frameId = requestAnimationFrame(loop)
}

onMounted(() => {
    loop()
})

onUnmounted(() => {
    cancelAnimationFrame(frameId)
})
</script>

<template>
    <div
        class="bg"
        :class="{ dormindo: dormiu }"
        :style="{ backgroundImage: `url(${patoBg})` }"
    ></div>

    <div class="contar">
        <button class="color-primary bg-background botao" @click="contarCarneirinhos">
            Contar Carneirinhos
        </button>
    </div>

    <div class="contar">
        <p class="carneirinhos">
            Dormindo : {{ dormiu ? 'sim' : 'não' }}<br>
            Carneirinhos : {{ contar }}
        </p>
    </div>

    <div class="contar">
        <label class="audio" for="audioInput" :style="{ backgroundImage: `url(${discoBg})` }">
            <input
                id="audioInput"
                ref="audioInput"
                type="file"
                accept="audio/*"
                @change="onAudioChange"
            >
            Toque uma Música
        </label>

        <audio ref="player" loop></audio>
    </div>
</template>

<style>
.bg {
    position: fixed;
    inset: 0;
    z-index: 0;
    opacity: 0;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transition: all 1s;
    pointer-events: none;
}

.bg.dormindo {
    opacity: .4;
}

.contar {
    position: relative;
    z-index: 1;
    display: flex;
    margin: 0 auto;
    padding: 20px;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 15vh;
}

.contar .botao {
    display: flex;
    margin: 0 10px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 10vw;
    height: 10vh;
    min-width: 100px;
    font-size: clamp(4%, 2vh, 20px);
    border: 1px solid;
    border-radius: 5px;
}

.contar .carneirinhos {
    white-space: pre-line;
    font-size: clamp(50%, 2vh, 20px);
}

input[type="file"] {
    display: none;
}

.audio {
    display: flex;
    margin: 0 10px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 10vw;
    height: 10vw;
    min-height: 100px;
    min-width: 100px;
    font-size: clamp(4%, 2vh, 20px);
    text-align: center;
    border: 1px solid;
    border-radius: 50%;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    transition: background-color 1s;
}

.audio:hover {
    background-color: rgba(135, 135, 135, 0.307);
}
</style>