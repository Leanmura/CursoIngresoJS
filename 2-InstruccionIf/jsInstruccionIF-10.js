function mostrar() {
	let notaRandom;
	notaRandom = Math.floor(Math.random() * 10) + 1;
	alert("Numero Ranbdom: " + notaRandom);

	if (notaRandom > 8) {
		alert("Exelente");
	} else {
		if (notaRandom > 3) {
			alert("Aprobo");
		} else {
			alert("Vamos, la proxima se puede");
		}
	}
} //FIN DE LA FUNCIÓN
