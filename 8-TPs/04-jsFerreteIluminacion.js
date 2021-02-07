/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
	let precioLampara;
	let cantidadLamparas;
	let precioTotal;
	let precioTotalDescuento;
	let marca;
	let descuento;
	let ingresosBrutos;

	precioLampara = 35;

	cantidadLamparas = document.getElementById("txtIdCantidad").value;
	cantidadLamparas = parseInt(cantidadLamparas);

	marca = document.getElementById("Marca").value;

	precioTotal = cantidadLamparas * precioLampara;

	if (cantidadLamparas > 5) {
		descuento = (precioTotal * 50) / 100;
		precioTotalDescuento = precioTotal - descuento;
	} else {
		if (cantidadLamparas == 5) {
			if (marca == "ArgentinaLuz") {
				descuento = (precioTotal * 40) / 100;
				precioTotalDescuento = precioTotal - descuento;
			} else {
				descuento = (precioTotal * 30) / 100;
				precioTotalDescuento = precioTotal - descuento;
			}
		} else {
			if (cantidadLamparas == 4) {
				if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
					descuento = (precioTotal * 25) / 100;
					precioTotalDescuento = precioTotal - descuento;
				} else {
					descuento = (precioTotal * 20) / 100;
					precioTotalDescuento = precioTotal - descuento;
				}
			} else {
				if (cantidadLamparas == 3) {
					if (marca == "ArgentinaLuz") {
						descuento = (precioTotal * 15) / 100;
						precioTotalDescuento = precioTotal - descuento;
					} else {
						if (marca == "FelipeLamparas") {
							descuento = (precioTotal * 10) / 100;
							precioTotalDescuento = precioTotal - descuento;
						} else {
							descuento = (precioTotal * 5) / 100;
							precioTotalDescuento = precioTotal - descuento;
						}
					}
				} else {
					precioTotalDescuento = precioTotal;
				}
			}
		}
	}

	if (precioTotalDescuento > 120) {
		ingresosBrutos = (precioTotalDescuento * 10) / 100;
		precioTotalDescuento = precioTotalDescuento + ingresosBrutos;
		alert("Usted pago " + ingresosBrutos + " de IIBB");
	}

	document.getElementById("txtIdprecioDescuento").value = precioTotalDescuento;
}
