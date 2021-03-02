function mostrar() {
	let num;
	let suma = 0;
	let promedio;
	let cont = 0;
	while (cont < 5) {
		num = parseInt(prompt("Ingrese un numero"));
		suma += num;
		cont++



	}
	promedio = suma / 5;



	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;




}//FIN DE LA FUNCIÓN