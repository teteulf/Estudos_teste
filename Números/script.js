const inp = document.querySelector("#texto");
const but = document.querySelector("button");
const selet = document.querySelector("select");
const div = document.querySelector("#parag");
const valor = Number(inp.value);
const valores = [];
const sect = document.querySelector("#sec");

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function clicou() {
  if (isNumero(inp.value) && !inLista(inp.value, valores)) {
    valores.push(Number(inp.value));
    let item = document.createElement("option");
    item.text = `O número ${inp.value} foi adicionado.`;
    selet.appendChild(item);
  } else {
    alert("valor inválido ou ja encontrado na lista.");
  }
  inp.value = "";
  inp.focus();
}

function finalizou() {
  if (valores.length == 0) {
    alert("[ERR0R!] Nenhum número adicionado");
  } else {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }
    media = soma / tot;

    div.innerHTML = "";

    div.innerHTML += `<p>Um total de ${tot} números cadastrados</p>`;
    div.innerHTML += `<p> o maior valor informado foi ${maior}`;
    div.innerHTML += `<p> o menor valor informado foi ${menor}`;
    div.innerHTML += `<p> Somando todos os valores, temos ${soma}`;
    div.innerHTML += `<p> A média de todos os valores foi ${media}`;
  }
}
