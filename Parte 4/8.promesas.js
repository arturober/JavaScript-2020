function sumaPromesa(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num1 + num2), 3000);
    });
}

document.addEventListener("DOMContentLoaded", e => {
    let sumar = document.getElementById("sumar");
    let input1 = document.getElementById("num1");
    let input2 = document.getElementById("num2");
    let resultP = document.getElementById("resultado");

    sumar.addEventListener("click", e => {
        sumaPromesa(+input1.value, +input2.value)
            .then(result => {
                console.log(result);
                resultP.innerText = "Resultado: " + result;
            });
        console.log("Click en sumar");
    });
});