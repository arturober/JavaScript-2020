"use strict";

let newEventForm = null;

document.addEventListener("DOMContentLoaded", e => {
    newEventForm = document.getElementById("newEvent");

    newEventForm.image.addEventListener('change', loadImage); // Cargar imagen

    newEventForm.addEventListener('submit', validateForm); // Enviar formulario
});


function validateForm(event) {
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
    
        addEvent(name, image, date, desc, price);
        newEventForm.reset();
        document.getElementById("imgPreview").src = "";
        document.querySelectorAll(".form-control").forEach(
            input => input.classList.remove("is-valid", "is-invalid")
        );
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

function addEvent(name, image, date, desc, price) {
    const card = document.createElement("div");
    card.classList.add("card");
    document.getElementById("eventsContainer").appendChild(card);

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = image;
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = name;
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = desc; // innertext añade <br> en los saltos de línea (textContent no)
    cardBody.appendChild(cardText);

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
    card.appendChild(cardFooter);

    const dateObj = new Date(date);
    // String.padStart es un método núevo para añadir ceros (u otro caracter) delante de un string.
    // Si no funciona en tu navegador (En Chrome y Firefox debería), quita el método padStart.
    const dia = String(dateObj.getDate()).padStart(2,'0'); // Ejemplo: 2 -> 02
    const mes = String(dateObj.getMonth() + 1).padStart(2,'0');

    const footerText = document.createElement("small");
    footerText.classList.add("text-muted");
    footerText.textContent = `${dia}/${mes}/${dateObj.getFullYear()}`;
    cardFooter.appendChild(footerText);

    const priceText = document.createElement("span");
    priceText.classList.add("float-right");
    priceText.textContent = (+price).toFixed(2) + "€";
    footerText.appendChild(priceText);

}

