document.getElementById("alert").addEventListener("click", e => {
    alert("Mensaje de prueba");
});

document.getElementById("confirm").addEventListener("click", e => {
    let resp = confirm("¿Te gustan las hamburguesas?");
    console.log(`Has contestado que ${resp ? 'sí' : 'no'}`);
});

document.getElementById("prompt").addEventListener("click", e => {
    let resp = prompt("¿Cuantos años tienes?");
    console.log("Respuesta: " + resp);
});
