/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
  //Se declaran las variables
  let n1;
  let n2;
  let resultado;
  //Se le asigna un valor a las variables y se los denominan numeros con parseInt
  n1 = parseInt(document.getElementById("txtIdNumeroUno").value)
  n2 = parseInt(document.getElementById("txtIdNumeroDos").value)
  //Se hace el calculo entre las variables
  resultado = n1 + n2
  //Se muestra el resultado en pantalla
  alert("El resultado de la suma es" + " " + resultado);
}

