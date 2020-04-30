import { Product } from "./product.class";

let tableBody: HTMLTableSectionElement = null;
let products: Product[] = [];

function addProduct(prod: Product) {
    tableBody.appendChild(prod.toHTML());
}

document.addEventListener('DOMContentLoaded', async e => {
    tableBody = document.querySelector('#products tbody');

    products = await Product.getAllProducts();
    products.forEach(p => addProduct(p));
});
