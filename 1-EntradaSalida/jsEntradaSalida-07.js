/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

//Se denominan variables
let n1;
let n2;
let resultado;

function sumar() {
	//El valor de la variables, se los denomina numeros con parseInt
	n1 = parseInt(document.getElementById("numero1").value);
	n2 = parseInt(document.getElementById("numero2").value);
	//Se calcula el resultado final
	resultado = n1 + n2
	//Se muestra el resultado final en la pantalla
	alert("El resultado de la suma es" + " " + resultado);
}

function restar() {
	//El valor de la variables, se los denomina numeros con parseInt
	n1 = parseInt(document.getElementById("numero1").value);
	n2 = parseInt(document.getElementById("numero2").value);
	//Se calcula el resultado final
	resultado = n1 - n2
	//Se muestra el resultado final en la pantalla
	alert("El resultado de la resta es" + " " + resultado);
}

function multiplicar() {
	//El valor de la variables, se los denomina numeros con parseInt
	n1 = parseInt(document.getElementById("numero1").value);
	n2 = parseInt(document.getElementById("numero2").value);
	//Se calcula el resultado final  	
	resultado = n1 * n2
	//Se muestra el resultado final en la pantalla
	alert("El resultado de la multiplicacion es" + " " + resultado);
}

function dividir() {
	//El valor de la variables, se los denomina numeros con parseInt
	n1 = parseInt(document.getElementById("numero1").value);
	n2 = parseInt(document.getElementById("numero2").value);
	//Se calcula el resultado final
	resultado = n1 / n2
	//Se muestra el resultado final en la pantalla
	alert("El resultado de la division es" + " " + resultado);
}

