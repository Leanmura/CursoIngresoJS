/* Murakoshi Leandro
Ejercicio 6 IF
 */
function mostrar() {
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad > 17) {
		alert("Usted es mayor de edad");
	} else {
		if (edad < 13) {
			alert("Usted es un ninio");
		} else {
			alert("Usted es un Adolescente");
		}
	}
}
