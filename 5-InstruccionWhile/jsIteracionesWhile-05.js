/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo = prompt("Ingrese sexo f o m: ");

	while (!(sexo == "f" || sexo == "m")) {
		sexo = prompt("Ingreso un sexo no existente, por favor reingrese un sexo valido: ");
	}

if (sexo == "f") {
	document.getElementById("txtIdSexo").value = "Femenino"
}
else{
	document.getElementById("txtIdSexo").value = "Masculino"
}

	
}//FIN DE LA FUNCIÓN