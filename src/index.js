
// Muda a classe do body para alterar o tema
function mudarTema(antigo, novo) {
  const body = document.getElementById("body");
  const button = document.getElementById("tema");
  if (body.classList.contains("tema--claro")) {
    body.classList.add("tema--escuro")
    body.classList.remove("tema--claro")
  } else {
    body.classList.add("tema--claro")
    body.classList.remove("tema--escuro")
  }
}

// function trocarCalc() {
//   const calcn = document.getElementById("calculadora-normal");
//   const calcc = document.getElementById("calculadora-cientif");
//   const button = document.getElementById("tema");
//   if (calcn.classList.contains("hide")) {
//     calcn.classList.remove("hide")
//     calcc.classList.add("hide")
//   } else {
//     calcn.classList.add("hide")
//     calcc.classList.remove("hide")
//   }
// }

//calculadora normal
{

  let a;
  let oper = ''
  // detecta o click nos botões da class numero 
  const tela = document.getElementById("tela");
  document.querySelector(".calculadora-normal").addEventListener('click', (event) => {
    if (!event.target.dataset.key) {
      return
    }
    const value = event.target.dataset.key
    // verifica se um operador ou numero foi digitado/clicado
    if (value === '=') {
      console.log(a, oper)
      switch (oper) {
        case '/':
          a /= Number(tela.value)
          tela.value = a;
          break;
        case '*':
          a *= Number(tela.value)
          tela.value = a;
          break;
        case '-':
          a -= Number(tela.value)
          tela.value = a;
          break;
        case '+':
          a += Number(tela.value)
          tela.value = a;
          break;
      }
    } else if (!isFinite(value)) {
      if (value === '-' && tela.value === "") {
        tela.value += '-'
      } else if (value !== '.') {
        a = Number(tela.value);
        tela.value = null
      } else if (tela.value !== "") {
        tela.value += value
      }
      if (value != '.') {
        oper = value;
      }
    } else {
      if (tela.value=="0"){ // se a tela só tiver '0' ela substitui pelo novo numero
        tela.value = value
      }else{
        tela.value += value;
      }
    }
    // limpa o visor e o conteudo salvo
    if (value == 'c') {
      tela.value = "0"
      oper = ''
    }
    console.log(event.target.dataset.key)
  })

}

//calculadora cientifica
{


}