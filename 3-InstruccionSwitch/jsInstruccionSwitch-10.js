function mostrar() {
	let estacion;
	let lugar;

	estacion = document.getElementById("txtIdEstacion").value
	lugar = document.getElementById("txtIdDestino").value



	switch (estacion) {
		case "Invierno":
			if (lugar == "Bariloche") {
				alert("Se viaja");
			}
			else {
				alert("No se viaja");
			}
			break;
		case "Verano":
			if (lugar == "Cataratas" || lugar == "Mar del plata") {
				alert("Se viaja");
			}
			else {
				alert("No se viaja");
			}
			break
		case "Otoño":
			alert("Se viaja")
			break
		case "Primavera":
			if (lugar == "Bariloche") {
				alert("No se viaja");
			}
			else {
				alert("Se viaja");
				break
			}

	}//FIN DE LA FUNCIÓN
}