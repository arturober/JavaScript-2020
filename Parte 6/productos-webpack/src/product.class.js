import {SERVER} from './constants';
import {Http} from './http.class';
import productsTemplate from '../templates/product.handlebars';

export class Product {
    constructor(prodJSON) {
        this.id = prodJSON.id || null; 
        this.name = prodJSON.name;
        this.description = prodJSON.description;
        this.photo = prodJSON.photo;
    }

    static async getAllProducts() {
        const resp = await Http.get(`${SERVER}/products`);
        return resp.products.map(p => new Product(p));
    }

    async post() {
        const resp = await Http.post(`${SERVER}/products`, this);
        this.id = resp.product.id;
        this.photo = resp.product.photo;
    }

    delete() {
        return Http.delete(`${SERVER}/products/${this.id}`);
    }

    toHTML() {
        let tr = document.createElement('tr');
        let copiaProd = {...this};
        copiaProd.photo = SERVER + '/' + this.photo;
        let productHTML = productsTemplate(copiaProd);
        tr.innerHTML = productHTML;

        let spanDel = tr.querySelector('.delete');

        spanDel.addEventListener('click', e => {
            this.delete().then(() => tr.parentElement.removeChild(tr));
        });

        return tr;
    }
}