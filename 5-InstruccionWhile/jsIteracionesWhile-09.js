/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
    let num;
    let max;
    let min;
    let flag = 0;
    let resp = "s";
    do {
        num = parseInt(prompt("Ingrese un numero: "));

        while (isNaN(num)) {
            num = parseInt(prompt("Eso no es un numero, ingrese un numero :"));
        }

            if (flag == 0 || num > max) {
                max = num


            if (flag == 0 || num < min) {

                min = num
            }




                flag = 1
            }
        resp = prompt("Desea ingresar otro numero?: s/n");
    }while (resp == "s");

    document.getElementById("txtIdMaximo").value = max;
    document.getElementById("txtIdMinimo").value = min;
}
/*switch (flag) {
    case 1:
        max = num
        min = num
        flag = 0
        break;

    case 0:

        if (num > max) {
            max = num
        }
        else if (num < min) {
            min = num
        }
        break;*/







