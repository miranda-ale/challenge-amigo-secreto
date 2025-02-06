//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
    if(nomeAmigo === "") {
        alert("Por favor, insira um nome.")
    } else {
        amigos.push(nomeAmigo);
        atualizaListaAmigos();
        limpaCampo("amigo");
    };
};

function atualizaListaAmigos() {
    const listaExibida = document.getElementById("resultado");
    listaExibida.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        listaExibida.innerHTML += `<li>${amigos[i]}</li>`;
    };
};

function limpaCampo(campoId) {
    document.getElementById(campoId).value = "";
}