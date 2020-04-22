class Tarea {
    constructor(descripcion, id) {
        this.descripcion = descripcion;
        this.id = id;
    }

    static async getTareas() {
        let json = await Http.get("http://arturober.com:5006/tareas");
        return json.tareas.map(t => new Tarea(t.descripcion, t.id));
    }

    async delete() {
        await Http.delete("http://arturober.com:5006/tareas/" + this.id);
    }

    async post() {
        let json = await Http.post("http://arturober.com:5006/tareas", this);
        return new Tarea(json.tarea.descripcion, json.tarea.id);
    }

    toHTML() {
        let li = document.createElement("li");
        li.innerText = this.descripcion;

        let borrar = document.createElement("button");
        borrar.innerText = "Borrar";

        borrar.addEventListener("click", async e => {
            await this.delete();
            li.remove();
        });

        li.appendChild(borrar);
    }
}