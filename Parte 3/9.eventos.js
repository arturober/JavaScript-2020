document.addEventListener("DOMContentLoaded", e => {
    let div = document.getElementById("div1");

    // div.addEventListener("mouseenter", e => div.classList.add("cambia"));
    // div.addEventListener("mouseleave", e => div.classList.remove("cambia"));

    div.addEventListener("click", e => 
        console.log(`Tipo: ${e.type}, Clics seguidos: ${e.detail}, coordenadas: ${e.offsetX}, ${e.offsetY}`));

    // div.addEventListener("mousemove", e => {
    //     div.innerText = `${e.offsetX}, ${e.offsetY}`; 
    // });

    div.addEventListener("mousemove", e => {
        div.innerText = `${e.offsetX}, ${e.offsetY}`; 
        div.style.backgroundColor = `rgb(${(e.offsetX / 300)*256}, ${(e.offsetY / 300)*256},0)`;
    });
});

