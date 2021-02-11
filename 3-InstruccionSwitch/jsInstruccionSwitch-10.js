function mostrar()
{
	let estacionIngresada = document.getElementById('txtIdEstacion').value;
	let destinoIngresado = document.getElementById('txtIdDestino').value;
	let seViaja;
	switch (estacionIngresada)
	{
		case 'Invierno':
			switch (destinoIngresado)
			{
				case 'Bariloche':
					seViaja = 1;
					break;
				default:
					seViaja = 0;
			}
			break;

		case 'Verano':
			switch (destinoIngresado)
			{
				case 'Cataratas':
				case 'Mar del plata':
					seViaja = 1;
					break;
				default:
					seViaja = 0;
			}
			break;

		case 'Primavera':
			switch (destinoIngresado)
			{
				case 'Bariloche':
					seViaja = 0;
					break;
				default:
					seViaja = 1;
			}
			break;

		case 'Otoño':
			seViaja = 1;
			break;
	}

	if (seViaja == 1)
	{
		alert("Se viaja");
	}
	else
	{
		alert("No se viaja");
	}


}//FIN DE LA FUNCIÓN