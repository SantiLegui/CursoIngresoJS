/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

let largo;
let long;
let ratio;
let result;
let perimetro;
let area;
let cemento;
let cal;
let pi = 3.14;

function Rectangulo() {
    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    if (largo > 0 && ancho > 0) {
        perimetro = largo * 2 + ancho * 2
        result = perimetro * 3
        alert("Usted necesita comprar" + " " + result + " " + "metros de alambre")
    }
}
function Circulo() {
    ratio = parseInt(document.getElementById("txtIdRadio").value);
    perimetro = 2 * pi * ratio;
    result = perimetro * 3;
    alert("Usted necesita comprar" + " " + result + " " + "metros de alambre")
}
function Materiales() {
    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    if (largo > 0 && ancho > 0) {
        area = largo * ancho
        cemento = area * 2
        cal = area * 3
        alert("Usted necesita comprar" + " " + cemento + " " + "bolsas de cemento y" + " " + cal + " " + "bolsas de cal")
    }
}