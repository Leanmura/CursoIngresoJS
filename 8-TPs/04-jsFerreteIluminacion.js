/*
Murakoshi Leandro
IF CON SWITCH ADENTRoO
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio()
{
	let precioLampara;
	let cantidadLamparas;
	let precioTotal;
	let precioTotalDescuento;
	let marca;
	let descuento;
	let ingresosBrutos;
	let porcentaje;
	precioLampara = 35;

	cantidadLamparas = document.getElementById("txtIdCantidad").value;
	cantidadLamparas = parseInt(cantidadLamparas);

	marca = document.getElementById("Marca").value;

	precioTotal = cantidadLamparas * precioLampara;

	/* 	IF CON SIWTCH DENTRO
	if (cantidadLamparas > 5)
	{
		porcentaje = 50;
	}
	else
	{
		if (cantidadLamparas == 5)
		{
			switch (marca)
			{
				case 'ArgentinaLuz':
					porcentaje = 40;
					break;
				default:
					porcentaje = 30;
			}
		}
		else
		{
			if (cantidadLamparas == 4)
			{
				switch (marca)
				{
					case 'ArgentinaLuz':
					case 'FelipeLamparas':
						porcentaje = 25;
						break;
					default:
						porcentaje = 20;
				}
			}
			else
			{
				if (cantidadLamparas == 3)
				{
					switch (marca)
					{
						case 'ArgentinaLuz':
							porcentaje = 15;
							break;
						case 'FelipeLamparas':
							porcentaje = 10;
							break;
						default:
							porcentaje = 5;
					}
				}
				else
				{
					porcentaje = 0;
				}
			}
		}
	} 
	*/

	/* SWITCH CON IF ADENTRO
	switch (cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje = 0;
			break;
		case 3:
			if (marca == "ArgentinaLuz")
			{
				porcentaje = 15;
			}
			else
			{
				if (marca == "FelipeLamparas")
				{
					porcentaje = 10;
				}
				else
				{
					porcentaje = 5;
				}
			}
			break;
		case 4:
			if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
			{
				porcentaje = 25;
			}
			else
			{
				porcentaje = 20;
			}
			break;
		case 5:
			if (marca == "ArgentinaLuz")
			{
				porcentaje = 40;
			}
			else
			{
				porcentaje = 30;
			}
			break;
		default:
			porcentaje = 50;
	}
	  */

	/* 	TODO SWITCH */
	switch (cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje = 0;
			break;
		case 3:
			switch (marca)
			{
				case 'ArgentinaLuz':
					porcentaje = 15;
					break;
				case 'FelipeLamparas':
					porcentaje = 10;
					break;
				default:
					porcentaje = 5;
			}
			break;
		case 4:
			switch (marca)
			{
				case 'ArgentinaLuz':
				case 'FelipeLamparas':
					porcentaje = 25;
					break;
				default:
					porcentaje = 20;
			}
			break;
		case 5:
			switch (marca)
			{
				case 'ArgentinaLuz':
					porcentaje = 40;
					break;
				default:
					porcentaje = 30;
			}
			break;
		default:
			porcentaje = 50;
	}

	/* TODO IF 
	if (cantidadLamparas > 5)
	{
		porcentaje = 50;
	}
	else
	{
		if (cantidadLamparas == 5)
		{
			if (marca == "ArgentinaLuz")
			{
				porcentaje = 40;
			}
			else
			{
				porcentaje = 30;
			}
		}
		else
		{
			if (cantidadLamparas == 4)
			{
				if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
				{
					porcentaje = 25;
				}
				else
				{
					porcentaje = 20;
				}
			}
			else
			{
				if (cantidadLamparas == 3)
				{
					if (marca == "ArgentinaLuz")
					{
						porcentaje = 15;
					}
					else
					{
						if (marca == "FelipeLamparas")
						{
							porcentaje = 10;
						}
						else
						{
							porcentaje = 5;
						}
					}
				}
				else
				{
					porcentaje = 0;
				}
			}
		}
	} 
	*/

	descuento = (precioTotal * porcentaje) / 100;
	precioTotalDescuento = precioTotal - descuento;
	if (precioTotalDescuento > 120)
	{
		ingresosBrutos = (precioTotalDescuento * 10) / 100;
		precioTotalDescuento = precioTotalDescuento + ingresosBrutos;
		alert("Usted pago " + ingresosBrutos + " de IIBB");
	}

	document.getElementById("txtIdprecioDescuento").value = precioTotalDescuento;
}
