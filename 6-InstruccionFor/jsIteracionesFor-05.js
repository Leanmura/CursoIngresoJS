/* Lenadro Murakoshi
Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9. */
function mostrar()
{
	let contador;
	for(contador = 0; ; contador++)
	{
		numeroIngresado = prompt("Ingrese el nueve: ");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado == 9)
		{
			break;
		}
	}



}//FIN DE LA FUNCIÓN