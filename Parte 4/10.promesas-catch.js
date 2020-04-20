function restaPositiva(num1, num2) { // El resultado no puede ser negativo
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = num1 - num2;
            if(result < 0) {
                reject("El resultado no puede ser negativo");
            } else {
                resolve(result);
            }
        }, 3000);
    });
}

document.addEventListener("DOMContentLoaded", e => {
    let restar = document.getElementById("restar");
    let input1 = document.getElementById("num1");
    let input2 = document.getElementById("num2");
    let resultP = document.getElementById("resultado");

    restar.addEventListener("click", e => {
        restaPositiva(+input1.value, +input2.value)
            .then(result => resultP.innerText = "Resultado: " + result)
            .catch(error => resultP.innerText = "ERROR: " + error);
    });
});
