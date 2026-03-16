<script setup lang="ts">
import Card from '../components/card.vue';
import perfil from '@/assets/perfil.png'
interface Items {
    text?: string,
    haling?: 'center' | 'start' | 'end',
    color?: string | 'black' | 'white' | 'var(--color-text-contrast)' | 'var(--color-text)'
}

interface Title {
    text?: string,
    color?: string | 'black' | 'white' | 'var(--color-text-contrast)' | 'var(--color-text)'
}

interface Project {
    id: string
    name: string
    description: string
    links: {
        id: string
        title: string
        link: string
    }[]
}

const projects: Project[] = [
    {
        id: 'p-01',
        name: 'PantsLife',
        description: `<pre>    Uma calça andando sozinha?
    Bom. É melhor correr.
    alguém deve estar com frio
    por ai!
        </pre>`,
        links: [
            {
                id: 'l-01',
                link: 'https://mysteriescradle.itch.io/life-in-pants',
                title: '<strong>Link 1</strong>: itch.io',
            },
            {
                id: 'l-02',
                link: 'https://gx.games/pt-br/games/vpdabd/pants-life/',
                title: '<strong>Link 2</strong>: GXGames',
            },
            {
                id: 'l-03',
                link: 'https://gx.games/pt-br/games/vpdabd/pants-life/',
                title: '<strong>Link 3</strong>: Projeto Github',
            }
        ]
    }
]

const dateNow = new Date()
const dateNasc = new Date('2005-01-18')
const idade = Math.floor((dateNow.getTime() - dateNasc.getTime()) / (1000 * 60 * 60 * 24 * 365.25))

</script>

<template>
    <div class="card-home-apresentation">
        <Card :image="perfil" bg-color="var(--color-background)" halign="center">
            <pre class="FKLanguage">
        <strong class="color-secondary-contrast">EU</strong> = {
            <strong class="color-primary">Nome</strong>: "Francisco Kaique",
            <strong class="color-primary">Idade</strong>: {{ idade }},
            <strong class="color-primary">Cidade</strong>: "Aracati - CE",
            <strong class="color-primary">Formação</strong>: [TI, Cursando BCC]
        }
            </pre>
        </Card>
    </div>
    <div class="card-home">
        <Card boxShadow="0px 5px 10px black">
            <Card class="card-project" v-for="project in projects" :key="project.id" boxShadow="0px 5px 10px black"
                :title="{ text: project.name }" :items="[
                    { text: '<strong>Envolvidos</strong>: Fkaique,' },
                    { text: '<strong>description</strong>: ' + project.description }
                ]">
                <ul>
                    <li v-for="link in project.links" :key="link.id">
                        <router-link :to="link.link"><span v-html="link.title"></span> </router-link>
                    </li>
                </ul>
            </Card>
        </Card>
    </div>
</template>

<style>
.FKLanguage {
    text-align: left;
}

.card-home-apresentation {
    margin: 0 auto;
    min-height: 200px;
    min-width: 200px;
    max-width: 400px;
    width: 30vw;
}

.card-project {
    max-width: 400px;
    min-height: 250px;
}

.card-home {
    width: 80vw;
    margin: 40px auto;
}
</style>