/* Codigo del cuadrado */

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado; 
}

console.groupEnd();

/* Codigo del triangulo */

console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
   return lado1 + lado2 + base; 
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;   
}

function alturaTrianguloIsoceles(lado1, lado2, base) {
    if (lado1 === lado2 && lado1 !== base) {

        return Math.sqrt(((lado1 ** 2) - ((base / 2) ** 2)));
    } else {
        console.log('Lo siento, pero la medidas que ingresaste no corresponden a un triangulo isoceles')
    }
}

console.groupEnd();

/* Codigo del circulo */

console.group("Circulos");

function diametroCirculo(radio) {
  return  radio * 2
}

const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}    

function areaCirculo(radio) {
    return (radio * radio) * PI;
}    
console.groupEnd();


//Aqui interactuamos con el HTML

//Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado").value;
    /* const value = input.value; */
    const perimetro = perimetroCuadrado(input);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo

function calcularPerimetroTriangulo() {
    const lado1 = parseFloat(document.getElementById("inputTrianguloLado1").value);
    const lado2 = parseFloat(document.getElementById("inputTrianguloLado2").value);
    const base = parseFloat(document.getElementById("inputTrianguloBase").value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = parseFloat(document.getElementById("inputTrianguloBase").value);
    const altura = parseFloat(document.getElementById("inputTrianguloAltura").value);
    const perimetro = areaTriangulo(base, altura);
    alert(perimetro);
}

//Circulo

function calcularAreaCirculo() {
    const radio = document.getElementById("inputCirculo").value;
    const area = areaCirculo(radio);
    alert(area);
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("inputCirculo").value;
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularDiametroCirculo() {
    const radio = document.getElementById("inputCirculo").value;
    const diametro = diametroCirculo(radio);
    alert(diametro);
}