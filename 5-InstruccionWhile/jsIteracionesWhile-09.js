/*
Murakoshi Leandro
9BIS. Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	// declarar variables
	/* 
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero = "es el primero";
	respuesta = 'si';

	while (respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		if (banderaDelPrimero == "es el primero")
		{
			numeroMinimo = numeroIngresado;
			numeroMaximo = numeroIngresado;
			banderaDelPrimero = "No es el primero";
		}
		else
		{
			if (numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			//no va else por que puede ser que no sea el maximo ni el minimo
			if (numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
		}

		respuesta = prompt("desea continuar?");
	}
	document.getElementById('txtIdMaximo').value = numeroMaximo;
	document.getElementById('txtIdMinimo').value = numeroMinimo; */

	var banderaDelPrimero;
	var edadIngresada;
	var edadMaxima;
	var edadMinima;
	var respuesta;
	var nombre;
	var nombreMasViejo;
	var nombreMasJoven;
	//iniciar variables
	banderaDelPrimero = "es el primero";
	respuesta = 'si';

	while (respuesta == "si" || respuesta == "Si")
	{
		nombre = prompt("Ingrese un nombre: ");
		edadIngresada = prompt("Ingrese una edad: ");
		edadIngresada = parseInt(edadIngresada);
		while (isNaN(edadIngresada) || edadIngresada < 0)
		{
			edadIngresada = prompt("ERROR! Edad no valida\nIngrese una edad: ");
			edadIngresada = parseInt(edadIngresada);
		}
		if (banderaDelPrimero == "es el primero")
		{
			edadMinima = edadIngresada;
			edadMaxima = edadIngresada;
			nombreMasViejo = nombre;
			nombreMasJoven = nombre;
			banderaDelPrimero = "No es el primero";
		}
		else
		{
			if (edadIngresada > edadMaxima)
			{
				edadMaxima = edadIngresada;
				nombreMasViejo = nombre;
			}
			if (edadIngresada < edadMinima)
			{
				edadMinima = edadIngresada;
				nombreMasJoven = nombre;
			}
		}

		respuesta = prompt("desea continuar?");
	}
	document.getElementById('txtIdMaximo').value = "La persona mas vieja es " + nombreMasViejo + ", edad " + edadMaxima + " años.";
	document.getElementById('txtIdMinimo').value = "La persona mas joven es " + nombreMasJoven + ", edad " + edadMinima + " años.";;

}//FIN DE LA FUNCIÓN