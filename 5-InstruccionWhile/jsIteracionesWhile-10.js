/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
    let num;
    let sumPos = 0;
    let sumNeg = 0;
    let cantP = 0;
    let cantN = 0;
    let cantPar = 0;
    let cantC = 0;
    let promP = 0;
    let promN = 0;
    let dif;
    let resp = "s";
    do {
        num = parseInt(prompt("Ingrese un numero"));

        while (isNaN(num)) {
            num = parseInt(prompt("Usted no ingreso un numero. Ingrese un numero :"));
        }
        if (num > 0) {
            sumPos += num
            cantP++

        }
        else if (num < 0) {
            sumNeg += num
            cantN++
        } else {
            cantC++
        }
        if (num % 2 == 0) {
            cantPar++
        }


        dif = sumPos - sumNeg;

        resp = prompt("Desea ingresar otro numero :   s/n");




    } while (resp == "s");

    if (cantN != 0) {
        promN = sumNeg / cantN;
    }
    if (cant != 0) {
        promP = sumPos / cantP;
    }


    console.log("Suma de Negativos: " + sumNeg);
    console.log("Suma de Positivos: " + sumPos);
    console.log("Promedio de Negativos: " + promN);
    console.log("Promedio de Positivos: " + promP);
    console.log("Cantidad de Negativos: " + cantN);
    console.log("Cantidad de Positivos: " + cantP);
    console.log("Cantidad de numeros pares: " + cantPar);
    console.log("Cantidad de Ceros: " + cantC);
    console.log("Diferencia: " + dif);

}














