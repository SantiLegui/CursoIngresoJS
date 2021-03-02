/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
let p1;
let p2;
let p3;
let result;
let iva;
function Sumar() {
    p1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    p2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    p3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    result = p1 + p2 + p3;
    alert("El resultado de la suma es" + " " + result);
}
function Promedio() {
    p1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    p2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    p3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    result = (p1 + p2 + p3) / 3
    alert("El promedio es" + " " + result);
}
function PrecioFinal() {
    p1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    p2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    p3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    iva = (p1 + p2 + p3) * 21 / 100
    result = (p1 + p2 + p3) + iva
    alert("El precio final es" + " " + result);
}