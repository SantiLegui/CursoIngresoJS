/*A una pareja se le pide los datos para mostrar un mensaje " 
ustedes se llaman xxxxx y xxxx pesan xx y xx
 kilos, que sumados son xx kilos y el promedio de peso xx ".*/
function mostrar(){
    let n1;
    let n2;
    let p2
    let p1;
    let pTotal;
    let pProm;
    n1 = prompt("Ingrese su nombre: ");
    p1 = parseInt(prompt("Ingrese su peso: "));

    n2 = prompt("Ingrese su nombre: ");
    p2 = parseInt(prompt("Ingrese su peso: "));

    pTotal = p1 + p2;
    pProm = pTotal / 2;


    alert("ustedes se llaman " + n1 + " y " +  n2 + ", y pesan " + p1 + " y " + p2 + " kilos, que sumados son " + pTotal + " kilos y el promedio es " + pProm);
 }
