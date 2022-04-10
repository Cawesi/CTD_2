let endereco_completo = location.href;
console.log(endereco_completo)
let parametro = location.search;

let search_par = new URLSearchParams(parametro);
console.log(search_par)
let name_user = search_par.get('nome');
console.log(name_user)
let lang_page = search_par.get('lang');
console.log(lang_page)

let status_name = search_par.has('nome');
console.log(status_name)
let status_lang = search_par.has('lang');
console.log(status_lang)

let idiomas = {
    br: "Olá",
    us: "Hello",
    es: "Hola",
    fr: "Salut",
    it: "Ciao",
    ru: "Привет",
    al: "Hi",
};

if (status_lang){

    lang_page = idiomas[lang_page];
};

if (status_name){

    let saudacao = document.querySelector('.texto');
    saudacao.innerText = `${lang_page} ${name_user} `;
};