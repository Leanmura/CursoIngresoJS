/* function mostrar()
{
	let numeroIngresado;
	let contador;
	let cantidadDivisores;

	cantidadDivisores = 0;
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);
	while (isNaN(numeroIngresado))
	{
		numeroIngresado = prompt("Error. Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
	}
	for (contador = 0; contador < numeroIngresado; contador++)
	{
		if (numeroIngresado % (contador + 1) == 0)
		{
			console.log(contador + 1);
			cantidadDivisores++;
		}
	}
	console.log("Cantidad de numeros divisores de " + numeroIngresado + ": " + cantidadDivisores);
}//FIN DE LA FUNCIÓN */

/* 
Leandro Murakoshi 
a 5 personas nombre,sexo,edad(validar que solo sean hombres no mayores a 12 y 
	que las mujeres sean mayores de edad, altura rangos cualquiera) */
/* function mostrar()
{
	let contador;
	let nombre;
	let sexo;
	let edad;
	let altura;


	for (contador = 0; contador < 5; contador++)
	{
		nombre = prompt("Ingrese nombre #" + (contador + 1));
		while (isNaN(nombre) == false)
		{
			nombre = prompt("Error. Ingrese nombre #" + (contador + 1));
		}

		sexo = prompt("Ingrese sexo #" + (contador + 1));
		while (isNaN(sexo) == false || sexo != 'masculino' && sexo != 'femenino')
		{
			sexo = prompt("Error. Ingrese sexo #" + (contador + 1));
		}

		edad = prompt("Ingrese edad #" + (contador + 1));
		edad = parseInt(edad);
		while (isNaN(edad) == true || (sexo == 'masculino' && edad > 12) || (sexo == 'femenino' && edad < 18))
		{
			edad = prompt("Error. Ingrese edad #" + (contador + 1));
			edad = parseInt(edad);

		}

		altura = prompt("Ingrese altura #" + (contador + 1));
		altura = parseFloat(altura);
		while (isNaN(altura) == true || altura < 1.30 || altura > 2.20)
		{
			altura = prompt("Error. Ingrese altura #" + (contador + 1));
			altura = parseFloat(altura);

		}

		console.log(nombre);
		console.log(sexo);
		console.log(edad);
		console.log(altura);

	}
} */

/* 
Murakoshi Leandro
For 11 (a 5 personas nombre , sexo ,edad(validar que solo sean hombres no
	mayores a 12 y que las mujeres sean ADOLESCENTES),altura(rangos que quiera)) 
	... informar el sexo y nombre de la persona mas alta */

/* function mostrar()
{
	let contador;
	let nombre;
	let sexo;
	let edad;
	let altura;
	let banderaPrimero;
	let mayorAltura;
	let sexoDelMasAlto;
	let nombreDelMasAlto;

	banderaPrimero = 'primero';

	for (contador = 0; contador < 5; contador++)
	{
		nombre = prompt("Ingrese nombre #" + (contador + 1));
		while (isNaN(nombre) == false)
		{
			nombre = prompt("Error. Ingrese nombre #" + (contador + 1));
		}

		sexo = prompt("Ingrese sexo #" + (contador + 1));
		while (isNaN(sexo) == false || sexo != 'masculino' && sexo != 'femenino')
		{
			sexo = prompt("Error. Ingrese sexo #" + (contador + 1));
		}

		edad = prompt("Ingrese edad #" + (contador + 1));
		edad = parseInt(edad);
		while (isNaN(edad) == true || (sexo == 'masculino' && edad > 12) || (sexo == 'femenino' && (edad > 17 || edad < 13)))
		{
			edad = prompt("Error. Ingrese edad #" + (contador + 1));
			edad = parseInt(edad);

		}

		altura = prompt("Ingrese altura #" + (contador + 1));
		altura = parseFloat(altura);
		while (isNaN(altura) == true || altura < 1.30 || altura > 2.20)
		{
			altura = prompt("Error. Ingrese altura #" + (contador + 1));
			altura = parseFloat(altura);

		}

		console.log(nombre);
		console.log(sexo);
		console.log(edad);
		console.log(altura);

		if (banderaPrimero == 'primero' || altura > mayorAltura)
		{
			mayorAltura = altura;
			banderaPrimero = 'no es el primero';
			sexoDelMasAlto = sexo;
			nombreDelMasAlto = nombre;
		}

	}
	alert("Nombre del mas alto: " + nombreDelMasAlto);
	alert("Sexo de " + nombreDelMasAlto + ": " + sexoDelMasAlto);
}
 */

/* Idem, 11 pero de las mujeres el nombre de la mas joven, 
de los hombres el nombre del mas bajito, solo si los hay */
/* function mostrar()
{
	let contador;
	let nombre;
	let sexo;
	let edad;
	let altura;

	let mayorAltura;
	let sexoDelMasAlto;
	let nombreDelMasAlto;

	let menorEdadMujer;
	let nombreDeLaMasJoven;

	let menorAlturaHombre;
	let nombreDelHombreMasBajo;

	let banderaPrimerHombreMasBajo;
	let banderaPrimeroAltura
	let banderaPrimeroEdadMujer;

	banderaPrimeroAltura = 'primero';
	banderaPrimeroEdadMujer = 'primero';
	banderaPrimerHombreMasBajo = 'primero';

	for (contador = 0; contador < 5; contador++)
	{
		nombre = prompt("Ingrese nombre #" + (contador + 1));
		while (isNaN(nombre) == false)
		{
			nombre = prompt("Error. Ingrese nombre #" + (contador + 1));
		}

		sexo = prompt("Ingrese sexo #" + (contador + 1));
		while (isNaN(sexo) == false || sexo != 'masculino' && sexo != 'femenino')
		{
			sexo = prompt("Error. Ingrese sexo #" + (contador + 1));
		}

		edad = prompt("Ingrese edad #" + (contador + 1));
		edad = parseInt(edad);
		while (isNaN(edad) == true || (sexo == 'masculino' && edad > 12) || (sexo == 'femenino' && (edad > 17 || edad < 13)))
		{
			edad = prompt("Error. Ingrese edad #" + (contador + 1));
			edad = parseInt(edad);

		}

		altura = prompt("Ingrese altura #" + (contador + 1));
		while (isNaN(altura) == true || altura < 1.30 || altura > 2.20)
		{
			altura = prompt("Error. Ingrese altura #" + (contador + 1));
			altura = parseFloat(altura);

		}
		altura = parseFloat(altura);

		console.log(nombre);
		console.log(sexo);
		console.log(edad);
		console.log(altura);

		if (banderaPrimeroAltura == 'primero' || altura > mayorAltura)
		{
			mayorAltura = altura;
			banderaPrimeroAltura = 'no es el primero';
			sexoDelMasAlto = sexo;
			nombreDelMasAlto = nombre;
		}

		if (sexo == 'masculino')
		{
			if (banderaPrimerHombreMasBajo == 'primero' || altura < menorAlturaHombre)
			{
				menorAlturaHombre = altura;
				banderaPrimerHombreMasBajo = 'no es el primero';
				nombreDelHombreMasBajo = nombre;
			}
		}
		else
		{
			if (banderaPrimeroEdadMujer == 'primero' || edad < menorEdadMujer)
			{
				menorEdadMujer = edad;
				banderaPrimeroEdadMujer = 'no es el primero';
				nombreDeLaMasJoven = nombre;
			}

		}



	}
	alert("Nombre del mas alto: " + nombreDelMasAlto);
	alert("Sexo de " + nombreDelMasAlto + ": " + sexoDelMasAlto);

	if (banderaPrimerHombreMasBajo == 'primero')
	{
		alert("No hay Hombres");
	}
	else
	{
		alert("El nombre del hombre mas bajo es: " + nombreDelHombreMasBajo);
	}

	if (banderaPrimeroEdadMujer == 'primero')
	{
		alert("No hay mujeres");
	}
	else
	{
		alert("El nombre de la mujer mas joven es: " + nombreDeLaMasJoven)
	}
}
 */
/* 
Murakoshi Leandro
For 13 ( o anterior mas ...el promedio de edad entre los hombre ,el 
promedio de edad entre las mujeres, la cantidad de personas que miden mas 
de 1,60 metros, y el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts */

