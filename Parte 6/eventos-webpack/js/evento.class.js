import {SERVER} from './constants';
import {Http} from './http.class';

export class Evento {
    constructor({ id, name, description, image, price, date }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = +price;
        this.date = new Date(date);
    }

    static async getEventos() {
        let resp = await Http.get(SERVER + '/eventos');
        return resp.eventos.map(ev => new Evento(ev));
    }

    async post() {
        let resp = await Http.post(SERVER + '/eventos', this);
        this.image = resp.evento.image;
        this.id = resp.evento.id;
    }

    async delete() {
        await Http.delete(SERVER + '/eventos/' + this.id);
    }

    toHTML() {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = this.image;
        card.appendChild(img);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        card.appendChild(cardBody);

        const cardTitle = document.createElement("h4");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = this.name;
        cardBody.appendChild(cardTitle);

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = this.description; // innertext añade <br> en los saltos de línea (textContent no)
        cardBody.appendChild(cardText);

        const divBorrar = document.createElement("div");
        const borrar = document.createElement("button");
        borrar.classList.add("btn", "btn-danger");
        borrar.textContent = "Borrar";
        divBorrar.appendChild(borrar);
        cardBody.appendChild(divBorrar);

        borrar.addEventListener("click", async e => {
            await this.delete();
            card.remove();
        });

        const cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");
        card.appendChild(cardFooter);

        const dateObj = this.date;
        // String.padStart es un método núevo para añadir ceros (u otro caracter) delante de un string.
        // Si no funciona en tu navegador (En Chrome y Firefox debería), quita el método padStart.
        const dia = String(dateObj.getDate()).padStart(2, '0'); // Ejemplo: 2 -> 02
        const mes = String(dateObj.getMonth() + 1).padStart(2, '0');

        const footerText = document.createElement("small");
        footerText.classList.add("text-muted");
        footerText.textContent = `${dia}/${mes}/${dateObj.getFullYear()}`;
        cardFooter.appendChild(footerText);

        const priceText = document.createElement("span");
        priceText.classList.add("float-right");
        priceText.textContent = (+this.price).toFixed(2) + "€";
        footerText.appendChild(priceText);

        return card;
    }
}
