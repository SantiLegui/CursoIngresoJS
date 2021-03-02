/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	// Se declaran las variables
	let importe;
	let descuento;
	let result;
	/* Se le asigna un valor a la variable importe
   y se lo transforma en un numemero con parseInt*/
	importe = parseInt(document.getElementById("txtIdImporte").value);
	//Se calcula el descuento del importe
	descuento = (importe * 25 / 100);
	//Se resta el descuento al importe
	result = (importe - descuento);
	//Se muestra en pantalla el resultado final
	document.getElementById("txtIdResultado").value = result;
}
