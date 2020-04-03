let notasMap = new Map();
notasMap.set("Paco", [5, 8, 9]);
notasMap.set("María", [7, 5, 8]);
notasMap.set("Juan", [5, 7, 4]);

// notasMap.delete("Juan");
// if(notasMap.has("Paco")) {}

for(let [nombre, notas] of notasMap) {
    let media = notas.reduce((total, nota) => total + nota, 0) / notas.length;
    console.log(`Nombre: ${nombre}. Media: ${media}`);
}

for(let nombre of notasMap.keys) {
    let notas = notasMap.get(nombre);
    let media = notas.reduce((total, nota) => total + nota, 0) / notas.length;
    console.log(`Nombre: ${nombre}. Media: ${media}`);
}
