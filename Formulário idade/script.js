function ano_alterar() {
  var anos = document.querySelector("#ano").value;
  result();
  document.querySelector("#numeração_ano").innerHTML = anos;
}

function result() {
  var text = document.querySelector("#ano");
  var numb = 2023 - Number(text.value);
  var rest = document.get;
  var sex = document.querySelector("#sex1");
  var sexu = document.querySelector("#sex2");
  var p = document.querySelector("#pari");
  var img = document.querySelector("img");

  if (sex.checked) {
    p.innerHTML = `Esta pessoa é homem e tem ${numb} anos`;

    if (numb >= 0 && numb < 5) {
      img.src = "bebe homem.PNG";
    }

    if (numb >= 5 && numb < 13) {
      img.src = "criança homem.PNG";
    }

    if (numb >= 13 && numb < 18) {
      img.src = "adolescente homem.PNG";
    }

    if (numb >= 18 && numb < 55) {
      img.src = "adulto homem.PNG";
    }

    if (numb >= 55 && numb < 100) {
      img.src = "idoso homem.PNG";
    }

    if (numb >= 100) {
      p.innerHTML = "Ja morreu certeza";
      img.src = "caveira.PNG";
    }
  } else if (sexu.checked) {
    p.innerHTML = `Esta pessoa é mulher e tem ${numb} anos`;

    if (numb >= 0 && numb < 5) {
      img.src = "bebe homem.PNG";
    }

    if (numb >= 5 && numb < 13) {
      img.src = "criança mulher.PNG";
    }

    if (numb >= 13 && numb < 18) {
      img.src = "adolescente mulher.PNG";
    }

    if (numb >= 18 && numb < 55) {
      img.src = "adulto mulher.PNG";
    }

    if (numb >= 55 && numb < 100) {
      img.src = "idoso mulher.PNG";
    }

    if (numb >= 100) {
      img.src = "caveira.PNG";
      p.innerHTML = "Ja morreu certeza";
    }
  }
}
