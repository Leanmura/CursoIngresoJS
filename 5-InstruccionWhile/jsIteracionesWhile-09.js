/*
Murakoshi Leandro
9. Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
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
	document.getElementById('txtIdMinimo').value = numeroMinimo;
}//FIN DE LA FUNCIÓN