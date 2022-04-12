
var formulario = document.forms[0];

formulario.addEventListener('submit', function(event) {

    event.preventDefault()
    
    // 1. Crie um objeto literal para armazenar os itens considerando as propriedades: id, tarefa, autor.
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then((response) => {return response.json()})
        .then((tarefa) => {

            let lista_ul_pai = document.querySelector('.c-lista');
            let lista_li_remove = document.querySelector('.c-lista__item');
            lista_ul_pai.removeChild(lista_li_remove);

            tarefa.forEach(element => {
                let emoji = '😄';
                let lista_ul = document.querySelector('.c-lista');
                let lista_li = document.createElement('li');
                lista_li.classList.add('c-lista__item');
                lista_li.innerText = emoji + ' ' + element.title;
                lista_ul.appendChild(lista_li);
        });
    })

    

});