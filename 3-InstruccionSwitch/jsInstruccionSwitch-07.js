function mostrar() {
	let lugar;
	lugar = document.getElementById("txtIdDestino").value;
	switch (lugar) {
		case "Bariloche":
			alert("Sur");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Mar del plata":
			alert("Este");
			break;
		case "Ushuaia":
			alert("Sur");
			break;
	}

}//FIN DE LA FUNCIÓN