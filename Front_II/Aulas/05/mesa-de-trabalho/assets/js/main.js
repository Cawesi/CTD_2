const secao = document.querySelector("#carrinho");

const lista = document.createElement('ul');
lista.classList.add('lista');
secao.appendChild(lista);

let itens_lista = ["Carro", "Bike", "Patinete", "Celular", "Carregador"];
let li;

for (let i = 0; i < itens_lista.length; i++){

    li = document.createElement("li");
    li.classList.add('lista__item');
    li.innerText = itens_lista[i];
    lista.appendChild(li);
};