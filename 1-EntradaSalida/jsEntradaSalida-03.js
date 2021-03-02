/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar() {
  //Se declara una variable
  let nombreIngresado;
  //Se asigna un valor a la variable
  nombreIngresado = document.getElementById("idnombre").value;
  //Se muestra en la pantalla el valor de la variable
  alert("Su nombre es" + " " + nombreIngresado);
}


