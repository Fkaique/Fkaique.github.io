<script setup lang="ts">
interface Props {
    title?: {
        text?: string
        color?: string
    }
    icon?: string
    image?: string
    items?: {
        text?: string
        halign?: 'center' | 'start' | 'end'
        color?: string
    }[]
    halign?: 'center' | 'start' | 'end'
    bgColor?: string
    boxShadow?: string
}

const props = withDefaults(defineProps<Props>(), {
    items: () => [],
    halign: 'start',
    boxShadow: '0px 0px 0px black'
})
</script>
<template>
    <article class="card" :class="[props.halign, { 'bg-text': !props.bgColor }]" :style="{
        backgroundColor: props.bgColor,
        boxShadow: props.boxShadow
    }">
        <h1 class="headCard" v-if="props.title?.text" :style="{ color: props.title.color ?? 'var(--color-text-contrast)' }">
            <span class="card-title" :style="{color: props.title.color ?? 'var(--color-secondary)'}" v-html="props.title?.text"></span>
            <img class="iconImg" :src="props.icon" alt="icone">
        </h1>
        <hr v-if="props.title?.text" />
        <img class="cardImage" v-if="props.image" :src="props.image" :alt="props.title?.text"><br>
        <ul v-if="props.items.length">
            <li v-for="(item, index) in props.items" :key="index"
                :style="{ textAlign: item.halign ?? props.halign }">
                <span v-html="item.text"></span>
            </li>
        </ul>
        <slot />
    </article>
</template>
<style>
.start {
    justify-content: start;
}

.center {
    display: flex;
    justify-content: center;
    text-align: center;
}

.end {
    justify-content: end;
}

.card-title {
    font-size: 1.5rem;
}

.headCard {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.headCard img {
    width: 30px;
    height: 30px;
}

hr {
    width: 80%;
    border-radius: 50%;
    border-color: var(--color-text-contrast);
    margin: 0 auto;
    margin-top: 20px;
}

.card {
    padding: 10px;
    border-radius: 10px;
    transition: all .3s;
}

.card:hover {
    transform: translateY(-3px);
}

.card li {
    list-style: none;
    
}

.cardImage {
    border-radius: 50%;
    margin: 10px;
    min-width: 50px;
    width: 30vw;
    max-width: 300px;
}
</style>
