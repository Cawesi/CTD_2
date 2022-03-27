const tela = document.body;
const tela_inicial = document.querySelector('#telaInicial');
const btn_iniciar_jogo = document.querySelector('.botao');
const tabuleiro = document.querySelectorAll('.coordenada');


btn_iniciar_jogo.addEventListener('click', function(event){

    tela_inicial.classList.toggle('tela_de_bloqueio');
    document.querySelector('.tela_de_bloqueio').removeAttribute('id');
});

tela.addEventListener('keydown', function(event){

    if (event.code == "Space" || event.code == "Enter"){

        tela_inicial.classList.toggle('tela_de_bloqueio');
        document.querySelector('.tela_de_bloqueio').removeAttribute('id');
    };

    if (event.code == "Escape"){

        document.querySelector('.tela_de_bloqueio').setAttribute('id', 'telaInicial');
        document.querySelector('#telaInicial').classList.toggle('tela_de_bloqueio');
    }
});

let tab = document.querySelector('.tabuleiro');

tab.addEventListener('click', function(event){

    let clique = event.target;

    clique.innerText = 'X';
})

tab.addEventListener('dblclick', function(event){

    let clique = event.target;

    clique.innerText = 'O';
})