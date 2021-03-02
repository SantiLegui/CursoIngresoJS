/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
	//Se declaran las variables
	let sueldo;
	let agregado;
	let result;
	/*Se da un valor a la variable sueldo y se lo denomina 
	un numero con el parseInt */
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	//Se calcula el agregado
	agregado = (sueldo * 10 / 100);
	//Se hace la suma del agregado al sueldo
	result = (sueldo + agregado);
	//Se muestra el resultado final en la pantalla
	document.getElementById("txtIdResultado").value = result;
}
