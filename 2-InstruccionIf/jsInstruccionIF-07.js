function mostrar() {
    //Se declara la variable
    let edad;
    let estadoCivil;
    //Se le asigna un valor a la variable
    edad = parseInt(document.getElementById("txtIdEdad").value);
    estadoCivil = document.getElementById("estadoCivil").value;
    //Se declara la condicion if, junto al else
    if ("estadoCivil" != "Soltero" && edad < 18) {
        alert("Usted es muy pequeño para no estar soltero");
    }
    else {
        alert("Gracias por su info");
    }
}


