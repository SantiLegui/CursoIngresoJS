/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
//Se declaran las variables
	let n1 = document.getElementById("numero1").value;
	let n2 = document.getElementById("numero2").value;
	let resultado;
//Se los denomina numeros con parseInt
	n1 = parseInt (n1);
    n2 = parseInt (n2);
  
//Se calcula el resultado final
	resultado = n1 + n2
	
//Se muestra el resultado final en la pantalla
	alert("El resultado de la suma es" + " " + resultado);	
}

function restar()
{
//Se declaran las variables
	let n1 = document.getElementById("numero1").value;
	let n2 = document.getElementById("numero2").value;
	let resultado;
//Se los denomina numeros con parseInt
	n1 = parseInt (n1);
	n2 = parseInt (n2);
 //Se calcula el resultado final
	resultado = n1 - n2
//Se muestra el resultado final en la pantalla
	alert("El resultado de la resta es" + " " + resultado);
}

function multiplicar()
{ 
//Se declaran las variables
	let n1 = document.getElementById("numero1").value;
	let n2 = document.getElementById("numero2").value;
	let resultado;
//Se los denomina numeros con parseInt
	n1 = parseInt (n1);
	n2 = parseInt (n2);
//Se calcula el resultado final  	
	resultado = n1 * n2
//Se muestra el resultado final en la pantalla
	alert("El resultado de la multiplicacion es" + " " + resultado);
}

function dividir()
{
//Se declaran las variables
	let n1 = document.getElementById("numero1").value;
	let n2 = document.getElementById("numero2").value;
	let resultado;
//Se los denomina numeros con parseInt
	n1 = parseInt (n1);
	n2 = parseInt (n2);
//Se calcula el resultado final
	resultado = n1 / n2
//Se muestra el resultado final en la pantalla
	alert("El resultado de la division es" + " " + resultado);
}

