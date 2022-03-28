const abrir_menu = document.body;
let sidebar = document.querySelector('.l-sidebar');
let btn_about_me = document.querySelector('.c-btn');
let btn_menu = document.querySelector('.l-sidebar__btn');


abrir_menu.addEventListener('keydown', (event) => {

    if(event.code == "Space"){
        let valor_classe = sidebar.getAttribute('class');
    
        if(valor_classe.indexOf('l-sidebar--close') == -1){

            sidebar.classList.toggle('l-sidebar--open');
        } else {

            sidebar.classList.remove('l-sidebar--close');
            sidebar.classList.toggle('l-sidebar--open');
        };
    };
})

btn_menu.addEventListener('click', function(event){

    let valor_classe = sidebar.getAttribute('class');
    
    if(valor_classe.indexOf('l-sidebar--close') == -1){

        sidebar.classList.toggle('l-sidebar--open');
    } else {

        sidebar.classList.remove('l-sidebar--close');
        sidebar.classList.toggle('l-sidebar--open');
    };
});

sidebar.addEventListener('click', () => { 

    sidebar.classList.toggle('l-sidebar--close');
    sidebar.classList.remove('l-sidebar--open');
});