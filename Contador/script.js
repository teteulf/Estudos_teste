function clicou(){

  var numb1 = document.querySelector('#n1').value
  var numb2 = document.querySelector('#n2').value
  var numb3 = document.querySelector('#n3').value
  var text = document.querySelector('p')

  if (numb1.length > 0 || numb2.length > 0 || numb3.length  > 0){

    text.innerHTML =''

    if (Number(numb1) > Number(numb2)){

    for (let n = Number(numb1) ; n >= Number(numb2) ; n -= Number(numb3)){

      text.innerHTML +=`${n}, `}

      text.innerHTML +='FIM'}

      else{

    for (let n = Number(numb1) ; n <= Number(numb2) ; n += Number(numb3)){

    text.innerHTML +=`${n}, `}
  
    text.innerHTML += 'FIM'}}

    else {
    alert('Por favor digite um número válido')}}