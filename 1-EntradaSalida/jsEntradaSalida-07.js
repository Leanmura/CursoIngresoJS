/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
	let total;
	let numeroUno;
	let numeroDos;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	total = numeroUno + numeroDos;

	alert("La suma es " + total);
}

function restar() {
	let total;
	let numeroUno;
	let numeroDos;
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	total = numeroUno - numeroDos;
	alert("La resta es " + total);
}

function multiplicar() {
	let total;
	let numeroUno;
	let numeroDos;
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	total = numeroUno * numeroDos;
	alert("La multiplicacion es " + total);
}

function dividir() {
	let total;
	let numeroUno;
	let numeroDos;
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	total = numeroUno / numeroDos;
	alert("La division es " + total);
}
