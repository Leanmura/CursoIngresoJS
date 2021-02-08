/* 
Murakoshi Leandro
9) Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada 
estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar 
para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento 
del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento 
del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento 
del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento

Curso de ingreso UTN FRA */

function mostrar()
{
	let estacionIngresada;
	let destino;
	let precioFinal;
	let porcentaje;
	let descuentoAumento;
	let tarifaBase;
	tarifaBase = 15000;

	destino = document.getElementById('txtIdDestino').value;
	estacionIngresada = document.getElementById('txtIdEstacion').value;

	switch (estacionIngresada)
	{
		case 'Invierno':
			switch (destino)
			{
				case 'Bariloche':
					porcentaje = 20;
					break;
				case 'Mar del plata':
					porcentaje = -20;
					break;
				default:
					porcentaje = -10;
					break;
			}
			break;
		case 'Verano':
			switch (destino)
			{
				case 'Bariloche':
					porcentaje = -20;
					break;
				case 'Mar del plata':
					porcentaje = 20;
					break;
				default:
					porcentaje = 10;
					break;
			}
			break;
		default:
			switch (destino)
			{
				case 'Cordoba':
					porcentaje = 0;
					break;
				default:
					porcentaje = 10;
					break;
			}
	}
	descuentoAumento = tarifaBase * porcentaje / 100;
	precioFinal = tarifaBase + descuentoAumento;

	alert("El precio final de su viaje a " + destino + " en " + estacionIngresada + " es de $" + precioFinal);
}//FIN DE LA FUNCIÓN