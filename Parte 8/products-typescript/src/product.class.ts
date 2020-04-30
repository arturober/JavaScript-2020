import {SERVER} from './constants';
import {Http} from './http.class';
import { IProduct, ResponseProducts, ResponseProduct } from './interfaces';
const productsTemplate = require('../templates/product.handlebars');

export class Product {
    private id: number;
    private name: string;
    private description: string;
    private photo: string;

    constructor(prodJSON: IProduct) {
        this.id = prodJSON.id || null; 
        this.name = prodJSON.name;
        this.description = prodJSON.description;
        this.photo = prodJSON.photo;
    }

    static async getAllProducts() {
        const resp = await Http.get<ResponseProducts>(`${SERVER}/products`);
        return resp.products.map(p => new Product(p));
    }

    async post() {
        const resp = await Http.post<ResponseProduct>(`${SERVER}/products`, this);
        this.id = resp.product.id;
        this.photo = resp.product.photo;
    }

    delete() {
        return Http.delete<void>(`${SERVER}/products/${this.id}`);
    }

    toHTML(): HTMLTableRowElement {
        let tr = document.createElement('tr');
        let copiaProd = {...this};
        copiaProd.photo = SERVER + '/' + this.photo;
        let productHTML = productsTemplate(copiaProd) as string;
        tr.innerHTML = productHTML;

        let spanDel = tr.querySelector('.delete');

        spanDel.addEventListener('click', e => {
            this.delete().then(() => tr.parentElement.removeChild(tr));
        });

        return tr;
    }
}