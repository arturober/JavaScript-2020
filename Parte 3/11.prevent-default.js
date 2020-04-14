document.addEventListener("DOMContentLoaded", e => {
    let a = document.getElementById("enlace");

    a.addEventListener("click", e => {
        let resp = confirm("¿Seguro que quieres abandonar la página?");
        if (!resp) {
            e.preventDefault();
        }
    });
});