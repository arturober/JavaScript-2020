let formTarea;
let listaTareas;

function mostrar(tarea) {
    let li = document.createElement("li");
    li.innerText = tarea.descripcion;

    let borrar = document.createElement("button");
    borrar.innerText = "Borrar";

    borrar.addEventListener("click", async e => {
        await deleteTarea(tarea);
        li.remove();
    });

    li.appendChild(borrar);
    listaTareas.appendChild(li);
}

async function getTareas() {
    let resp = await fetch("http://arturober.com:5006/tareas");
    // Comprobar posibles errores
    let json = await resp.json();
    json.tareas.forEach(t => mostrar(t));
}

async function addTarea(tarea) {
    let resp = await fetch("http://arturober.com:5006/tareas",  {
        method: "POST", 
        body: JSON.stringify(tarea), 
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // Comprobar posibles errores
    let json = await resp.json();
    mostrar(json.tarea);
}

async function deleteTarea(tarea) {
    let resp = await fetch("http://arturober.com:5006/tareas/" + tarea.id,  {method: "DELETE"});
    // Comprobar posibles errores (resp.ok)
}

document.addEventListener("DOMContentLoaded", e => {
    formTarea = document.getElementById("nuevaTarea");
    listaTareas = document.getElementById("listaTareas");

    getTareas();

    formTarea.addEventListener('submit', e => {
        e.preventDefault();
        let tarea = {
            descripcion: formTarea.descripcion.value
        };

        addTarea(tarea);
    });
});