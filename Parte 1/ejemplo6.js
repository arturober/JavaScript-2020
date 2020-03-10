let cadena = "Mi casa es tu casa. Pero la comida es escasa";
console.log(cadena.lastIndexOf("casa")); // 40

console.log(cadena.indexOf("casa", 0)); // 3
console.log(cadena.indexOf("casa", 4)); // 14
console.log(cadena.indexOf("casa", 15)); // 40
console.log(cadena.indexOf("casa", 41)); // -1

function vecesCadena(cadena, palabra) {
    let veces = 0;
    let pos = cadena.indexOf(palabra);
    
    while(pos != -1) {
        veces++;
        pos = cadena.indexOf(palabra, pos + 1);
    }

    return veces;
}

let veces = vecesCadena(cadena, "casa"); 
console.log(veces); // 3

console.log(cadena.search("casa")); // 3

console.log(cadena.substring(3, 7)); // casa
console.log(cadena.substr(3, 4)); // casa

console.log("\u{1f60e}"); // 😎
console.log("😎");

// Código aún no visto en clase

let textArea = document.getElementById("texto");
document.querySelectorAll("span.icono").forEach(
    span => {
        span.addEventListener("click", e => {
            textArea.value += span.innerText;
        });
    }
);

