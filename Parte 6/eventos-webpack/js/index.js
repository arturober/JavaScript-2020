import {Evento} from "./evento.class";

let eventList = [];

document.addEventListener("DOMContentLoaded", async e => {
    eventList = await Evento.getEventos();
    showEvents(eventList);
});


function showEvents(events) {
    let container = document.getElementById("eventsContainer");

    events.forEach(event => {       
        let eventCard = event.toHTML();
        container.appendChild(eventCard);
    });
}