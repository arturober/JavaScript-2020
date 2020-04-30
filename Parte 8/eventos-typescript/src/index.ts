import {Evento} from "./classes/evento.class";
import {Auth} from "./classes/auth.class";

let eventList = [];

Auth.checkToken().catch(() => location.assign("login.html"));

document.addEventListener("DOMContentLoaded", async e => {
    eventList = await Evento.getEvents();
    showEvents(eventList);

    document.getElementById("logout").addEventListener("click", e => {
        e.preventDefault();
        Auth.logout();
        location.assign("login.html");
    });
});


function showEvents(eventos: Evento[]): void {
    let container = document.getElementById("eventsContainer");
    while (container.firstChild) { // Delete all children
        container.removeChild(container.firstChild);
    }

    eventos.forEach(evento => {       
        let eventCard = evento.toHTML();
        // Añadimos el evento de borrado al botón "Delete"
        eventCard.querySelector(".card-body .btn").addEventListener("click", async e => {
            let del = confirm("¿Seguro que quieres borrar el evento?");
            if(del) {
                await evento.delete();
                eventList.splice(eventList.indexOf(event), 1);
                showEvents(eventList);
            }  
        });
        container.appendChild(eventCard);
    });
}