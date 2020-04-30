import {Http} from "./http.class";
import {SERVER} from "./constants";
import * as moment from "moment";
import productsTemplate from "../templates/evento.handlebars";

export class Evento {
    constructor({id, name, date, description, image, price, creator}) {
        this.id          = id;
        this.name        = name;
        this.date        = new Date(date);
        this.description = description;
        this.image       = image;
        this.price       = +price;
        this.creator     = creator;
    }

    static async getEvents() { // Devuelve Promise<Array<Evento>> con el array de eventos
        const response = await Http.get(`${SERVER}/eventos`);
        return response.eventos.map(e => new Evento(e));
    }

    async post() { // Devuelve Promise<Evento> 
        const response = await Http.post(`${SERVER}/eventos`, this);

        this.id = response.evento.id;
        this.image = response.evento.image;
        return this;
    }

    delete() { // Returns Promise<true>
        return Http.delete(`${SERVER}/eventos/${this.id}`);
    }

    toHTML() {
        let card = document.createElement("div");
        card.classList.add("card");

        // Generamos una copia del objeto con la fecha cambiada
        let eventoCopia = {...this, date: moment(this.date).format("DD/MM/YYYY")};
        card.innerHTML = productsTemplate(eventoCopia);
        return card;
    }
}
