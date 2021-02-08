/* 
Murakoshi Leandro
7) Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se 
encuentra Norte, Sur, Este u Oeste */
function mostrar()
{
	var destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	switch (destinoIngresado)
	{
		case 'Bariloche':
			alert('Se encuentra al OESTE de nuestro pais');
			break;

		case 'Cataratas':
			alert("Se encuentra al NORTE de nuestro pais");
			break;

		case 'Mar del plata':
			alert("Se encuentra al ESTE de nuestro pais");
			break;

		default:
			alert("Se encuentra al SUR de nuestro pais");
	}

}//FIN DE LA FUNCIÓN