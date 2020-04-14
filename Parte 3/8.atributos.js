let parrafo = document.getElementById("parrafo");
let select = document.getElementById("colores");
let subrayado = document.getElementById("subrayado");
let negrita = document.getElementById("negrita");

select.addEventListener("change", e => {
    parrafo.style.color = select.value;
});

subrayado.addEventListener("click", e => {
    parrafo.classList.toggle("subrayado");
    subrayado.classList.toggle("activado");
});

negrita.addEventListener("click", e => {
    parrafo.classList.toggle("negrita");
    negrita.classList.toggle("activado");
});
