/* Leandro Murakoshi
Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados. */
function mostrar()
{
	let contador;
	let numeroIngresado;
	let cantidadPares;
	let condicion;
	cantidadPares=0;
	numeroIngresado=prompt("Ingrese un numero: ");
	numeroIngresado=parseInt(numeroIngresado);
	for(contador=0; contador < numeroIngresado; contador++)
	{
		condicion=(contador+1)%2;
		if(condicion == 0)
		{
			alert(contador+1);
			cantidadPares++;
		}
	}
	alert("Cantidad numeros pares: " + cantidadPares);



}//FIN DE LA FUNCIÓN