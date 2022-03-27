# Mesa de trabalho
        
## Instruções

### Parte 1

1. Selecione via JavaScript o elemento `<section id="carrinho">"` e guarda informação em uma variável.
2. Crie um elemento `<ul>`.
3. Adicione a classe **`lista`** ao elemento `<ul>`.
4. Adicione o elemento `<ul>` no elemento `<section id="carrinho">"`.
5. Crie cinco elementos `<li>`.
6. Adicione a classe **`lista__item`** ao elemento `<li>`.
7. Adicione texto a cada `<li>` conforme o trecho de código disponibilizado a seguir.
8. Adicione os cinco elementos `<li>` no elemento `<ul>`.

<br>

```html
<section id="carrinho">
    <h1>Seu carrinho</h1>
    <ul class="lista">
        <li class="lista__item">Carro</li>
        <li class="lista__item">Bike</li>
        <li class="lista__item">Patinete</li>
        <li class="lista__item">Celular</li>
        <li class="lista__item">Carregador</li>
    </ul>
</section>
```
### Parte 2

1. Selecione os itens via JavaScript utilizando o métodos de seleção abordado em aula.
2. Manipule o texto de cada item individualmente, conforme o comentário.
3. Manipule quais classes devem ser adicionada e/ou removida de cada item.
3.1. Crie os estilos no arquivo style.css. É importante manter os mesmos nomes de classe sujerida pelo professor.

```html
<section>
        <h1>Seu carrinho</h1>
        <ul class="lista">
            <!-- Adicione a esse item a classe .removido -->
            <!-- Substitua o texto para "Carro - Removido" -->
            <li class="lista__item">Carro</li>
            
            <!-- Adicione a esse item a classe .selecionado -->
            <!-- Substitua o texto para "Bike - Selecionado" -->
            <li class="lista__item">Bike</li>
            
            <!-- Adicione a esse item a classe .selecionado -->
            <!-- Substitua o texto para "Patinete - Selecionado" -->
            <li class="lista__item">Patinete</li>

            <!-- Adicione a esse item a classe .removido -->
            <!-- Substitua o texto para "Celular - Removido" -->
            <li class="lista__item">Celular</li>
            
            <!-- Adicione a esse item a classe .removido -->
            <!-- Substitua o texto para "Carregador - Removido" -->
            <li class="lista__item">Carregador</li>
        </ul>
</section>
```
### Resultado final...