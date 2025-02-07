
let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
    
    // Verifica se foi inserido algum nome
    if(nomeAmigo === "") {
        alert("Por favor, insira um nome.")
    } else {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        limparCampo("amigo");
    };
};

function atualizarListaAmigos() {
    const listaExibida = document.getElementById("resultado");
    listaExibida.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        listaExibida.innerHTML += `<li>${amigos[i]}</li>`;
    };
};

function sortearAmigo() {
    if(amigos.length === 0) {
        alert("A lista de amigos está vazia");
    } else {
    let indiceAmigo = Math.floor(Math.random() * amigos.length);
    const amigoExibido = document.getElementById("resultado");
    amigoExibido.innerHTML = "";
    amigoExibido.innerHTML = amigos[indiceAmigo];}
};


function limparCampo(campoId) {
    document.getElementById(campoId).value = "";
};
