import {Http} from "./http.class";
import {SERVER} from "../constants";
import * as moment from "moment";
import { IEvento } from "../interfaces/ievento";
import { IUsuario } from "../interfaces/iusuario";
declare function require(module: string): any; // Ahora podemos usar require
let productsTemplate = require("../../templates/evento.handlebars");

export class Evento implements IEvento {
    id?: number;
    name: string;
    date: string;
    description: string;
    image: string;
    price: number;
    creator: IUsuario;

    constructor({id, name, date, description, image, price, creator}: IEvento) {
        this.id          = id;
        this.name        = name;
        this.date        = date;
        this.description = description;
        this.image       = image;
        this.price       = +price;
        this.creator     = creator;
    }

    static async getEvents(): Promise<Evento[]> { 
        const response = await Http.get(`${SERVER}/eventos`);
        return response.eventos.map(e => new Evento(e));
    }

    async post(): Promise<Evento> { 
        const response = await Http.post(`${SERVER}/eventos`, this);

        this.id = response.evento.id;
        this.image = response.evento.image;
        return this;
    }

    async delete(): Promise<void> {
        await Http.delete(`${SERVER}/eventos/${this.id}`);
    }

    toHTML(): HTMLDivElement {
        let card = document.createElement("div");
        card.classList.add("card");

        // Generamos una copia del objeto con la fecha cambiada
        let eventoCopia = {...this, date: moment(this.date).format("DD/MM/YYYY")};
        card.innerHTML = productsTemplate(eventoCopia);
        return card;
    }
}
