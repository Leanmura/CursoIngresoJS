/*
Murakoshi Leandro
8. Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	//var contadorNegativos;
	var banderaNegativos;

	banderaNegativos = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = 'si';
	//contadorNegativos = 0;

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
			banderaNegativos = 1;
			//contadorNegativos++;
		}

		respuesta = prompt("Desea seguir ingresando numeros? ");
	}

	//Si pero....(la otra es mejor) if(contadorNegativos == 0)
	if (banderaNegativos == 0)
	{
		multiplicacionNegativos = 0;
	}

	document.getElementById('txtIdSuma').value = sumaPositivos;
	document.getElementById('txtIdProducto').value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN