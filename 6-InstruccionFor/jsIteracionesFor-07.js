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

function mostrar()
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
