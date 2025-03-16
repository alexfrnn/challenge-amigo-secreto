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

function limparCampo() {
  nome = document.getElementById("amigo");
  nome.value = "";
}