import productsTemplate from '../templates/product.handlebars';
import { ProductDB } from './product-db.class';

export class Product {  
    constructor(prodJSON) {
        if(prodJSON.id) {
            this.id = prodJSON.id;
        }
        this.name = prodJSON.name;
        this.description = prodJSON.description;
        this.photo = prodJSON.photo;
    }

    static async getAllProducts() {
        const db = await ProductDB.getDB();
        let products = await db.getAllProducts();
        return products.map(p => new Product(p));
    }

    async post() {
        const db = await ProductDB.getDB();
        db.insertProduct(this);
    }

    async delete() {
        const db = await ProductDB.getDB();
        await db.deleteProduct(this.id);
    }

    toHTML() {
        let tr = document.createElement('tr');
        let copiaProd = {...this};
        copiaProd.photo = this.photo;
        let productHTML = productsTemplate(copiaProd);
        tr.innerHTML = productHTML;

        let spanDel = tr.querySelector('.delete');

        spanDel.addEventListener('click', async e => {
            await this.delete();
            tr.parentElement.removeChild(tr);
        });

        return tr;
    }
}