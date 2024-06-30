//mes del año
//mostrar el nombre del mes correspondiente
let nombreDelMes = obtenerNombredelMes (numero);
console.log('El mes correspondiente al numero ${numero} es: ${nombre del mes}');
//funcion mejorada para obtener nombre del mes a partir de su número
const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre' ,'Noviembre', 'Diciembre'
];
// Verificar si el numero de estg dentro del rango valido
if (numeromes >= 1 && numeromes <= 12) {
    return meses [ numeromes -1];
    // 1 los arrayS en javaScript son base O
} 
else {
return 'Número de mes inválido'; 
};

//Solicitar al usuario que ingrese un número de mes
let numeroMesMejorado = parseInt (prompt ("Ingrese un numero del 1 al 12 para conocer el nombre del mes"))

// Mostrar el nombre del mes correspondiente
let nombreDelMesMejorado = obtenerNombredelMesMejorado (numeroMesMejorado) ;
console.log ('El correspondiente al numero ingresado ${numeroMesMejorado} es:${nombreDelMesMejorado}');
