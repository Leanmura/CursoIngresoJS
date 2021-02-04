/*
Leandro Murakoshi
10 BIS
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	let importe;
	let descuento;
	let resultado;
	let porcentaje;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	porcentaje = prompt("Ingresar el porcentaje: ");
	porcentaje = parseInt(porcentaje);

	porcentaje = porcentaje / 100;

	descuento = porcentaje * importe;

	resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = resultado;
}
