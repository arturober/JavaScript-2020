import "@babel/polyfill";
import {Evento} from "./evento.class";
import {Auth} from "./auth.class";

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


function showEvents(events) {
    let container = document.getElementById("eventsContainer");
    while (container.firstChild) { // Delete all children
        container.removeChild(container.firstChild);
    }

    events.forEach(event => {       
        let eventCard = event.toHTML();
        // Añadimos el evento de borrado al botón "Delete"
        eventCard.querySelector(".card-body .btn").addEventListener("click", async e => {
            let del = confirm("¿Seguro que quieres borrar el evento?");
            if(del) {
                await event.delete();
                eventList.splice(eventList.indexOf(event), 1);
                showEvents(eventList);
            }  
        });
        container.appendChild(eventCard);
    });
}