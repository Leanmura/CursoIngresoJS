/*
Murakoshi Leandro
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() 
{
	//definicion de variables
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let sueldoBruto;
	let numeroDeLegajo;
	let nacionalidad;

	edadIngresada = prompt("Ingresar edad entre 18 y 90 años inclusive: ");
	edadIngresada = parseInt(edadIngresada);
	while (isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90)
	{
		edadIngresada = prompt("Edad mal ingresada.\nIngresar edad entre 18 y 90 años inclusive: ");
	}

	sexoIngresado = prompt('Ingresar sexo ("M" para Masculino o "F" para Femenino): ');
	while (sexoIngresado != "M" && sexoIngresado != "F")
	{
		sexoIngresado = prompt("Sexo mal ingresado.\nIngresar sexo (M para Masculino o F para Femenino): ");
	}

	estadoCivilIngresado = prompt(" 1. Soltero\n 2. Casado\n 3. Divorciado\n 4. Viudo\nIngresar estado civil: ");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);
	while (isNaN(estadoCivilIngresado) || estadoCivilIngresado > 4 || estadoCivilIngresado < 1)
	{
		estadoCivilIngresado = prompt("Estado civil mal ingresado.\n 1. Soltero\n 2. Casado\n 3. Divorciado\n 4. Viudo\nIngresar estado civil: ");
	}

	sueldoBruto = prompt("Ingrese sueldo bruto (mayor a $8000): ");
	sueldoBruto = parseInt(sueldoBruto);
	while (isNaN(sueldoBruto) || sueldoBruto < 8000)
	{
		sueldoBruto = prompt("Sueldo burto mal ingresado.\nIngrese sueldo bruto (mayor a $8000: ");
	}

	numeroDeLegajo = prompt("Ingrese numero de legajo, numerico de 4 cifras y sin ceros a la izquierda: ");
	numeroDeLegajo = parseInt(numeroDeLegajo);
	while (isNaN(numeroDeLegajo) || numeroDeLegajo < 1000 || numeroDeLegajo > 9999)
	{
		numeroDeLegajo = prompt("Numero de legajo mal ingresado.\nIngrese numero de legajo, numerico de 4 cifras y sin ceros a la izquierda: ");
	}

	nacionalidad = prompt('Ingresar nacionalidad ("A" para argentino, "E" para extranjero o "N" para nacionalizado): ');
	while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
	{
		prompt('Nacionalidad mal ingresada.\nIngresar nacionalidad ("A" para argentino, "E" para extranjero o "N" para nacionalizado): ');
	}

	document.getElementById('txtIdEdad').value = edadIngresada;
	document.getElementById('txtIdSexo').value = sexoIngresado;
	document.getElementById('txtIdEstadoCivil').value = estadoCivilIngresado;
	document.getElementById('txtIdSueldo').value = sueldoBruto;
	document.getElementById('txtIdLegajo').value = numeroDeLegajo;
	document.getElementById('txtIdNacionalidad').value = nacionalidad;
}
