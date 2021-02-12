/*
Murakoshi Leandro
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);

	while (isNaN(numeroIngresado) || numeroIngresado > 9 || numeroIngresado < 1)
	{
		numeroIngresado = prompt("Error, ingrese un número entre 0 y 10.");
		numeroIngresado = parseInt(numeroIngresado);
	}

	document.getElementById('txtIdNumero').value = numeroIngresado;
}//FIN DE LA FUNCIÓN