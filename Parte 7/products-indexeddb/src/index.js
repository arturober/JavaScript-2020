import {Product} from './product.class';
import { ProductDB } from './product-db.class';

let tableBody = null;
let products = [];

function addProduct(prod) {
    tableBody.appendChild(prod.toHTML());
}

document.addEventListener('DOMContentLoaded', async e => {
    tableBody = document.querySelector('#products tbody');

    let products = await Product.getAllProducts();
    products.forEach(p => addProduct(p));

    document.getElementById('deleteDB').addEventListener('click', async e => {
        try {
            await ProductDB.deleteDatabase();
            while(tableBody.firstChild) {
                tableBody.removeChild(tableBody.firstChild);
            }
        } catch(e) {
            alert(e);
        }
    });
});

function example(a) {
    if(! (a instanceof Array)) {
        return;    
    }
}

let a = [];
example(a);
