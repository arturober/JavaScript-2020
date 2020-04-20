class Product {
    constructor(prodJSON) {
        this.id = prodJSON.id; 
        this.name = prodJSON.name;
        this.description = prodJSON.description;
        this.photo = prodJSON.photo;
    }

    static async getProducts() {
        let response = await Http.get(`${SERVER}/products`);
        return response.products.map(prod => new Product(prod));
    }

    async add() {
        let response = await Http.post(`${SERVER}/products`, this);
        return new Product(response.product);
    }

    async update() {
        let response = await Http.put(`${SERVER}/products/${this.id}`, this)
        return new Product(response.product);
    }

    delete() {
        return Http.delete(`${SERVER}/products/${this.id}`);
    }

    toHTML() { // Devuelve una fila de tabla <tr> con la información
        let tr = document.createElement("tr");

        let tdImagen = document.createElement("td");
        let imagen = document.createElement("img");
        imagen.src = SERVER + '/' + this.photo;
        tdImagen.appendChild(imagen);

        let tdNombre = document.createElement("td");
        tdNombre.innerText = this.name;

        let tdDesc = document.createElement("td");
        tdDesc.innerText = this.description;

        let tdBorrar = document.createElement("td");
        let borrar = document.createElement("button");
        borrar.innerText = "Borrar";
        tdBorrar.appendChild(borrar);

        tr.appendChild(tdImagen);
        tr.appendChild(tdNombre);
        tr.appendChild(tdDesc);
        tr.appendChild(tdBorrar);

        return tr;
    }
}