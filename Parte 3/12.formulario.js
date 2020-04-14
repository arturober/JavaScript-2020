document.addEventListener("DOMContentLoaded", e => {
    let form = document.getElementById("formulario");

    form.addEventListener("submit", e => {
        e.preventDefault();

        let aficiones = Array.from(form.aficiones)
            .filter(input => input.checked)
            .map(input => input.value);
        
        let datos = {
            nombre : form.nombre.value,
            edad: +form.edad.value,
            aficiones: aficiones,
            color: form.color.value,
            img: document.getElementById("imgPreview").src
        };

        console.log("Esto es lo que enviaremos al servidor:");
        console.log(datos);
    });

    form.avatar.addEventListener("change", e => {
        let fichero = form.avatar.files[0];

        if(fichero && fichero.type.startsWith('image')) {
            let reader = new FileReader();
            reader.readAsDataURL(fichero); // Leerlo en base64
        
            reader.addEventListener('load', e => {
                // Visualizamos la imagen en un <img> en el HTML
                document.getElementById("imgPreview").src = reader.result;
            });
        }
    });
});