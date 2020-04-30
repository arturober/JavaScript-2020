import {Product} from './product.class';

let tableBody = null;
let products = [];

function addProduct(prod) {
    tableBody.appendChild(prod.toHTML());
}

document.addEventListener('DOMContentLoaded', async e => {
    tableBody = document.querySelector('#products tbody');

    let products = await Product.getAllProducts();
    products.forEach(p => addProduct(p));
});
