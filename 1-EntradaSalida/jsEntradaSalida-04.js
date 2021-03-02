/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() {
	//Se declara una variable
	let dato
	//Se le asigna un valor	
	dato = prompt("Ingrese un dato:");
	//Se denomina que el valo que se asigno, corresponde al Id llamado "txtIdNombre"
	document.getElementById("txtIdNombre").value = dato;
}

