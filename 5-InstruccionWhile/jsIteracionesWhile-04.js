/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	let num;
	num = parseInt(prompt("Ingrese un numero entre el 0 y el 9"));

	while (num <= 0 || num >= 9) {
		alert("Numero incorrecto");
		num = parseInt(prompt("Ingrese un numero entre el 0 y el 9"));
	}
	alert("Correcto");
document.getElementById("txtIdNumero").value = num;
}//FIN DE LA FUNCIÓN