/*
Murakoshi Leandro
8. Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;

	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = 'si';

	while (respuesta == 'si')
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado > 0)
		{
			sumaPositivos = numeroIngresado + sumaPositivos;
		}
		else
		{
			multiplicacionNegativos = numeroIngresado * multiplicacionNegativos;
		}

		respuesta = prompt("Desea seguir ingresando numeros? ");
	}


	txtIdSuma.value = sumaPositivos;
	txtIdProducto.value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN