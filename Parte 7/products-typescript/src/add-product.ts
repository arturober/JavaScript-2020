import {Product} from './product.class';

let formProd: HTMLFormElement = null;
let imagePreview: HTMLImageElement = null;

function convertBase64(file: File) {
    let reader = new FileReader();
    reader.addEventListener('load', () => { //Converted into Base64 event (async)
        imagePreview.src = reader.result as string;
    }, false);
    if (file) { // File has been selected (convert to Base64)
        reader.readAsDataURL(file);
    }
}

document.addEventListener('DOMContentLoaded', async e => {
    imagePreview = document.getElementById('imagePreview') as HTMLImageElement;
    formProd = document.getElementById('addProduct') as HTMLFormElement;

    document.getElementById('photo').addEventListener('change', () => {
        let file = (document.getElementById('photo') as HTMLInputElement).files[0];
        convertBase64(file);
    });

    formProd.addEventListener('submit', async e => {
        e.preventDefault();
        let prod = new Product({
            name: (formProd.name as any).value,
            description: formProd.description.value,
            photo: imagePreview.src
        });
        
        await prod.post();
        location.assign('index.html');
    });
});

