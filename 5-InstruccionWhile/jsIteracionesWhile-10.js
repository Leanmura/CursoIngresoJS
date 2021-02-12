/*
Murakoshi Leandro
10. Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	let sumaPositivos;
	let contadorNegativos;
	let contadorPositivos;
	let contadorCeros;
	let contadorPares;
	let modulo;
	let promedioNegativos;
	let promedioPositivos;

	// Inicializacion de variables
	sumaPositivos = 0;
	sumaNegativos = 0;
	contadorNegativos = 0;
	contadorPositivos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	promedioNegativos = 0;
	promedioPositivos = 0;
	respuesta = "si";

	while (respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		if (numeroIngresado < 0)
		{
			sumaNegativos = sumaNegativos + numeroIngresado; // Suma de negativos
			contadorNegativos++; // Contador negativos
		}
		else
		{
			if (numeroIngresado > 0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado; // Suma positivos
				contadorPositivos++; // Contador positivos
			}
			else
			{
				contadorCeros++; //Contador de ceros
			}

		}

		modulo = numeroIngresado % 2;
		if (modulo == 0)
		{
			contadorPares++; // Contador Pares
		}

		respuesta = prompt("desea continuar?");
	}//fin del while

	promedioNegativos = sumaNegativos / contadorNegativos; // Promedio negativos
	promedioPositivos = sumaPositivos / contadorPositivos; // Promedio positivos

	diferenciaPositivosNegativos = sumaPositivos + sumaNegativos;

	document.write("Suma de negativos: " + sumaNegativos + "<br>");
	document.write("Suma de los positivos: " + sumaPositivos + "<br>");
	document.write("Cantidad de positivos: " + contadorPositivos + "<br>");
	document.write("Cantidad de negativos: " + contadorNegativos + "<br>");
	document.write("Cantidad de ceros: " + contadorCeros + "<br>");
	document.write("Cantidad de números pares: " + contadorPares + "<br>");
	document.write("Promedio de positivos: " + promedioPositivos + "<br>");
	document.write("Promedios de negativos: " + promedioNegativos + "<br>");
	document.write("Diferencia entre positivos y negativos: " + diferenciaPositivosNegativos + "<br>");
}//FIN DE LA FUNCIÓN
