"use strict";

let newEventForm = null;

async function cargaEventos() {
    let eventos = await Evento.getEventos();
    eventos.forEach(e => mostrarEvento(e));
}

function mostrarEvento(evento) {
    let card = evento.toHTML();

    document.getElementById("eventsContainer").appendChild(card);
}

async function validateForm(event) {
    event.preventDefault();

    let ok = true;
    // Comprobamos todos los campos para detectar alguno vacío.
    Array.from(newEventForm.querySelectorAll(".form-control")).forEach(input => {
        input.classList.remove("is-valid", "is-invalid");
        if(!input.value) {
            input.classList.add("is-invalid");
            ok = false;
        } else {
            input.classList.add("is-valid");
        }
    });

    if (ok) {
        let evento = new Evento({
            name: newEventForm.name.value,
            image: document.getElementById("imgPreview").src,
            date: newEventForm.date.value,
            description: newEventForm.description.value,
            price: newEventForm.price.value
        });

        try {
            await evento.post();
            mostrarEvento(evento);
            newEventForm.reset();
            document.getElementById("imgPreview").src = "";
            document.querySelectorAll(".form-control").forEach(
                input => input.classList.remove("is-valid", "is-invalid")
            );
        } catch(e) {
            console.error(e);
        }
    }
}

function loadImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file) reader.readAsDataURL(file);

    reader.addEventListener('load', e => {
        document.getElementById("imgPreview").src = reader.result;
    });
}

document.addEventListener("DOMContentLoaded", e => {
    cargaEventos();

    newEventForm = document.getElementById("newEvent");

    newEventForm.image.addEventListener('change', loadImage); // Cargar imagen

    newEventForm.addEventListener('submit', validateForm); // Enviar formulario
});
