function mostrar()
{

	let repe;
	repe = parseInt(prompt("Ingrese las veces que quiera que se repita un mensaje: "));
	
	while(isNaN(repe)){
		
		repe = parseInt(prompt("Eso no es un numero. Ingrese las veces que quiera que se repita un mensaje: "));
	};
	for (let i = 0; i < repe; repe--) {
		
		console.log("Cantidad de repeticiones " + repe);
	}
	






}//FIN DE LA FUNCIÓN