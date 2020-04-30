import { Auth } from "./classes/auth.class";

let form: HTMLFormElement = null;
let imgPreview: HTMLImageElement = null;

document.addEventListener("DOMContentLoaded", e => {
    form = document.getElementById("form-register") as HTMLFormElement;
    imgPreview = document.getElementById("imgPreview") as HTMLImageElement;
    form.addEventListener("submit", registraUsuario);
    form.avatar.addEventListener("change", loadImage);
});

async function registraUsuario(e: Event) {
    e.preventDefault();

    if(form.email.value !== form.email2.value) {
        alert("Los correos no coinciden");
        return;
    }

    let userInfo = {
        name: form.nameUser.value,
        email: form.email.value,
        password: form.password.value,
        avatar: imgPreview.src
    };

    try {
        await Auth.register(userInfo);
        location.assign("login.html");
    } catch(error) {
        document.querySelectorAll(".form-control").forEach(i => i.classList.remove("is-valid", "is-invalid"));
        let errores = [];
        error.forEach(input => {
            form[input.property].classList.add("is-invalid");
            errores.push(...Object.values(input.constraints));
        });
        if(errores) alert(errores.join(", ") + ".");
    }
}

function loadImage(event: Event) {
    let file = (event.target as HTMLInputElement).files[0];
    let reader = new FileReader();

    if (file) reader.readAsDataURL(file);

    reader.addEventListener("load", e => {
        imgPreview.src = reader.result as string;
    });
}
