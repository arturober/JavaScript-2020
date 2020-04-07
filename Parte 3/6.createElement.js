let nombres = ["Marta", "Eva", "Juan", "Marcos"];

/* Genera la siguiente estructura y añadela al body
<ul>
    <li>Marta</li>
    <li>Eva</li>
    <li>Juan</li>
    <li>Marcos</li>
</ul>
*/

let body = document.body;

let ul = document.createElement("ul");

nombres.forEach(nombre => {
    let li = document.createElement("li");
    li.innerText = nombre;
    ul.appendChild(li);
});

body.insertBefore(ul, body.firstElementChild);
