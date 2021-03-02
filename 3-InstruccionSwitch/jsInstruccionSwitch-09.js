function mostrar() {
	let estacion;
	let destino;
	let tarifaBase = 15000;
	let precioFinal;
	let descuento;
	let aumento;

	estacion = document.getElementById("txtIdEstacion").value
	destino = document.getElementById("txtIdDestino").value

	switch (estacion) {
		case "Invierno":

			if (destino == "Bariloche") {
				aumento = tarifaBase * 20 / 100
				precioFinal = tarifaBase + aumento
				alert("El precio final seria de " + precioFinal);
			}

			else if (destino == "Cordoba" || destino == "Cataratas") {
				descuento = tarifaBase * 10 / 100
				precioFinal = tarifaBase - descuento
				alert("El precio final seria de " + precioFinal);
			}
			else if (destino == "Mar del plata") {
				descuento = tarifaBase * 20 / 100
				precioFinal = tarifaBase - descuento
				alert("El precio final seria de " + precioFinal);
			}
			break;


		case "Verano":
			if (destino == "Bariloche") {
				descuento = tarifaBase * 20 / 100
				precioFinal = tarifaBase - descuento
				alert("El precio final seria de " + precioFinal);
			}

			else if (destino == "Cordoba" || destino == "Cataratas") {
				aument = tarifaBase * 10 / 100
				precioFinal = tarifaBase + aumento
				alert("El precio final seria de " + precioFinal);
			}
			else if (destino == "Mar del plata") {
				aumento = tarifaBase * 20 / 100
				precioFinal = tarifaBase + aumento
				alert("El precio final seria de " + precioFinal);
			}
			break;



		case "Otoño":
		case "Primavera":
	}

	if (destino == "Bariloche" || destino == "Cataratas" || destino == "Mar del plata") {
		aumento = tarifaBase * 10 / 100
		precioFinal = tarifaBase + aumento
		alert("El precio final seria de " + precioFinal);
	}

	else {
		alert("El precio final seria de " + tarifaBase.toFixed(2));
	}











}



//FIN DE LA FUNCIÓN