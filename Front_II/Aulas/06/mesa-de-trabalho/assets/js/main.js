const carrinho = document.querySelector('#carrinho');

const lista = document.createElement('ul');
lista.classList.add('lista');
carrinho.appendChild(lista);

let itens_lista = ["Carro", "Bike", "Patinete", "Celular", "Carregador"];

for (let i = 0; i < itens_lista.length; i++){

    let li = document.createElement('li');
    li.classList.add('lista__item');
    li.innerText = itens_lista[i];
    lista.appendChild(li);
};

const item_carrinho = document.querySelectorAll('.lista__item');

item_carrinho[0].classList.add("removido");
item_carrinho[0].innerText = "Carro - Removido";

item_carrinho[1].classList.add("selecionado");
item_carrinho[1].innerText = "Bike - Selecionado";

item_carrinho[2].classList.add("selecionado");
item_carrinho[2].innerText = "Patinete - Selecionado";

item_carrinho[3].classList.add("removido");
item_carrinho[3].innerText = "Celular - Removido";

item_carrinho[4].classList.add("removido");
item_carrinho[4].innerText = "Carregador - Removido";