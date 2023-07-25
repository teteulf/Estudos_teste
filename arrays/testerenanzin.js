const title = document.querySelector(".tituloDesenhoFavorito");
const botao = document.querySelector(".botao");
const texto = document.querySelector(".instrucoesTexto");
const main = document.querySelector(".instrucoes");
let parag = document.querySelectorAll("img");

let desenhos = [
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/3.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/3.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/3.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/629.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/629.png",
];
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
  elementParag.addEventListener("click", (element) => {
    removeAndAddImg(element);
  });
});

function apareceImagem() {
  let parag = document.querySelectorAll("img");
  let firstImg = desenhos[0];
  let lastImg = desenhos[desenhos.length - 1];
  parag[0].src = firstImg;
  parag[1].src = lastImg;
}

function removeAndAddImg(element) {
  let firstImg = desenhos[0];
  let lastImg = desenhos[desenhos.length - 1];
  let elementImg = element.target.src;

  desenhos.splice(desenhos.indexOf(firstImg), 1);
  desenhos.splice(desenhos.indexOf(lastImg), 1);
  desenhosSelecionados.push(elementImg);

  if (desenhos.length < 3) {
    desenhos = desenhos.concat(desenhosSelecionados);
    desenhosSelecionados = [];
  }
  apareceImagem();

  console.log(desenhos);
  console.log(desenhosSelecionados);
}
