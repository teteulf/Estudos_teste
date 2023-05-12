function carregar() {
  var oxi = document.querySelector("h1#osh");
  var hr = document.querySelector("div#titulo");
  var hor = new Date();
  var horario = hor.getHours();
  var img = document.querySelector("#imagem");

  if (horario > 6 && horario < 12) {
    hr.innerHTML = `Agora são ${horario} horas`;
    img.src = "manhã.png";
    oxi.innerText = "BOM DIA";
    document.body.style.background = "#efb07d";
  } else if (horario > 12 && horario < 18) {
    hr.innerHTML = `Agora são ${horario} horas`;
    img.src = "tarde.png";
    oxi.innerText = "BOA TARDE!";
    document.body.style.background = "#fdc219";
  } else {
    hr.innerHTML = `Agora são ${horario} horas`;
    img.src = "noite.png";
    oxi.innerText = "BOA NOITE!";
    document.body.style.background = "#0f5d74";
  }
}
