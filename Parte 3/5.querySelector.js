let boton = document.getElementById("mostrarCampos");

boton.addEventListener("click", e => {
    let campos = document.querySelectorAll("#formRegistro input");
    campos.forEach(input => {
        console.log(`${input.id}: ${input.value}`);
    });
});

let boton2 = document.getElementById("mostrarCamposTexto");

boton2.addEventListener("click", e => {
    let campos = document.querySelectorAll("#formRegistro input[type=text]");
    campos.forEach(input => {
        console.log(`${input.id}: ${input.value}`);
    });
});