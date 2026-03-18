<script setup lang="ts">
import Card from '../components/card.vue';
import perfil from '@/assets/perfil.png'
import pantsIcon from '@/assets/pants.png'
import fkIcon from '@/assets/framekore.png'
import drawIcon from '@/assets/drawIcon.png'
import bagIcon from '@/assets/bagIcon.png'
import clockIcon from '@/assets/clockIcon.png'
import { computed, ref } from 'vue';

// interface Items {
//     text?: string,
//     haling?: 'center' | 'start' | 'end',
//     color?: string | 'black' | 'white' | 'var(--color-text-contrast)' | 'var(--color-text)'
// }

// interface Title {
//     text?: string,
//     color?: string | 'black' | 'white' | 'var(--color-text-contrast)' | 'var(--color-text)'
// }

interface Project {
    id: string
    name: string
    icon?: string
    description: string
    envolvidos: { name: string, github: string }[]
    links: {
        id: string
        title: string
        link: string
        color?: string
    }[]
}

const projects: Project[] = [
    {
        id: 'p-01',
        name: 'PantsLife',
        icon: pantsIcon,
        description: `
                Meu primeito jogo de Plataforma 2D feito em dois dias para uma GameJam.
        `,
        envolvidos: [{ name: 'Fkaique', github: 'Fkaique' }],
        links: [
            { id: 'l-01', link: 'https://mysteriescradle.itch.io/life-in-pants', title: '<strong>Link 1</strong>: itch.io', },
            { id: 'l-02', link: 'https://gx.games/pt-br/games/vpdabd/pants-life/', title: '<strong>Link 2</strong>: GXGames', },
            { id: 'l-03', link: 'https://gx.games/pt-br/games/vpdabd/pants-life/', title: '<strong>Link 3</strong>: Projeto Github', }
        ]
    },
    {
        id: 'p-02',
        icon: fkIcon,
        name: 'FrameKore',
        description: 'Engine de Jogos modular focada em uso de pugins para otmização de projetos.',
        envolvidos: [{ name: 'Fkaique', github: 'Fkaique' }],
        links: [
            { id: 'l-01', link: 'https://github.com/Fkaique/FrameKore-Engine', title: '<strong>Link 1</strong>: Github' }
        ],
    },
    {
        id: 'p-03',
        icon: drawIcon,
        name: 'Draw',
        description: `Uma interface simples para desenho.
            Criado com a ideia de ter um local para anotações graficas sem muita enrolação.`,
        envolvidos: [
            { name: 'Fkaique', github: 'Fkaique' }
        ],
        links: [
            { id: 'l-01', link: 'https://fkaique.github.io/draw', title: '<strong>Link 1</strong>: Draw' },
            { id: 'l-02', link: 'https://github.com/Fkaique/Draw', title: '<strong>Link 2</strong>: Github' }
        ],
    },
    {
        id: 'p-04',
        icon: bagIcon,
        name: 'Mochila',
        description: `Teste para sistema de
            inventarios em jogos de RPG.`,
        envolvidos: [
            { name: 'Fkaique', github: 'Fkaique' }
        ],
        links: [
            { id: 'l-01', link: 'https://fkaique.github.io/Mochila/', title: '<strong>Link 1</strong>: Mochila' },
            { id: 'l-02', link: 'https://github.com/Fkaique/Mochila/', title: '<strong>Link 2</strong>: Github' }
        ],
    },
    {
        id: 'p-05',
        icon: clockIcon,
        name: 'ClockFK',
        description: `Relogio digital formado
            por relogios de ponteiro.`,
        envolvidos: [
            { name: 'Fkaique', github: 'Fkaique' }
        ],
        links: [
            { id: 'l-01', link: 'https://fkaique.github.io/ClockFK/', title: '<strong>Link 1</strong>: ClockFK' },
            { id: 'l-02', link: 'https://github.com/Fkaique/ClockFK/', title: '<strong>Link 2</strong>: Github' }
        ],
    },
]

const pesquisa = ref('')

