/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
  {
//Se declaran las variables
  let n1;
  let n2;	
  let resultado;
//Se le asigna un valor a las variables
  n1 = document.getElementById("txtIdNumeroUno").value;
  n2  = document.getElementById("txtIdNumeroDos").value;
//Se denominan numeros a esos valores
  n1 = parseInt(n1)
  n2 = parseInt(n2)
//Se hace el calculo entre las variables
  resultado = n1 + n2
//Se muestra el resultado en pantalla
  alert("El resultado de la suma es" + " " + resultado);
}

