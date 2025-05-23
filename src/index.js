function mudarTema(antigo, novo){
    const body = document.getElementById("body");
    const button = document.getElementById("tema");
    if (body.classList.contains("tema--claro")){
        body.classList.add("tema--escuro")
        body.classList.remove("tema--claro")
    }else{
        body.classList.add("tema--claro")
        body.classList.remove("tema--escuro")
    }
}
//calculadora
let a;
let oper=''

const tela = document.getElementById("tela");
document.querySelector(".numeros").addEventListener('click', (event)=>{
  if (!event.target.dataset.key){
    return
  }
const value = event.target.dataset.key
    if (value === '='){
      console.log(a, oper)
      switch (oper){
        case '/':
          a/=Number(tela.value)
          tela.value = a;
          break;
        case '*':
          a*=Number(tela.value)
          tela.value = a;
          break;
        case '-':
          a-=Number(tela.value)
          tela.value = a;
          break;
        case '+':
          a+=Number(tela.value)
          tela.value = a;
          break;
      }
    }else if (!isFinite(value)){
      if (value==='-' && tela.value===""){
        tela.value+='-'
      }else if (value!== '.'){
        a=Number(tela.value);
        tela.value=null
      }else if (tela.value!==""){
        tela.value+=value
      }
      if (value!='.'){
        oper=value;
      }
    }else{
      tela.value += value;
    }
  console.log(event.target.dataset.key)
})
/*
document.querySelectorAll('button').forEach(botao => {
  botao.addEventListener('click', function () {
    const tela = document.getElementById("tela");
    
    if (this.value === '='){
      console.log(a, oper)
      switch (oper){
        case '/':
          a/=Number(tela.value)
          tela.value = a;
          break;
        case '*':
          a*=Number(tela.value)
          tela.value = a;
          break;
        case '-':
          a-=Number(tela.value)
          tela.value = a;
          break;
        case '+':
          a+=Number(tela.value)
          tela.value = a;
          break;
        case '=':
          a=a
          tela.value = a;
          break;
      }
    }else if (!isFinite(this.value)){
      oper=this.value;
      tela.value=null
    }else{
      tela.value += this.value;
    }
    console.log(this.value);
    
  });
});
*/