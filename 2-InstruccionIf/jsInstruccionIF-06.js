function mostrar() {
	//Se declara una variable
	let edad;
	//Se le asigna un valor
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//Se declara una condicion
	if (edad >= 13 && edad <= 17) {
		alert("Usted es un adolescente");
	}
	//Se declara otra condicion 
	if (edad > 17) {
		alert("Usted es un adulto");
	}
	//Se declara otra condicion 
	else {
		alert("Usted es un niño");
	}


}
