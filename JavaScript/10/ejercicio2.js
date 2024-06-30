//hora del día
readline.question( 'Ingrese una hora del día (0-23):', (numero) =>{
    const hora = parselnt(numero);

    switch (true) {
        case hora >= 6 && hora < 12:
            console.Iog ( 'La hora ${hora} es por la mañana.');
            break;
        case hora >= 12 && hora < 19:
            console.log(' La hora ${hora} es por la tarde. ');
            break;
        case hora >= 19 && hora <= 23:
        case hora >= 0 && hora < 6:
            console.log ('La hora ${hora} es por la noche.');
            break;
        default:
            console.log(' Hora inv€lida. Por favoir, ingrese un número entre 0 y 23');
            break;
    }
    readline.close();
 });