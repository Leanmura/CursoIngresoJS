function mostrar() {
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	/* 	if (!(edad > 12 && edad < 18)) {
		alert("No eres un adolecente");
	} */

	if (edad < 13 || edad > 17) {
		alert("No eres un adolecente");
	}
} //FIN DE LA FUNCIÓN