const projectsFiltered = computed(() => {
    const termo = pesquisa.value.trim().toLowerCase()

    if (!termo) return projects

    return projects.filter(project => {
        const nome = project.name.toLowerCase()
        const descricao = project.description.toLowerCase()

        const envolvidos = project.envolvidos?.map(e => ({
            name: e.name.toLowerCase(),
            github: e.github.toLowerCase()
        })) || []

        return (
            nome.includes(termo) ||
            descricao.includes(termo) ||
            envolvidos.some(e =>
                e.name.includes(termo) ||
                e.github.includes(termo)
            )
        )
    })
})

const dateNow = new Date()
const dateNasc = new Date('2005-01-18')
const idade = Math.floor((dateNow.getTime() - dateNasc.getTime()) / (1000 * 60 * 60 * 24 * 365.25))

</script>

<template>
    <div class="card-home-apresentation">
        <Card :image="perfil" bg-color="var(--color-background)" halign="center">
            <div class="apresentation">
                <pre class="FKLanguage">
    <strong class="color-secondary">Eu</strong> = {
        <strong class="color-primary">Nome</strong>: "Francisco Kaique",
        <strong class="color-primary">Idade</strong>: {{ idade }},
        <strong class="color-primary">Cidade</strong>: "Aracati - CE",
        <strong class="color-primary">Formação</strong>: [TI, Cursando BCC]
    }
            </pre>
                <pre class="FKLanguage">
    <strong class="color-secondary">Habilidades</strong> = [
        "HTML", "CSS", "TypeScript",
        "Vue", "ReactJs"
        "GML", "GDScript", "C#"
    ]
            </pre>
            </div>
        </Card>
    </div>
    <div class="container">
        <div class="titleProjects">
            <h2>MyProjects</h2>
            <div class="searchBox">
                <input v-model="pesquisa" class="pesquisa" placeholder="Pesquise por Nome, Envolvidos ou Descrição"
                    type="text">
            </div>

        </div>
        <div class="card-home">
            <Card class="card-project" v-for="project in projectsFiltered" :key="project.id"
                box-shadow="0px 4px 10px var(--color-background)" bg-color="var(--color-background)"
                :icon="project.icon" :title="{ text: project.name }">
                <div class="topicsCard">

                    <div class="topicCard">
                        <strong class="color-primary">Envolvidos</strong> :
                        <span class="color-text">
                            <span v-for="(user, i) in project.envolvidos" :key="i">
                                <a :href="`https://github.com/${user.github}`" target="_blank" rel="noopener noreferrer">
                                    {{ user.name }}
                                </a>
                                <span v-if="i < project.envolvidos.length - 1">, </span>
                            </span>
                        </span>
                    </div>
    
                    <div class="topicCard">
                        <strong class="color-primary">Descrição</strong> :
                        <span class="color-text">
                            {{ project.description }}
                        </span>
                    </div>
                </div>

                <ul>
                    <li v-for="link in project.links" :key="link.id">
                        <a class="linksCard" :style="{ color: link.color ?? 'var(--color-primary)' }" :href="link.link"
                            target="_blank" rel="noopener noreferrer">
                            <span v-html="link.title"></span>
                        </a>
                    </li>
                </ul>
            </Card>
        </div>
    </div>
</template>

<style>
.FKLanguage {
    text-align: left;
    font-family: var(--font-mono);
}

.topicCard {
    font-size: 20px;
}

.topicsCard {
    margin-bottom: 10px;
}

.topicCard a {
    color: var(--color-text);
    text-decoration: none;
}

.apresentation {
    display: flex;
    justify-content: center;
    gap: 20px;
}

@media (max-width: 900px) {
    .apresentation {
        flex-direction: column;
        align-items: center;
    }
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
    min-height: 320px;
    padding: 30px;
}

.linksCard {
    text-decoration: none;
}

.titleProjects {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-text-contrast);
    padding: 10px;
    margin: 10px;
}


.searchBox {
    display: flex;
    align-items: center;
    gap: 10px;
}

.container {
    margin: 40px auto;
    box-shadow: 0px 5px 10px black;
    padding: 30px;
    padding-top: 0;
    background-color: var(--color-text);
    border-radius: 10px;
    transition: all .2s;
}

.container:hover {
    transform: translateY(-2px);
}

.pesquisa {
    width: 20vw;
    height: 40px;
    border-radius: 10px;
    padding: 10px;
    font-size: 17px;

}

.pesquisa,
.pesquisa:focus {
    border: none;
    outline: none;
}


.card-home {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 20px;
    width: 90vw;
}
</style>