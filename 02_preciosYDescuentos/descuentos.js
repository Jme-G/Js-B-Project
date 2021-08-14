const cupones = ["az001", "az002", "az003", "az004", "az005"];
const descuento = [5, 10, 15, 20, 25];




function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

/* function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son: $ " + precioConDescuento
} */

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const indexCupon = cupones.indexOf(discountValue);    
    if (discountValue === cupones[indexCupon]) { 

        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento[indexCupon]);
        const resultP = document.getElementById("resultP");
        resultP.innerText = "El precio con descuento son: $ " + precioConDescuento;
    } else {
        const resultP = document.getElementById("resultP");
        resultP.innerText = `Lo sentimos el codigo ${discountValue} no es valido`;
    }
}

/* const cupon = "az004";
const indiceCupon = cupones.indexOf(cupon);
if (cupon === cupones[indiceCupon]) {
    console.log("aplica descuento papi");
} else {
    console.log("pailas");
} */

