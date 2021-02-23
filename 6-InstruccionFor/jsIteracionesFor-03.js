/* Murakoshi Leandro
Enunciado:
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA" */
function mostrar()
{

	var repetciones;
	let contador;
	repetciones = prompt("ingrese el número de repeticiones");
	repetciones = parseInt(repetciones);

	for(contador=0 ; contador < repetciones ; contador++)
	{
		alert("Hola UTN FRA");
	}

}//FIN DE LA FUNCIÓN