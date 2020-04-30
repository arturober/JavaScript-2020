import productsTemplate from '../templates/product.handlebars';

let products = JSON.parse(localStorage.getItem('products') || '[]');

export class Product {  
    constructor(prodJSON) {
        this.name = prodJSON.name;
        this.description = prodJSON.description;
        this.photo = prodJSON.photo;
    }

    static getAllProducts() {
        return products.map(p => new Product(p));
    }

    post() {
        products.push(this);
        console.log(products);
        localStorage.setItem('products', JSON.stringify(products));
    }

    delete() {
        products.splice(products.indexOf(this), 1);
        localStorage.setItem('products', JSON.stringify(products));
    }

    toHTML() {
        let tr = document.createElement('tr');
        let copiaProd = {...this};
        copiaProd.photo = this.photo;
        let productHTML = productsTemplate(copiaProd);
        tr.innerHTML = productHTML;

        let spanDel = tr.querySelector('.delete');

        spanDel.addEventListener('click', e => {
            this.delete();
            tr.parentElement.removeChild(tr);
        });

        return tr;
    }
}