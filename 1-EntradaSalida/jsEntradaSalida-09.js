/*
Leandro Murakoshi
9 BIS
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
	let sueldo;
	let aumento;
	let resultado;
	let porcentaje;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	porcentaje = prompt("Ingresar el porcentaje: ");
	porcentaje = parseInt(porcentaje);

	porcentaje = porcentaje / 100;

	aumento = sueldo * porcentaje;

	resultado = sueldo + aumento;

	document.getElementById("txtIdResultado").value = resultado;
}
