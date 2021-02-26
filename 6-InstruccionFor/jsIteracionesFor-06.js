/* Leandro Murakoshi
Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados. */
/* function mostrar()
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
 */

/* 
Murakoshi Leandro
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes. */


function mostrar()
{
	let paisIngresado;
	let contador;
	let cantidadHabitantesIngresado;
	let continenteIngresado;
	let nivelPobrezaIngresado;
	let temperaturaIngresada;
	let cantidadTemperaturasPares;
	let cantidadTemperaturasImparesEuropa;
	let menorCantidadHabitantes;
	let cantidadPaisesMasCuarentaGrados;
	let cantidadPaisesAmericanosMenosZeroGrados;
	let acumuladorHabitantes;
	let promedioHabitantes;
	let acumuladorHabitantesPaisesMasCuarentaGrados;
	let temperaturaMinimaIngresada;
	let paisTemperaturaMinima;
	let cantidadHabitantesAmerica;
	let cantidadHabitantesEuropa;
	let cantidadHabitantesAfrica;
	let cantidadHabitantesAsia;
	let cantidadHabitantesOceania;
	let paisMenorCantidadHabitantes;
	let promedioHabitantesPaisesMasCuarentaGrados

	cantidadHabitantesOceania = 0;
	cantidadHabitantesAfrica = 0;
	cantidadHabitantesAmerica = 0;
	cantidadHabitantesAsia = 0;
	cantidadHabitantesEuropa = 0;

	acumuladorHabitantesPaisesMasCuarentaGrados = 0;
	acumuladorHabitantes = 0;
	cantidadPaisesAmericanosMenosZeroGrados = 0;
	cantidadPaisesMasCuarentaGrados = 0;
	cantidadTemperaturasImparesEuropa = 0;
	cantidadTemperaturasPares = 0;

	for (contador = 0; contador < 5; contador++)
	{
		paisIngresado = prompt("Ingresar pais #" + (contador + 1));
		while (isNaN(paisIngresado) == false)
		{
			paisIngresado = prompt("Error. Ingresar pais #" + (contador + 1));
		}

		cantidadHabitantesIngresado = prompt("Ingresar cantidad de habitantes (millones) #" + (contador + 1));
		cantidadHabitantesIngresado = parseInt(cantidadHabitantesIngresado);
		while (isNaN(cantidadHabitantesIngresado) == true || cantidadHabitantesIngresado < 1 || cantidadHabitantesIngresado > 7000)
		{
			cantidadHabitantesIngresado = prompt("Error. Ingresar cantidad de habitantes (millones) #" + (contador + 1));
		}

		continenteIngresado = prompt("Ingresar continente #" + (contador + 1));
		while (isNaN(continenteIngresado) == false || continenteIngresado != 'america' && continenteIngresado != 'europa' && continenteIngresado != 'oceania' && continenteIngresado != 'africa' && continenteIngresado != 'asia')
		{
			continenteIngresado = prompt("Error. Ingresar continente #" + (contador + 1));
		}

		nivelPobrezaIngresado = prompt("Ingresar el nivel de pobreza #" + (contador + 1));
		while (isNaN(nivelPobrezaIngresado) == false || nivelPobrezaIngresado != 'muy rico' && nivelPobrezaIngresado != 'rico' && nivelPobrezaIngresado != 'pobre' || (continenteIngresado == 'europa' && nivelPobrezaIngresado == 'pobre'))
		{
			nivelPobrezaIngresado = prompt("Error. Ingresar el nivel de pobreza #" + (contador + 1));
		}

		temperaturaIngresada = prompt("Ingresar temperatura minima registrada #" + (contador + 1));
		temperaturaIngresada = parseInt(temperaturaIngresada);
		while (isNaN(temperaturaIngresada) == true || temperaturaIngresada < -50 || temperaturaIngresada > 50)
		{
			temperaturaIngresada = prompt("Error. Ingresar temperatura minima registrada #" + (contador + 1));
		}

		console.log(paisIngresado);
		console.log(continenteIngresado);
		console.log(cantidadHabitantesIngresado);
		console.log(nivelPobrezaIngresado);
		console.log(temperaturaIngresada);

		if (temperaturaIngresada % 2 == 0)
		{
			cantidadTemperaturasPares++;
		}
		else
		{
			if (continenteIngresado == 'europa')
			{
				cantidadTemperaturasImparesEuropa++;
			}
		}

		if (contador == 0)
		{
			menorCantidadHabitantes = cantidadHabitantesIngresado;
			temperaturaMinimaIngresada = temperaturaIngresada;
		}
		else
		{
			if (cantidadHabitantesIngresado < menorCantidadHabitantes)
			{
				menorCantidadHabitantes = cantidadHabitantesIngresado;
				paisMenorCantidadHabitantes = paisIngresado;
			}
			if (temperaturaIngresada < temperaturaMinimaIngresada)
			{
				temperaturaMinimaIngresada = temperaturaIngresada;
				paisTemperaturaMinima = paisIngresado;
			}
		}

		if (temperaturaIngresada > 40)
		{
			cantidadPaisesMasCuarentaGrados++;
			acumuladorHabitantesPaisesMasCuarentaGrados = acumuladorHabitantesPaisesMasCuarentaGrados + cantidadHabitantesIngresado;
		}

		acumuladorHabitantes = acumuladorHabitantes + cantidadHabitantesIngresado;

		switch (continenteIngresado)
		{
			case 'america':
				cantidadHabitantesAmerica = cantidadHabitantesAmerica + cantidadHabitantesIngresado;
				if (temperaturaIngresada < 0)
				{
					cantidadPaisesAmericanosMenosZeroGrados++;
				}
				break;
			case 'oceania':
				cantidadHabitantesOceania = cantidadHabitantesOceania + cantidadHabitantesIngresado;
				break;
			case 'africa':
				cantidadHabitantesAfrica = cantidadHabitantesAfrica + cantidadHabitantesIngresado;
				break;
			case 'asia':
				cantidadHabitantesAsia = cantidadHabitantesAsia + cantidadHabitantesIngresado;
				break;
			case 'europa':
				cantidadHabitantesEuropa = cantidadHabitantesEuropa + cantidadHabitantesIngresado;
				break;
		}
	}

	if (cantidadHabitantesEuropa > cantidadHabitantesOceania && cantidadHabitantesEuropa > cantidadHabitantesAfrica && cantidadHabitantesEuropa > cantidadHabitantesAmerica && cantidadHabitantesEuropa > cantidadHabitantesAsia) 
	{
		alert("Europa es el pais con mayor poblacion");
	}
	else
	{
		if (cantidadHabitantesOceania > cantidadHabitantesAfrica && cantidadHabitantesOceania > cantidadHabitantesAmerica && cantidadHabitantesOceania > cantidadHabitantesAsia)
		{
			alert("Oceania es el pais con mayor poblacion");
		}
		else
		{
			if (cantidadHabitantesAfrica > cantidadHabitantesAmerica && cantidadHabitantesAfrica > cantidadHabitantesAsia)
			{
				alert("Africa es el pais con mayor poblacion");
			}
			else
			{
				if (cantidadHabitantesAmerica > cantidadHabitantesAsia)
				{
					alert("America es el pais con mayor poblacion");
				}
				else
				{
					alert("Asia es el pais con mayor poblacion");
				}
			}
		}
	}
	promedioHabitantes = acumuladorHabitantes / 5;
	promedioHabitantesPaisesMasCuarentaGrados = acumuladorHabitantesPaisesMasCuarentaGrados / cantidadPaisesMasCuarentaGrados;

	console.log("Cantidad de temperaturas pares: " + cantidadTemperaturasPares);
	console.log("Cantidad de temperaturas impares de Europa: " + cantidadTemperaturasImparesEuropa);
	console.log("Nombre del pais con menos habitantes: " + paisMenorCantidadHabitantes);
	console.log("Cantidad de paises que superan los cuarenta grados: " + cantidadPaisesMasCuarentaGrados);
	console.log("Cantidad de paises de America con menos de 0 grados: " + cantidadPaisesAmericanosMenosZeroGrados);
	console.log("Promedio de habitantes: " + promedioHabitantes);

	if (cantidadPaisesMasCuarentaGrados == 0)
	{
		console.log("No hay paises con mas de cuarenta grados.");

	}
	else
	{
		console.log("Promedio de habitantes de los paises que superan los 40grados: " + promedioHabitantesPaisesMasCuarentaGrados);
	}

	console.log("Temperatura minima ingresada: " + temperaturaMinimaIngresada);
	console.log("Esta corresponde a " + paisTemperaturaMinima);

}