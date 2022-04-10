let formulario = document.forms[0];
// console.log(formulario[0]);

let btn_page_one = document.querySelector('.c-form__botao');

btn_page_one.addEventListener('click', function(event){

    event.preventDefault();

    let user_name = document.querySelector('.c-form__campo').value;

    // let endereco_completo = location.href;
    // let parametro = location.search;
    // let rota = location.pathname;
    // let dominio = location.hostname;
    // let dominio_completo = location.host;
    // let porta = location.port;
    // let protocolo = location.protocol;

    let select = document.getElementById('select');
    let lang_value = select.options[select.selectedIndex].value;

    endereco_completo = `http://127.0.0.1:5500/Front_II/Aulas/14/mesa-de-trabalho/resultado/index.html?nome=${user_name}&lang=${lang_value}`;
    // console.log(endereco_completo)

    window.location.replace(endereco_completo);

});
    



/*
    Implemente seu algorítmo aqui...

    Resumo da atividade:

    1. Capture o nome do usuário a partir do campo `<input name="usuario">`:

    - 1.1. Armazene esse valor em uma variável;

    - 2.2. Redirecione o usuário e envie o valor para rota `resultado/` com parametro `nome`.

    2. Crie um parametro `lang` e defina o valor `br`. 

    3. Capture o valor do parametro `usuario`:

        - 1.1. Se houver o parametro `usuario` apresente o valor no elemento `<h1 class="texto">`

        - 1.2. Caso contrário apresente apenas a saudação. 
        
            Nota: A saudação já esta presente no código HTML.

    4. Armaze as informações no `localStorage` e persista as informações.

    5. BONUS: Armazene as informações de linguagem, presente no parametro `lang`:

        - 4.1. Altere o idioma da saudação

            Exemplo: Olá, Hi, Holá, etc.

            Nota: O intuito é realizar uma prova de conceito, portanto, não se preocupe com a quantidade de idiomas suportados.

*/
