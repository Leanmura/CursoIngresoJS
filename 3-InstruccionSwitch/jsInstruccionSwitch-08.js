/* 
Murakoshi Leandro
8) Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino */
function mostrar()
{
	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	switch (destinoIngresado)
	{
		case 'Cataratas':
		case 'Mar del plata':
			alert("Hace CALOR");
			break;

		default:
			alert("Hace FRIO");
	}

}//FIN DE LA FUNCIÓN