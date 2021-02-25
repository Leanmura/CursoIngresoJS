/* Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
 */

/* function mostrar()
{
	let numeroIngresado;
	let i;
	let cantidad;

	cantidad = 0;
	numeroIngresado = prompt("Ingresar un numero");
	numeroIngresado = parseInt(numeroIngresado);
	for (i = 0; i < numeroIngresado / 2; i++)
	{
		if (numeroIngresado % (i + 1) == 0)
		{
			cantidad++;
		}
	}
	if (cantidad < 2 && numeroIngresado != 1)
	{
		alert("El " + numeroIngresado + " es primo");
	}
} */

/* Pedir 10 numeros, informar el mayor de los negativos y el menor de los pares, 
solo si los hay */
function mostrar()
{
	let numeroIngresado;
	let contador;
	let mayorNegativos;
	let banderaPrimeroPar;
	let banderaPrimeroNegativo;
	let menorPares;

	banderaPrimeroPar = 'primero';
	banderaPrimeroNegativo = 'primero';

	for (contador = 0; contador < 10; contador++)
	{
		numeroIngresado = prompt("Ingrese 10 numeros: #" + (contador + 1));
		numeroIngresado = parseInt(numeroIngresado);
		console.log(numeroIngresado);
		while (isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Error. Ingrese un numero: #" + (contador + 1));
			numeroIngresado = parseInt(numeroIngresado);
		}


		/* 		if (numeroIngresado < 0)
				{
					if (banderaPrimeroNegativo == 'primero')
					{
						mayorNegativos = numeroIngresado;
						banderaPrimeroNegativo = 'no es el primero';
		
					}
					else
					{
						if (numeroIngresado > mayorNegativos)
						{
							mayorNegativos = numeroIngresado;
						}
					}
				} */

		if (numeroIngresado < 0 && (banderaPrimeroNegativo == 'primero' || numeroIngresado > mayorNegativos))
		{
			mayorNegativos = numeroIngresado;
			banderaPrimeroNegativo = 'no es el primero';
		}

		/* 		if (numeroIngresado % 2 == 0)
				{
					if (banderaPrimeroPar == 'primero')
					{
						menorPares = numeroIngresado;
						banderaPrimeroPar = 'no es el primero';
					}
					else
					{
						if (numeroIngresado < menorPares)
						{
							menorPares = numeroIngresado;
						}
					}
				} */

		if (numeroIngresado % 2 == 0 && (banderaPrimeroPar == 'primero' || numeroIngresado < menorPares))
		{
			menorPares = numeroIngresado;
			banderaPrimeroPar = 'no es el primero';
		}

	}

	if (banderaPrimeroNegativo == 'no es el primero')
	{
		alert("Mayor de los negativos: " + mayorNegativos);
	}
	else 
	{
		alert("No hay numeros negativos");
	}

	if (banderaPrimeroPar == 'no es el primero')
	{
		alert("Menor de los Pares: " + menorPares);
	}
	else
	{
		alert("No hay numeros pares");
	}

}//FIN DE LA FUNCIÓN