/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar() {

	let tipo;
	let precio;
	let cant;
	let marca;
	let fabric;
	let acumB = 0;
	let acumJ = 0;
	let acumA = 0;
	let contB = 0;
	let contJ = 0;
	let contA = 0;
	let precioMin;
	let fabriMin;
	let cantMin;
	let flagA = 1;
	let promedio;
	let maxTipo;

	for (let i = 0; i < 5; i++) {
		tipo = prompt("Ingrese el tipo de producto:   barbijo/alcohol/jabon");
		while (tipo != "barbijo" && tipo != "alcohol" && tipo != "jabon") {
			tipo = prompt("Reingrese el tipo de producto:   barbijo/alcohol/jabon");
		}

		precio = parseInt(prompt("Ingrese un precio entre 100 y 300: "));
		while (precio < 100 || precio > 300 || isNaN(precio)) {
			precio = parseInt(prompt("Precio no valido.Ingrese un precio entre 100 y 300: "));

		}

		cant = parseInt(prompt("Ingrese la cantidad del tipo hasta 1000 unidades: "));
		while (cant <= 0 || cant > 1000 || isNaN(cant)) {
			cant = parseInt(prompt("Cantidad no valida.Ingrese la cantidad del tipo hasta 1000 unidades: "));
		}

		marca = prompt("Ingrese la marca: ");
		fabric = prompt("Ingrese el fabricante: ");



		if (tipo == "alcohol") {

			if (flagA || precio < precioMin) {
				precioMin = precio;
				fabriMin = fabric;
				cantMin = cant;
				flagA = 0
			}
			acumA += cant
			contA++
		}
		else if (tipo == "barbijo") {
			acumB += cant
			contB++
		}
		else {
			acumJ += cant
			contJ++
		}
	}

	if (acumA > acumB && acumA > acumJ) {
		promedio = acumA / contA
		maxTipo = "alcohol"
	}
	else if (acumB >= acumA && acumB > acumJ) {
		promedio = acumB / contB
		maxTipo = "barbijo"
	}
	else {
		promedio = acumJ / contJ
		maxTipo = "jabon"
	}
	//Punto A

	if (flagA) {
		document.write("No se compraron alcoholes" + "<br>");
	}
	else {
		document.write("El alcohol mas barato es el del fabricante " + fabriMin + " y compraron " + cantMin + " unidades, a " + precioMin + " pesos." + "<br>");
	}

	//Punto B 

	document.write("El tipo con mas unidades es " + maxTipo + " y su promedio es " + promedio + "<br>");

	//Punto C

	document.write("Hay " + acumJ + " unidades de Jabon");

}



























