/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
/*
function mostrar() {
	let nombre;
	let edad;
	let mensaje;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	mensaje = "Su nombre es: " + nombre + " y su edad es: " + edad + " anios";
	alert(mensaje);
}
*/

/* bis :

Debemos lograr tomar nombre y edad por ID , apellido por prompt ,
y mostrarlos concatenados 
ej.: "Usted se llama José peres y tiene 66 años" 	*/

function mostrar() {
	let nombre;
	let edad;
	let apellido;
	let mensaje;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	apellido = prompt("Ingrese su apellido");

	mensaje =
		"Usted se llama " + nombre + " " + apellido + " y tiene " + edad + " anios";
	alert(mensaje);
}
