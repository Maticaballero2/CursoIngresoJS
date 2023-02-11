/*
	Matías Leonardo Caballero
	DIF-F IF 10
*/
function mostrar()
{
	let notaRandom;

	notaRandom = Math.floor(Math.random() *10 )+1;

	console.log(notaRandom);

	if (notaRandom >= 9) {
		alert("Exelente");
	}else if (notaRandom<4) {
		alert("Vamos, la proxima se puede");
	}else {
		alert("Aprobo");
	}

}//FIN DE LA FUNCIÓN