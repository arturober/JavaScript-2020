let fecha = new Date();

switch(fecha.getDay()) {
    case 1:
        console.log("Es lunes...");
        break;
    case 2:
        console.log("Es martes, ya pasó el lunes");
        break;
    case 3:
        console.log("Es miércoles. Estamos a mitad");
        break;
    case 4:
        console.log("Es juernes, mañana voy de resaca");
        break;
    case 5:
        console.log("Viernes. Resacoso pero contento");
        break;
    case 6:
    case 0:
        console.log("FINDE!!");
        break;
    default:
        console.log("Bug en Matrix. Coronavirus.");
}