/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar() {
	var nombreIngresado;
	// nombreIngresado = txtIdNombre.value;  forma 1
	nombreIngresado = document.getElementById("txtIdNombre").value; // forma 2

	console.log(nombreIngresado);
	alert(nombreIngresado);
}

/* txtIdNombre es el ID del input del html*/
