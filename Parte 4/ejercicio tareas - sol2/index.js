let formTarea;
let listaTareas;

function mostrar(tarea) {
    let li = tarea.toHTML();
    listaTareas.appendChild(li);
}

async function getTareas() {
    let tareas = await Tarea.getTareas();
    tareas.forEach(t => mostrar(t));
}

async function addTarea(tareaInsert) {
    let tarea = tareaInsert.post();
    mostrar(tarea);
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
