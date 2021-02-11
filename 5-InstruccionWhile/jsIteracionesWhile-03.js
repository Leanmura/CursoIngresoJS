/*
Murakoshi Leandro
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = "random";
	claveIngresada = prompt("ingrese la clave.");
	while (claveIngresada != "utn750")
	{
		claveIngresada = prompt("Error, ingrese la clave.");
	}
	alert("Clave correcta");
}//FIN DE LA FUNCIÓN
