//funcion para determinar la estacion

function determinarestacion(mes) {
    if (mes >=1 && mes <= 3) {
        return "invierno";
    }
    else if (mes >= 4 && mes <=6) {
        return "otoño"
    }
    if (mes >=7 && mes <= 9) {
        return "primavera";
    }
    else if (mes >= 10 && mes <=12) {
        return "verano";
    }
    else {
      return "Mes imélido. Por favor, ingrese un ngnero del 1 al 12."; 
    }
}

readline = require( ' readline').createlnterface({
input: process.stdin,
output: process. stdout
});
