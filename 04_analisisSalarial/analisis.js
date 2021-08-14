// helpers
function esPar(numerito) {
    return (numerito % 2 === 0);
}
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

// Calculadora de mediana
function medianaSalarios(lista) {

    const mitadLista = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitadLista - 1];
        const personitaMitad2 = lista[mitadLista];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2])
        return mediana
    } else {
        const personitaMitad = lista[mitadLista];
        return personitaMitad;
    }
}

// Mediana General

const salariosCol = colombia.map(
    function (personita) {
        return personita.salary
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
       return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
const spliceStart = (salariosColSorted.length *  0.9);
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart, 
    spliceCount
);
const medianaTop10Col = medianaSalarios(salariosColTop10);




console.log({
    medianaGeneralCol,
    medianaTop10Col,
});