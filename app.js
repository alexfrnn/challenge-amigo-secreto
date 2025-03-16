//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  let nome = document.getElementById("amigo").value;
  if (nome == "") {
    alert("Por favor, insira um nome válido!");
  }
  amigos.push(nome);
  console.log(amigos);
  limparCampo();
  listarNome();
}

function listarNome() {
  let listaNomes = document.getElementById("listaAmigos");
  listaNomes.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = amigos[i];
    listaNomes.appendChild(li);
  }

}

function sortearAmigo() {
  if (amigos.length == 0) {
    alert("Digite o nome de um amigo");
  } else{
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
    document.getElementById("listaAmigos").innerHTML = "";
  }
}

function limparCampo() {
  nome = document.getElementById("amigo");
  nome.value = "";
}