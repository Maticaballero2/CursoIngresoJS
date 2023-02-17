function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){

		case "Bariloche":
			alert("Oeste");
			break;
		case"Cataratas":
			alert("Norte");
			break;
		case"Mar del plata":
			alert("Este");
			break;
		case "Ushuaia":
			alert("Sur")
	}
}//FIN DE LA FUNCIÓN