//JS - Conceito 2
//Criando arrow function

//Modo 1 de criação de função
function upperName1(nome) {
  return nome.toUpperCase();
}

//Modo 2 de criação de função
const upperName2 = function(nome) {
  return nome.toUpperCase();
}

//Modo 3 de criação de função
const upperName3 = (nome) => {
  return nome.toUpperCase();
}

//Modo 4 de criação de função - exemplo comum nos frameworks
const upperName4 = (nome) => nome.toUpperCase();

//Diferença de function e arrow function - visibilidade do this