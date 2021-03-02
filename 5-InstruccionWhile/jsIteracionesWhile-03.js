/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
    let dato
    dato = prompt("Ingrese un dato");
    while (dato != "utn750") {
        alert("La contraseña es incorrecta");
        dato = prompt("Ingrese un dato");
    }
    alert("Ingreso correctamente");
}//FIN DE LA FUNCIÓN
