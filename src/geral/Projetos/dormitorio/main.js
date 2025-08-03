// while(!dormiu && ovelhas<10) {                                            
    //         dormiu=confirm("dormiu?");                      
//         ovelhas = dormiu ? 0 :  ovelhas+1;                                                       
//         alert("dormiu: " + dormiu + "\novelhas:" + ovelhas);
// }

const input = document.getElementById('audioInput');
const player = document.getElementById('player')

input.addEventListener('change', () =>{
    const file = input.files[0]
    if (!file) return;
    const url = URL.createObjectURL(file)
    player.src = url
    player.play();
})

let inicio = Date.now()
let carneirinhos = 0;                       
let dormiu = false

document.getElementById('contar').onclick = ()=> {
    player.volume = 1
    dormiu=false
    document.querySelector('.bg').classList.remove('dormindo')
    carneirinhos+=1
    inicio = Date.now()
};

function loop(){
    let agora = Date.now();
    let dormindo = dormiu ? 'sim' : 'não' 
    if (agora-inicio>(1000*30)){
        player.volume = 0.5
        dormiu=true
        document.querySelector('.carneirinhos').textContent = 
        `Dormindo : ${dormindo} \nCarneirinhos : ${carneirinhos}`
        document.querySelector('.bg').classList.add('dormindo')
    }
    
    document.querySelector('.carneirinhos').textContent = 
    `Dormindo : ${dormindo} \nCarneirinhos : ${carneirinhos}`
    requestAnimationFrame(loop)
}
loop()
// document.body.style.backgroundImage = !dormiu ? 
// "url(https://www.criarmeme.com.br/meme/meme-48850-Vai-se-Fuder.jpg)" : 
// "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoCSfY_efldr0_HYdPqkQqf2w1rx4U6r_Nw&s)"
// document.body.style.backgroundSize = '60%';
// document.body.style.backgroundRepeat = 'no-repeat';