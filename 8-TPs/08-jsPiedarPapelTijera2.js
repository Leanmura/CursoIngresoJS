var eleccionMaquina;
var ContadorDeEmpates = 0;
var ContadorDeGanadas = 0;
var ContadorDePerdidas = 0;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random() * 4) + 1; //Genero el número RANDOM entre 1 y 4
	alert("Ha comenzado el juego");
	document.getElementById('txtIdGanadas').value = "Partidas Ganadadas: " + ContadorDeGanadas;
	document.getElementById('txtIdPerdidas').value = "Partidas Perdidas: " + ContadorDePerdidas;
	document.getElementById('txtIdEmpatadas').value = "Partida Empatadas: " + ContadorDeEmpates;

}//FIN DE LA FUNCIÓN

function piedra()
{
	switch (eleccionMaquina)
	{
		case 1:
			alert("PIEDRA!!!");
			alert("Empate.");
			ContadorDeEmpates = ContadorDeEmpates + 1;
			break;
		case 2:
			alert("PAPEL...");
			alert("Perdiste.");
			ContadorDePerdidas = ContadorDePerdidas + 1;
			break;
		case 3:
			alert("Tijeraaa");
			alert("Ganaste.");
			ContadorDeGanadas = ContadorDeGanadas + 1;
			console.log(ContadorDeGanadas);
	}
	comenzar();
}//FIN DE LA FUNCIÓN

function papel()
{
	switch (eleccionMaquina)
	{
		case 1:
			alert("PIEDRA!!!");
			alert("Ganaste.");
			ContadorDeGanadas = ContadorDeGanadas + 1;
			break;
		case 2:
			alert("PAPEL...");
			alert("Empate.");
			ContadorDeEmpates = ContadorDeEmpates + 1;
			break;
		case 3:
			alert("Tijeraaa");
			alert("Perdiste");
			ContadorDePerdidas = ContadorDePerdidas + 1;
	}
	comenzar();
}//FIN DE LA FUNCIÓN

function tijera()
{
	switch (eleccionMaquina)
	{
		case 1:
			alert("PIEDRA!!!");
			alert("Perdiste.");
			ContadorDePerdidas = ContadorDePerdidas + 1;
			break;
		case 2:
			alert("PAPEL...");
			alert("Ganaste.");
			ContadorDeGanadas = ContadorDeGanadas + 1;
			break;
		case 3:
			alert("Tijeraaa");
			alert("Empate.");
			ContadorDeEmpates = ContadorDeEmpates + 1;
	}
	comenzar();
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

}