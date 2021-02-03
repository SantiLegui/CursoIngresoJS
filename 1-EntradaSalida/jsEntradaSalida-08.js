/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
//Se declaran las variables
	let div;
	let  divs;
 	let resto;
	
/*Se les asigna un valor a las variables y se los 
transforma en numeros, con el parseInt*/
	 div = document.getElementById("txtIdNumeroDividendo").value;
	  		divs = document.getElementById("txtIdNumeroDivisor").value;
    div = parseInt(div);
	  		divs = parseInt(divs);
 
//Se calcula el resto 	
	resto = (div % divs);
	  
//Se muestra el resultado final en la pantalla
	alert(resto);
}



