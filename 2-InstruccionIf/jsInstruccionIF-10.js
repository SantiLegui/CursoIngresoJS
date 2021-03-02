function mostrar() {
	//Se decalaran las variables
	let numero;
	//Se le asgina una valor aleatorio
	numero = (Math.random() * 10 + 1);
	//Se lo transforma en numero
	numero = parseInt(numero);
	alert(numero);
	if (numero >= 9) {
		alert("EXELENTE");
	}
	if (numero >= 4) {
		alert("APROBO");
	}
	if (numero <= 4) {
		alert("Vamos, la proxima se puede");
	}
}
