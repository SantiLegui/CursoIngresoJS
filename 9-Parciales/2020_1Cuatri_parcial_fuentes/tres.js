/* En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar() {
	let nombre;
	let temp;
	let adultostemp = 0;
	let tempMax = 0;
	let nombreTemp;
	let edad;
	let edadSuma = 0;
	let edadProm = 0;
	let edadSolteros = 0;
	let sexo;
	let estadoCivil;
	let cantSolteros = 0;
	let cantViudos = 0;
	let cantViudosMay = 0;
	let flag = 1;
	let seguir = "s";

	do {
		nombre = prompt("Ingrese su nombre: ");




		sexo = prompt("Ingrese su sexo: ").toLowerCase();
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("Dato invalido.Ingrese su sexo: ").toLowerCase();
		}




		estadoCivil = prompt("Ingrese su Estado Civil: soltero, casado o viudo").toLowerCase();
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("Dato invalido.Ingrese su Estado Civil: soltero, casado o viudo").toLowerCase();
		}




		edad = parseInt(prompt("Ingrese su edad: "));
		while (isNaN(edad)) {
			edad = parseInt(prompt("Dato invalido.Ingrese su edad: "));
		}



		temp = parseInt(prompt("Ingrese su temperatura corporal: "));
		while (isNaN(temp)) {
			temp = parseInt(prompt("Dato invalido.Ingrese su temperatura corporal: "));
		}
		if (estadoCivil == "soltero" ) {
			cantSolteros++
			edadSolteros += edad;
		}
		
		if (estadoCivil == "viudo" ) {
			
			if (edad >= 18) {
				cantViudosMay++
				cantViudos++
			}
			else{
				cantViudos++
			}
			
		}
		if (edad >= 60 && temp > 38) {
			adultostemp ++
		}
		
		
		
		
		
		if (flag || temp > tempMax) {
			tempMax = temp;
			flag = 0;
			nombreTemp = nombre;
		}

		edadProm = edadSolteros / cantSolteros;



		seguir = prompt("Desea seguir ingresando datos?:    s/n")
	} while (seguir == "s");
	console.log(nombreTemp + " tiene la temperatura mas alta, tiene " + tempMax + " grados");
	console.log("Hay " + cantViudosMay + " mayores de edad, viudos" );
	console.log("Hay " + cantSolteros + " solteros, y " + cantViudos + " viudos");
	console.log("Hay " + adultostemp + " personas de la tercera edad con mas de 38 grados");
	console.log("El promedio de edad entre los hombres solteros es de " + edadProm);















}
