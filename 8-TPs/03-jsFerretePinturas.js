/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

let temperatura;
let fac;
let caf;
let resultado;

function FahrenheitCentigrados() {
    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    fac = (temperatura - 32) * 5 / 9
    alert(temperatura + " " + "grados Fahrenheit" + " " + "son" + " " + fac + " " + "grados Celcius");


}

function CentigradosFahrenheit() {
    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    caf = temperatura * 1.8 + 32
    alert(temperatura + " " + "grados Celcius" + " " + "son" + " " + caf + " " + "grados Fahrenheit");

}
