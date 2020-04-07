// setInterval(() => console.log(Math.floor(Math.random() * 10 + 1)), 2000);

let num = 1;

function imprimeSigNumero() {
    console.log(num++);
    if(num > 10) { // Cuando imprimimos 10, paramos el timer para que no se repita más
        clearInterval(idInterval);
    }
}

let idInterval = setInterval(imprimeSigNumero, 1000);


