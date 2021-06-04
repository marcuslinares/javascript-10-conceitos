//JS - Conceito 1
//Criando um objeto
const menu = {
  class: ".principal",
  ativar() {
    const menuElement = document.querySelector(this.class)
    console.log(menuElement);
  }
}

menu.ativar();

// No js tudo é objeto - você acessa as propriedades e métodos através do .
// Somente NULL e undefined não possui métodos ou propriedades