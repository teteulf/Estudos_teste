const desenhos = [1, 2, 3, 4, 5, 6, 7];
const desenhosSelecionados = [];
const title = document.querySelector(".tituloDesenhoFavorito");
const botao = document.querySelector(".botao");
const main = document.querySelector(".instrucoes");
const texto = document.querySelector(".instrucoesTexto");
const parag = document.querySelector(".p1");
const parag2 = document.querySelector(".p2");

document.addEventListener("DOMContentLoaded", function () {
  botao.addEventListener("click", function () {
    apareceImagem();
    botao.style.display = "none";
    title.style.display = "none";
    texto.style.display = "none";
    main.style.backgroundColor = "transparent";
    main.style.boxShadow = "none";
  });

  function apareceImagem() {
    var i = Math.floor(Math.random() * desenhos.length);
    var i2 = "0";

    do {
      i2 = Math.floor(Math.random() * desenhos.length);
    } while (i === i2);

    parag.innerHTML = desenhos[i];
    parag2.innerHTML = desenhos[i2];

    parag.addEventListener("click", function () {
      var indice = desenhos.indexOf(desenhos[i]);
      var indice2 = desenhos.indexOf(desenhos[i2]);

      desenhosSelecionados.splice(0, 0, desenhos[i]);
      desenhos.splice(indice, 1);
      desenhos.splice(indice2 - 1, 1);

      apareceImagem();
    });
  }
});
