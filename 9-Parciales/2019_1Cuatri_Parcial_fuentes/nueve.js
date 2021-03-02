/*Realizar el algoritmo que permita ingresar el nombre de un país,
 cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que 
el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.   (x & 2 == 0)
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.*/
function mostrar() {
    let pais;
    let habit;
    let paisMinHabit;
    let minHabit;
    let acumHabit = 0;
    let contHabit = 0;
    let promHabit;
    let temp;
    let tempMin;
    let tempMinPais;
    let acumPaisCuarenta = 0;
    let acumPar = 0;
    let flag = 1;
    let flagP = 1;
    let seguir = "s";

    do {
        pais = prompt("Ingrese el nombre de un pais: ");
        habit = parseInt(prompt("Ingrese la cantidad de habitantes en millones, entre 1 y 7000"));
        while (habit < 0 || habit > 7000 || isNaN(habit)) {
            habit = parseInt(prompt("Dato invalido. Ingrese la cantidad de habitantes en millones, entre 1 y 7000"));
        }
        temp = parseInt(prompt("Ingrese la temperatura mínima que se registra en su territorio(entre -50 y 50):"));
        while (temp < -50 || temp > 50|| isNaN(temp)) {
            temp = parseInt(prompt("Dato invalido.Ingrese la temperatura mínima que se registra en su territorio(entre -50 y 50):"));
        }
        if (temp % 2 == 0) {
            acumPar++
        }
        if (flagP || habit < minHabit) {
            minHabit = habit;
            paisMinHabit = pais;
            flagP = 0;
        }
        if (temp > 40) {
            acumPaisCuarenta++
        }
        if (flag || temp < tempMin) {
            tempMin = temp
            tempMinPais = pais;
            flag = 0;
        }
        acumHabit += habit;
        contHabit++
        
        
        
        
       seguir = prompt("Desea seguir agregando datos?: "); 
        
    } while (seguir == "s");
promHabit = acumHabit / contHabit;
}
console.log("La cantidad de temperaturas pares es de " + acumPar );
console.log("El pais con menos habitantes es " + paisMinHabit);
console.log("Los paises que superan los 40 grados son " + acumPaisCuarenta );
console.log("El promedio de habitantes entre los paises ingresados es de " + promHabit);
console.log("El pais con menor temperatura es " + tempMinPais + " que tiene " + tempMin + " grados");
