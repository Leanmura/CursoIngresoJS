/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
	let largo;
	let ancho;
	let cantidadDeHilos;
	let diametro;
	let totalAlambre;

	cantidadDeHilos = 3;

	largo = document.getElementById("txtIdLargo").value;
	largo = parseInt(largo);

	ancho = document.getElementById("txtIdAncho").value;
	ancho = parseInt(ancho);

	diametro = largo + largo + ancho + ancho;

	totalAlambre = diametro * cantidadDeHilos;

	alert("Cantidad de alambre a comprar " + totalAlambre + "m");
}
function Circulo() {
	let radio;
	let diametro;
	let perimetro;
	let totalAlambre;
	let cantidadDeHilos;
	let pi;

	pi = 3.14;
	cantidadDeHilos = 3;

	radio = document.getElementById("txtIdRadio").value;
	radio = parseInt(radio);

	diametro = radio * 2;

	perimetro = diametro * pi;

	totalAlambre = perimetro * cantidadDeHilos;

	alert("Cantidad de alambre a comprar " + totalAlambre + "m");
}
function Materiales() {
	let largo;
	let ancho;
	let area;
	let cantidadCal;
	let cantidadCemento;
	let mensaje;

	largo = document.getElementById("txtIdLargo").value;
	largo = parseInt(largo);

	ancho = document.getElementById("txtIdAncho").value;
	ancho = parseInt(ancho);

	area = largo * ancho;

	cantidadCemento = area * 2;

	cantidadCal = area * 3;

	mensaje =
		"Para hacer un contrapiso de " +
		ancho +
		"m x " +
		largo +
		"m se necesitan: " +
		cantidadCal +
		" bolsas de cal y " +
		cantidadCemento +
		" bolsas de cemento";

	alert(mensaje);
}
