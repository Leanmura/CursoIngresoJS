function mostrar() {
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	/* 	if (edad > 12) {
		if (edad < 18) {
			alert("Eres un adolecente");
		}
	} */

	if (edad > 12 && edad < 18) {
		alert("Eres un adolecente");
	}
} //FIN DE LA FUNCIÓN
