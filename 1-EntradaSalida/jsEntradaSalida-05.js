/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
//Se declaran las variables
	let n;	
	let e;	
//Se le asigna un valor a las variables	
	n = document.getElementById("txtIdNombre").value;
	e = document.getElementById("txtIdEdad").value;
//Se muestra el valor en pantalla	
	alert("Usted se llama" + " " + n + " " + "y tiene" + " " + e + " " + "años ");
}

