console.log(document.body);

console.log(document.body.children);

// let lista = document.body.children[0];
let lista = document.body.firstElementChild;

Array.from(lista.children).forEach(li => console.log(li));

let primerLi = lista.firstElementChild;
let segundoLi = primerLi.nextElementSibling;

let elemento = lista.firstElementChild;
while(elemento) {
    console.log(elemento);
    elemento = elemento.nextElementSibling;
}

console.log(primerLi.parentElement.parentElement); // body