function mostrar()
{
	let contador;
	let nombre;
	let sexo;
	let edad;
	let altura;

	let mayorAltura;
	let sexoDelMasAlto;
	let nombreDelMasAlto;

	let menorEdadMujer;
	let nombreDeLaMasJoven;

	let menorAlturaHombre;
	let nombreDelHombreMasBajo;

	let banderaPrimerHombreMasBajo;
	let banderaPrimeroAltura
	let banderaPrimeroEdadMujer;

	let promedioEdadHombres;
	let promedioEdadMujeres;
	let cantidadMujeres;
	let cantidadHombres;
	let acumuladorEdadMujeres;
	let acumuladorEdadHombres;
	let cantidadPersonasMasDeUnoSesenta;
	let cantidadMujeresMasDeUnoSesenta;
	let porcentajeMujeresMasDeUnoSesenta

	banderaPrimeroAltura = 'primero';
	banderaPrimeroEdadMujer = 'primero';
	banderaPrimerHombreMasBajo = 'primero';

	acumuladorEdadHombres = 0;
	acumuladorEdadMujeres = 0;
	cantidadHombres = 0;
	cantidadMujeres = 0;
	cantidadPersonasMasDeUnoSesenta = 0;
	cantidadMujeresMasDeUnoSesenta = 0;

	for (contador = 0; contador < 3; contador++)
	{
		nombre = prompt("Ingrese nombre #" + (contador + 1));
		while (isNaN(nombre) == false)
		{
			nombre = prompt("Error. Ingrese nombre #" + (contador + 1));
		}

		sexo = prompt("Ingrese sexo #" + (contador + 1));
		while (isNaN(sexo) == false || sexo != 'masculino' && sexo != 'femenino')
		{
			sexo = prompt("Error. Ingrese sexo #" + (contador + 1));
		}

		edad = prompt("Ingrese edad #" + (contador + 1));
		edad = parseInt(edad);
		while (isNaN(edad) == true || (sexo == 'masculino' && edad > 12) || (sexo == 'femenino' && (edad > 17 || edad < 13)))
		{
			edad = prompt("Error. Ingrese edad #" + (contador + 1));
			edad = parseInt(edad);

		}

		altura = prompt("Ingrese altura #" + (contador + 1));
		while (isNaN(altura) == true || altura < 1.30 || altura > 2.20)
		{
			altura = prompt("Error. Ingrese altura #" + (contador + 1));
			altura = parseFloat(altura);

		}
		altura = parseFloat(altura);

		console.log(nombre);
		console.log(sexo);
		console.log(edad);
		console.log(altura);

		if (banderaPrimeroAltura == 'primero' || altura > mayorAltura)
		{
			mayorAltura = altura;
			banderaPrimeroAltura = 'no es el primero';
			sexoDelMasAlto = sexo;
			nombreDelMasAlto = nombre;
		}

		if (sexo == 'masculino')
		{
			if (banderaPrimerHombreMasBajo == 'primero' || altura < menorAlturaHombre)
			{
				menorAlturaHombre = altura;
				banderaPrimerHombreMasBajo = 'no es el primero';
				nombreDelHombreMasBajo = nombre;
			}
			acumuladorEdadHombres = acumuladorEdadHombres + edad;
			cantidadHombres++;
		}
		else
		{
			if (banderaPrimeroEdadMujer == 'primero' || edad < menorEdadMujer)
			{
				menorEdadMujer = edad;
				banderaPrimeroEdadMujer = 'no es el primero';
				nombreDeLaMasJoven = nombre;
			}
			acumuladorEdadMujeres = acumuladorEdadMujeres + edad;
			cantidadMujeres++;
		}

		if (altura > 1.6)
		{
			cantidadPersonasMasDeUnoSesenta++;
			if (sexo == 'femenino')
			{
				cantidadMujeresMasDeUnoSesenta++;
			}
		}



	}

	promedioEdadHombres = acumuladorEdadHombres / cantidadHombres;
	promedioEdadMujeres = acumuladorEdadMujeres / cantidadMujeres;
	porcentajeMujeresMasDeUnoSesenta = cantidadMujeresMasDeUnoSesenta * 100 / cantidadPersonasMasDeUnoSesenta;

	alert("Nombre del mas alto: " + nombreDelMasAlto);
	alert("Sexo de " + nombreDelMasAlto + ": " + sexoDelMasAlto);

	if (banderaPrimerHombreMasBajo == 'primero')
	{
		alert("No hay Hombres");
	}
	else
	{
		alert("El nombre del hombre mas bajo es: " + nombreDelHombreMasBajo);
		alert("Promedio de las edades de los hombres: " + promedioEdadHombres);
	}

	if (banderaPrimeroEdadMujer == 'primero')
	{
		alert("No hay mujeres");
	}
	else
	{
		alert("El nombre de la mujer mas joven es: " + nombreDeLaMasJoven);
		alert("Promedio de las edades de las mujeres: " + promedioEdadMujeres);
		if (cantidadPersonasMasDeUnoSesenta == 0)
		{
			alert("No hay personas de mas de 1.60m.")
		}
		else
		{
			alert("El procentaje de las mujeres que miden mas de 1.60m es: " + porcentajeMujeresMasDeUnoSesenta);
		}
	}
}
