import "@babel/polyfill";
import { Auth } from "./auth.class";

let form = null;

document.addEventListener("DOMContentLoaded", e => {
    form = document.getElementById("form-register");
    form.addEventListener("submit", registraUsuario);
    form.avatar.addEventListener("change", loadImage);
});

async function registraUsuario(e) {
    e.preventDefault();

    if(form.email.value !== form.email2.value) {
        alert("Los correos no coinciden");
        return;
    }

    let userInfo = {
        name: form.nameUser.value,
        email: form.email.value,
        password: form.password.value,
        avatar: document.getElementById("imgPreview").src
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
        if(errores) alert(errores.map(e => e).join(", ") + ".");
    }
}

function loadImage(event) {
    let file = event.target.files[0];
    let reader = new FileReader();

    if (file) reader.readAsDataURL(file);

    reader.addEventListener("load", e => {
        document.getElementById("imgPreview").src = reader.result;
    });
}
