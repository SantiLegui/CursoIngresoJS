/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
	//Se declaran las variables
	let divd;
	let divs;
	let resto;
	/*Se les asigna un valor a las variables y se los 
	transforma en numeros, con el parseInt*/
	divd = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divs = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	//Se calcula el resto 	
	resto = (divd % divs);
	//Se muestra el resultado final en la pantalla
	alert("El resto es" + " " + resto);
}



