/*
Leandro Murakoshi 
6. Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio. */
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	let promedio;

	contador = 0;
	acumulador = 0;

	while (contador < 5)
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		contador++;
		acumulador = numeroIngresado + acumulador;
	}

	promedio = acumulador / contador;
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;
}//FIN DE LA FUNCIÓN