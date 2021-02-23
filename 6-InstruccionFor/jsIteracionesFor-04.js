/* Leandro Murakoshi
Enunciado:
al presionar el botón repetir hasta que utilizamos 'BREAK'. */
function mostrar()
{	
	let contador;
	
	for(contador=0 ; ; contador++)
	{
		if(contador== 1000)
		{
			alert("Llegue al break");
			break;
		}
	}


}//FIN DE LA FUNCIÓN