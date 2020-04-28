import {Evento} from "./evento.class";

let newEventForm = null;

document.addEventListener("DOMContentLoaded", async e => {
    newEventForm = document.getElementById("newEvent");

    newEventForm.image.addEventListener("change", loadImage);
    newEventForm.addEventListener("submit", validateForm);
});

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
        const name = newEventForm.name.value;
        const image = document.getElementById("imgPreview").src;
        const date = newEventForm.date.value;
        const desc = newEventForm.description.value;
        const price = newEventForm.price.value;

        let newEvent = new Evento({name, image, date, description: desc, price});
        try {
            const evento = await newEvent.post();
            location.assign("index.html");
        } catch (e) {
            console.log(e);
        }
    }
}

function loadImage(event) {
    let file = event.target.files[0];
    let reader = new FileReader();

    if (file) reader.readAsDataURL(file);

    reader.addEventListener("load", e => {
        document.getElementById("imgPreview").src = reader.result;
    });
}