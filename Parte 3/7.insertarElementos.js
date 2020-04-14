let lista = document.getElementById("list");
let input = document.getElementById("input1");
let botonAddFirst = document.getElementById("addFirst");
let botonAddLast = document.getElementById("addLast");

function crearLi() {
    let li = document.createElement("li");
    li.innerText = input.value;
    let span = document.createElement("span");
    span.innerText = "X"
    span.classList.add("eliminar");
    li.appendChild(span);
    input.value = "";

    span.addEventListener("click", e => {
        li.remove();
    });

    return li;
}

botonAddFirst.addEventListener("click", e => {
    let li = crearLi();
    lista.insertBefore(li, lista.firstElementChild);
});

botonAddLast.addEventListener("click", e => {
    let li = crearLi();
    lista.appendChild(li);
});
