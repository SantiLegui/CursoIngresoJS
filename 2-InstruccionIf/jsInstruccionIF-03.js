function mostrar() {

	//Se declara la variable
	let edad;
	//Se le asigna un valor a la variable
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//Se declara la condicion if
	if (edad >= 18) {
		alert("Usted es mayor de edad")
	}
	//Se declara otra condicion
	else {
		alert("Usted es menor de edad");
	}

}
