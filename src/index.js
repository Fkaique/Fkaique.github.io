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