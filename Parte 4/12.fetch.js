const SERVER = 'http://arturober.com:5005';
let tablaProd;
let formProd;
let imgPreview;
let productos = [];

async function getProductos() {
    let resp = await fetch(SERVER + '/products');
    let json = await resp.json();
    productos = json.products;

    console.log(productos);

    productos.forEach(prod => {
        crearDOMProducto(prod);
    });
}

async function borrarProd(prod, tr) {
    await fetch(SERVER + '/products/' + prod.id, {
        method: 'DELETE'
    });
    productos.splice(productos.indexOf(prod), 1);
    tr.remove();
}

async function insertarProd(prod) {
    let resp = await fetch(SERVER + '/products', {
        method: 'POST',
        body: JSON.stringify(prod),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let json = await resp.json();
    let prodInsert = json.product;

    productos.push(prodInsert);
    crearDOMProducto(prodInsert);
}

function crearDOMProducto(prod) {
    let tr = document.createElement("tr");

    let tdImagen = document.createElement("td");
    let imagen = document.createElement("img");
    imagen.src = SERVER + '/' + prod.photo;
    tdImagen.appendChild(imagen);

    let tdNombre = document.createElement("td");
    tdNombre.innerText = prod.name;

    let tdDesc = document.createElement("td");
    tdDesc.innerText = prod.description;

    let tdBorrar = document.createElement("td");
    let borrar = document.createElement("button");
    borrar.innerText = "Borrar";
    borrar.addEventListener("click", e => borrarProd(prod, tr));
    tdBorrar.appendChild(borrar);

    tr.appendChild(tdImagen);
    tr.appendChild(tdNombre);
    tr.appendChild(tdDesc);
    tr.appendChild(tdBorrar);

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