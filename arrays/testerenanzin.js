const title = document.querySelector(".tituloDesenhoFavorito");
const botao = document.querySelector(".botao");
const texto = document.querySelector(".instrucoesTexto");
const main = document.querySelector(".instrucoes");
let parag = document.querySelectorAll("p");

let desenhos = [1, 2, 3, 4, 5, 6, 7];
let desenhosSelecionados = [];

botao.addEventListener("click", function () {
  apareceImagem();
  botao.style.display = "none";
  title.style.display = "none";
  texto.style.display = "none";
  main.style.backgroundColor = "transparent";
  main.style.boxShadow = "none";
});

parag.forEach((elementParag) => {
  elementParag.addEventListener("click", (element) => removeAndAddImg(element));
});

function apareceImagem() {
  let parag = document.querySelectorAll("p");
  let firstImg = desenhos[0];
  let lastImg = desenhos[desenhos.length - 1];
  parag[0].innerText = firstImg;
  parag[1].innerText = lastImg;
}

function removeAndAddImg(element) {
  let firstImg = desenhos[0];
  let lastImg = desenhos[desenhos.length - 1];

  let elementImg = element.target.innerText;
  desenhos.splice(desenhos.indexOf(firstImg), 1);
  desenhos.splice(desenhos.indexOf(lastImg), 1);
  desenhosSelecionados.push(elementImg);
  apareceImagem();
}
