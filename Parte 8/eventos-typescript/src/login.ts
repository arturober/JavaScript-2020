import {Auth} from "./classes/auth.class";

let formLogin: HTMLFormElement = null;
let lat = 0;
let lng = 0;

Auth.checkToken().then(() => location.assign("index.html")).catch(() => true);

document.addEventListener("DOMContentLoaded", e => {
    formLogin = document.getElementById("form-login") as HTMLFormElement;

    formLogin.addEventListener("submit", e => {
        e.preventDefault();
        Auth.login(formLogin.email.value, formLogin.password.value)
            .then(() => location.assign("index.html"))
            .catch(e => document.getElementById("errorInfo").textContent = "Email o contraseña incorrectos");
    });
});