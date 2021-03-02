
/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar() {
  let tipo;
  let cant;
  let cantA = 0;
  let cantCa = 0;
  let cantCe = 0;
  let totalBols = 0
  let price;
  let priceBruto = 0;
  let priceA = 0;
  let priceCa = 0;
  let priceCe = 0;
  let priceTotal;
  let finalPrice = 0;
  let desc;
  let flagP = 1;
  let flagB = 1;
  let maxPrice = 0;
  let maxPriceTipo;
  let maxBols = 0;
  let maxBolsTipo;
  let seguir = "s";

  do {
    tipo = prompt("Ingrese el tipo de producto:   Arena/Cal/Cemento").toLowerCase();
    while (tipo != "arena" && tipo != "cal" && tipo != "cemento") {
      tipo = prompt("Reingrese el tipo de producto:   Arena/Cal/Cemento").toLowerCase();
    }
    cant = parseInt(prompt("Ingrese la cantidad de bolsas: "));
    while (cant < 0 || isNaN(cant)) {
      cant = parseInt(prompt("Cantidad no valida.Ingrese la cantidad de bolsas: "));
    }
    price = parseInt(prompt("Ingrese el precio por bolsa: "));
    while (price < 0 || isNaN(price)) {
      price = parseInt(prompt("Precio no valido.Ingrese un precio por bolsa: "));
    }
    if (tipo == "arena") {
      if (flagP || price > maxPrice) {
        maxPrice = price
        maxPriceTipo = tipo
        flagP = 0
      }
      if (flagB || cant > maxBols) {
        maxBols = cant
        maxBolsTipo = tipo
        flagB = 0
      }
      cantA += cant
      priceA += price
    }
    else if (tipo == "cal") {
      if (flagP || price > maxPrice) {
        maxPrice = price
        maxPriceTipo = tipo
        flagP = 0
      }
      if (flagB || cant > maxBols) {
        maxBols = cant
        maxBolsTipo = tipo
        flagB = 0
      }
      cantCa += cant
      priceCa += price
    }
    else {
      if (flagP || price > maxPrice) {
        maxPrice = price
        maxPriceTipo = tipo
        flagP = 0
      }
      if (flagB || cant > maxBols) {
        maxBols = cant
        maxBolsTipo = tipo
        flagB = 0
      }
      cantCe += cant
      priceCe += price
    }
    priceTotal = priceA + priceCa + priceCe
    totalBols = cantCa + cantA + cantCe;
    if (totalBols >= 30) {
      desc = priceTotal * 25 / 100;
      finalPrice = priceTotal - desc

    }
    else {
      desc = priceTotal * 15 / 100;
      finalPrice = priceTotal - desc
    }

    priceBruto = priceTotal

    seguir = prompt("Desea seguir ingresando productos?    si/no");

  } while (seguir == "s");

  console.log("El importe bruto es de $" + priceBruto + "<br>")
  console.log("El importe con descuento es de $" + finalPrice + "<br>")
  console.log("El tipo con mas bolsas es el " + maxBolsTipo + " con " + maxBols + " bolsas " + "<br>")
  console.log("El tipo mas caro es el " + maxPriceTipo + " que sale $" + maxPrice + "<br>")

}