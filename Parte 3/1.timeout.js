let idTimer;

document.getElementById("saludar").addEventListener("click", e => {
    let p = document.getElementById("p1");
    let input = document.getElementById("nombre");

    idTimer = setTimeout(() => p.innerText = "Hola " + input.value, 5000);
});

document.getElementById("cancelar").addEventListener("click", e => {
    clearTimeout(idTimer);
});

