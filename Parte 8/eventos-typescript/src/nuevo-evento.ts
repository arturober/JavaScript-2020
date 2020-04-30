import {Evento} from "./classes/evento.class";
import {Auth} from "./classes/auth.class";

let newEventForm: HTMLFormElement = null;
let imgPreview: HTMLImageElement = null;

Auth.checkToken().catch(() => location.assign("login.html"));

document.addEventListener("DOMContentLoaded", async e => {
    newEventForm = document.getElementById("newEvent") as HTMLFormElement;
    imgPreview = document.getElementById("imgPreview") as HTMLImageElement;

    newEventForm.image.addEventListener("change", loadImage);
    newEventForm.addEventListener("submit", validateForm);

    document.getElementById("logout").addEventListener("click", e => {
        e.preventDefault();
        Auth.logout();
        location.assign("login.html");
    });
});

async function validateForm(event: Event) {
    event.preventDefault();

    let ok = true;
    // Comprobamos todos los campos para detectar alguno vacío.
    Array.from(newEventForm.querySelectorAll(".form-control"))
    .forEach((input: HTMLInputElement) => {
        input.classList.remove("is-valid", "is-invalid");
        if(!input.value) {
            input.classList.add("is-invalid");
            ok = false;
        } else {
            input.classList.add("is-valid");
        }
    });

    if (ok) {
        const name = (newEventForm.name as any).value; // name es un atributo HTML también (falla casting a HTMLInputElement)
        const image = imgPreview.src;
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

function loadImage(event: Event) {
    let file = (event.target as HTMLInputElement).files[0];
    let reader = new FileReader();

    if (file) reader.readAsDataURL(file);

    reader.addEventListener("load", e => {
        imgPreview.src = reader.result as string;
    });
}