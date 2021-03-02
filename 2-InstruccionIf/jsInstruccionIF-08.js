function mostrar() {
	//Se declara la variable
	let edad;
	let estadoCivil;
	//Se le asigna un valor a la variable
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;
	//Se declara la condicion if, junto al else
	if (edad > 17 && estadoCivil == "Soltero") {
		alert("Usted es soltero y no es menor");
	}

}

