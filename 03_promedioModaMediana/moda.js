const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];




function calcularMediaAritmetica(lista) {

    const listaCount = {};

lista1.map(
    function (elemento) {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }
);

const listaArray = Object.entries(listaCount).sort(
    function (valorAcumulado, nuevoValor) {
       return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = listaArray[listaArray.length - 1];

return moda;

}

//Promedio ponderado

let notas = [{calificacion: 5, peso: 30}, {calificacion: 2, peso: 30}, {calificacion: 1.5, peso: 60}]

let notaFinal = 0;
for (const nota in notas) {
    const ponderacion = notas[nota].calificacion * (notas[nota].peso / 100)
    notaFinal += ponderacion;
}

console.log(notaFinal);