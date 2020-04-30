import {Product} from './product.class';

let tableBody = null;
let products = [];

function addProduct(prod) {
    tableBody.appendChild(prod.toHTML());
}

document.addEventListener('DOMContentLoaded', e => {
    tableBody = document.querySelector('#products tbody');

    let products = Product.getAllProducts();
    products.forEach(p => addProduct(p));
});
