/*
	Matías Leonardo Caballero
	DIF-F IF 08
*/
function mostrar()
{
	let edad;
	let estado;

	edad = document.getElementById("txtIdEdad").value;
	estado = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);

		if (estado=="Soltero" && edad>=18) {
			alert("Es soltero y no es menor");
		}

}//FIN DE LA FUNCIÓN

/*

	if (edad<18 && estadoCivil!="Soltero") {
		alert("No hacer nada");
	}else{
*/