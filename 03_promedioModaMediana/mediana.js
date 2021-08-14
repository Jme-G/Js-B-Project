/* const lista1 = [
    100,
    200,
    500,
    400000000
]; */

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }    
    );  
    const promedioLista = sumaLista / lista.length;
    return promedioLista;   
}



function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


function calcularMedianaAritmetica(lista) {
    lista.sort((a, b) => a - b);
    const mitadLista = parseInt(lista.length / 2);
    let mediana;
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        const promedioElemento1Y2 = calcularMediaAritmetica([elemento1, elemento2]);
        return mediana =  promedioElemento1Y2;  
    } else {
        return mediana = lista[mitadLista];
    }
}


