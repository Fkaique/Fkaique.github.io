<script setup lang="ts">

import insta from '../assets/insta.png'
import git from '../assets/github.png'


</script>

<template>
    <div class="footer">
        <div class="links">
            <a href="https://instagram.com/fkaiquesp">
                <img class="icon" :src="insta" alt="instagram"> @fkaiquesp
            </a>
        </div>
        <footer>© Fkaique - 2026</footer>
        <div class="links right">
            <a href="https://github.com/fkaique">
                <img class="icon" :src="git" alt="github"> @fkaique
            </a>
        </div>
    </div>
</template>

<style>
.footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    background-color: color-mix(in srgb, var(--color-background) 80%, transparent);
    z-index: 1;
}

.right {
    justify-self: end;
}

footer {
    text-align: center;
    padding: 3rem;
}

.links {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 30px 15px 30px;
}

.links a {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 1.1rem;
}

.icon {
    width: 30px;
}

@media (orientation: portrait) {
    .footer {
        display: flex;
        flex-direction: column;
    }
}
</style>