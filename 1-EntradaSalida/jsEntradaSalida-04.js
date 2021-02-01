/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar() {
	let nombre;
	let apellido;
	nombre = prompt("Ingrese su nombre");
	apellido = prompt("Ingrese su apellido");

	document.getElementById("txtIdNombre").value = nombre + " " + apellido;
	alert(
		"Su nombre y apellido es: " + document.getElementById("txtIdNombre").value
	);
}
