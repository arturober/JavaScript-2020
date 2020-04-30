import {Product} from './product.class';

let formProd = null;
let imagePreview = null;

function convertBase64(file) {
    let reader = new FileReader();
    reader.addEventListener('load', () => { //Converted into Base64 event (async)
        imagePreview.src = reader.result;
    }, false);
    if (file) { // File has been selected (convert to Base64)
        reader.readAsDataURL(file);
    }
}

document.addEventListener('DOMContentLoaded', async e => {
    imagePreview = document.getElementById('imagePreview');
    formProd = document.getElementById('addProduct');

    document.getElementById('photo').addEventListener('change', () => {
        let file = document.getElementById('photo').files[0];
        convertBase64(file);
    });

    formProd.addEventListener('submit', async e => {
        e.preventDefault();
        let prod = new Product({
            name: formProd.name.value,
            description: formProd.description.value,
            photo: imagePreview.src
        });
        
        await prod.post();
        location.assign('index.html');
    });
});

