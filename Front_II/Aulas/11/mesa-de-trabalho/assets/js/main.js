
/* 
    3. Crie uma rotina que será disparada sempre que o usuário tirar o foco da campo de entrada

        - 2.1. Valide se o campo esta vazio

            - Se o campo estiver vazio, desative o botão `<button class="c-form__botao u-my" type="submit">Adicionar item</button>`.

        - 2.2. Valide se existem caracteres especiais 

            - Se o campo possuir caracteres especiais, apresente a seguinte mensagem no console do navegador `"Não é permitido o uso de caracteres especiais em sua lista."`.
*/

// Selecione o formulário e o botão do campo de entrada
let formulario = document.forms[0];

// Valide se existem caracteres especiais
function tem_caracter_especial(valor){

    // Remova todos os espaços vazios no início e no fim do texto
    let valor_tratado =  valor.trim();

    let regx_carac_espec = /\W/g;
    let regx_space = /\s/g;
    valor_tratado = valor.replace(regx_space, "");
    valor_tratado = regx_carac_espec.test(valor_tratado);

    return valor_tratado;
};

let validar_entrada = document.querySelector('.c-form__campo');
let btn = document.querySelector('.c-form__botao');

validar_entrada.addEventListener('mouseout', function(){

    if (this.value == ''){

        alert('Vazio')
        btn.style.backgroundColor = 'grey';
        btn.setAttribute('disabled', 'true');
    } else {
        btn.style.backgroundColor = 'orangered';
        btn.removeAttribute('disabled');
    }
})


// Crie uma rotina que será disparada a partir do evento de envio
formulario.addEventListener('submit', function(event){ 
    
    event.preventDefault();
    let valor_imput = event.target['item'].value;
    //  Se o campo possuir caracteres especiais, apresente um alerta para o usuário com a seguinte mensagem 
    //  "Não é permitido o uso de caracteres especiais em sua lista."
    if(tem_caracter_especial(valor_imput)){

        alert("Não é permitido o uso de caracteres especiais em sua lista.");
    } else {
        let li_empyt = document.querySelector('.c-lista__item_empyt');
        li_empyt.innerText = "";
        // Caso passe na validacão, apresente o item no elemento DOM `<li class="c-lista__item">`.
        let lista = document.querySelector('.c-lista');
        let li = document.createElement('li');
        li.classList.add('c-lista__item');
        li.innerText = 	`- ${valor_imput}`;
        lista.appendChild(li);
    };
});