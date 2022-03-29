
// 1. Selecione o formulário
const formulario = document.querySelector('#formularioDeCadastro');
let lista = document.querySelector('.c-lista');

// 2. Crie da rotina que será disparada a partir do evento de envio
// 2.2. Remova todos os espaços vazios
// 2.1. Remova todos os números permitindo apenas texto


formulario.addEventListener('submit', function(event){

    let valor_imput = event.target[0].value;

    event.preventDefault()

    let valor = valor_imput.trim();

    let re = /\d/g;

    if(!re.test(valor_imput)){

        lista.innerHTML = `<li class="c-lista__item"> ${valor}</li>`;
    } else {

        valor = valor.replace(re, "");
        
        valor = valor.trim();
        lista.innerHTML = `<li class="c-lista__item"> ${valor}</li>`;  // 3. Capture o evento de envio do formulário e disparar a rotina
    }
})




