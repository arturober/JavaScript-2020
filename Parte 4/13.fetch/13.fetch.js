const SERVER = 'http://arturober.com:5005';
let tablaProd;
let formProd;
let imgPreview;
let productos = [];

async function getProductos() {
    productos = Producto.getProductos();

    productos.forEach(prod => {
        crearDOMProducto(prod);
    });
}

async function insertarProd(prod) {
    let producto = new Producto(prod);
    let prodInsert = producto.add();

    productos.push(prodInsert);
    crearDOMProducto(prodInsert);
}

function crearDOMProducto(prod) {
    let tr = prod.toHTML();
    let borrar = tr.querySelector("button");

    borrar.addEventListener('click', async e => {
        await prod.delete();
        productos.splice(productos.indexOf(prod), 1);
        tr.remove();
    });

    tablaProd.appendChild(tr);
}

document.addEventListener("DOMContentLoaded", e => {
    tablaProd = document.getElementById("productos");
    formProd = document.getElementById("insertarProd");
    imgPreview = document.getElementById("imgPreview");

    getProductos();

    formProd.photo.addEventListener("change", e => {
        let fichero = formProd.photo.files[0];

        if(fichero && fichero.type.startsWith('image')) {
            let reader = new FileReader();
            reader.readAsDataURL(fichero); // Leerlo en base64
        
            reader.addEventListener('load', e => {
                // Visualizamos la imagen en un <img> en el HTML
                imgPreview.src = reader.result;
            });
        }
    });

    formProd.addEventListener('submit', async e => {
        e.preventDefault();

        let prod = {
            name: formProd.nombre.value,
            description: formProd.desc.value,
            photo: imgPreview.src
        };

        await insertarProd(prod);

        formProd.reset();
        imgPreview.src = '';
    });
});