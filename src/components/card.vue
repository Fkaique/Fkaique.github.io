<script setup lang="ts">
interface Props {
    title?: {
        text?: string
        color?: string
    }
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
    <div class="card" :class="[props.halign, { 'bg-text': !props.bgColor }]"
        :style="props.bgColor ? { backgroundColor: props.bgColor } : { boxShadow: props.boxShadow }">
        <h2 v-if="props.title?.text" :style="{ color: props.title.color ?? 'var(--color-text-contrast)' }">
            {{ props.title?.text }}
            <hr />
        </h2>
        <img class="cardImage" v-if="props.image" :src="props.image" :alt="props.title?.text"><br>
        <ul>
            <li v-for="(item, index) in props.items" :key="index"
                :style="{ textAlign: item.halign ?? props.halign, color: item.color ?? 'var(--color-text-contrast)' }">
                <span v-html="item.text"></span>
            </li>
        </ul>
        <slot> </slot>
    </div>
</template>
<style>
.start {
    justify-content: start;
}

hr {
    width: 80%;
    border-radius: 50%;
    
}

.center {
    justify-content: center;
    text-align: center;
}

.end {
    justify-content: end;
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
    font-size: 20px;
}

.cardImage {
    border-radius: 50%;
    margin: 10px;
}
</style>
