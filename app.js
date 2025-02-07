
let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;

    // Verifica se foi inserido algum nome, caso negativo retorna mensagem
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.")
    } else {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        limparCampo("amigo");
    };
};

function atualizarListaAmigos() {
    const listaExibida = document.getElementById("resultado");

    // Limpa a lista antes de ser exibida
    listaExibida.innerHTML = "";

    // Percorre os elementos da lista e exibe na página
    for (let i = 0; i < amigos.length; i++) {
        listaExibida.innerHTML += `<li>${amigos[i]}</li>`;
    };
};

function sortearAmigo() {
    // Verifica se a lista de amigos possui elementos
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia");
    } else {
        let indiceAmigo = Math.floor(Math.random() * amigos.length);
        const amigoExibido = document.getElementById("resultado");
        amigoExibido.innerHTML = "";
        amigoExibido.innerHTML = amigos[indiceAmigo];
    }
};


function limparCampo(campoId) {
    document.getElementById(campoId).value = "";
};
