class Personagem {
    constructor(nome, raca, classe, atributos, pericias, habilidade, vestes, status, descricao, image) {
        this.nome = nome;
        this.raca = raca;
        this.classe = classe;
        this.atributos = atributos;
        this.pericias = pericias;
        this.habilidade = habilidade;
        this.vestes = vestes
        this.status = status;
        this.descricao = descricao
        this.image = image;
    }
}

let count = 0
let personagens = []
/**
 * @param {{
 *   nome: string,
 *   raca: string,
 *   classe: string,
 *   atributos: object,
 *   pericias: object,
 *   habilidade: object,
 *   vestes: object,
 *   status: object,
 *   descricao?: string,
 *   image?: string
 * }} p
 */
function criarPersonagem(p) {
    const personagem = new Personagem(p.nome, p.raca, p.classe, p.atributos, p.pericias, p.habilidade, p.vestes, p.status, p.descricao, p.image)
    personagens.push(personagem)
    count++
    return personagem
}

function mostrarMais(event) {
    const seta = event.currentTarget.querySelector('.seta-svg');
    const container = event.currentTarget.closest('.container');
    container.classList.toggle('ativo');
    seta.classList.toggle('ativo');
}

function zoomImage() {
    const img = event.target;
    const modal = document.getElementById('zoomModal');
    const zoomedImage = document.getElementById('zoomedImage');

    zoomedImage.src = img.src;
    modal.style.display = 'flex';
}

function closeZoom() {
    document.getElementById('zoomModal').style.display = 'none';
}

function mostrarPersonagens() {
    const output = document.getElementById("output");
    output.innerHTML = "";

    for (let i of personagens) {
        output.innerHTML += `
            <div class="container">
                <img onclick="zoomImage()" src="${i.image}">
                <strong>Nome:</strong> ${i.nome}<br>
                <strong>Raça:</strong> ${i.raca}<br>
                <strong>Classe:</strong> ${i.classe}<br>
                <strong>Habilidade:</strong> ${i.habilidade}<br>
                <strong>Vestes:</strong> ${i.vestes}<br >
                <strong>Atributos:</strong> <pre>${JSON.stringify(i.atributos, null, 2)}</pre>
                <strong>Perícias:</strong> <pre>${JSON.stringify(i.pericias, null, 2)}</pre>
                <strong>Status:</strong> <pre>${JSON.stringify(i.status, null, 2)}</pre>
                <strong>Descrição:</strong> ${i.descricao}
                <div class="container-depth">
                    <div onclick="mostrarMais(event)" class=" seta" title="clique para ver mais">
                        <svg class="seta-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        `;
    }
}


const classe = {
    c1: 13,
    c2: 23
}

const Magico = criarPersonagem({
    nome: "MAGICO",
    classe: "Feitiçeiro",
    habilidade: "Fusão",
    raca: "Humano",
    vestes: "Uniforme de Cozinha",
    atributos: {
        forca: '?',
        inteligencia: "?",
        destreza: "?",
        presença: "?",
        constituicao: "?"
    },
    pericias: {
        feiticaria: 100
    },
    status: {
        HP: "?",
        MP: "?",
        DF: 0,
        SD: 0
    },
    descricao: "Maior Mago e Feiticeiro do mundo",
    image: "./src/magico.jpg"
})
const Kama = criarPersonagem({
    nome: "Kama",
    raca: "Híbrido",
    classe: "Assassino",
    habilidade: "Audição",
    vestes: "calsa e ataduras",
    descricao: "Ataca com Espada e garras que são como foices que cortam o ar",
    image: "./src/kamaitachi.jpg",
    atributos: {
        forca: '3',
        inteligencia: "2",
        destreza: "5",
        presença: "5",
        constituicao: "3"
    },
    pericias: {
        luta: 15,
        furtividade: 5,
        esquiva: 10,
        iniciativa: 5,
    },
    status: {
        HP: 50,
        MP: 60,
        DF: 9,
        SD: 70
    },
})

mostrarPersonagens()


/*
    nome: "",
    raca: "",
    classe: "",
    habilidade: "",
    vestes: "",
    descricao: "",
    image: "./src/",
    atributos: {
        forca: '',
        inteligencia: "",
        destreza: "",
        presença: "",
        constituicao: ""
    },
    pericias: {
        luta: 0,
        furtividade: 0,
        esquiva: 0,
        iniciativa: 0,
    },
    status: {
        HP: 0,
        MP: 0,
        DF: 0,
        SD: 0
    },
})
*/