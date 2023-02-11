/*
	Matías Leonardo Caballero
	DIF-F IF 07
*/
function mostrar()
{
	let edad;
	let estado;

	edad = document.getElementById("txtIdEdad").value;
	estado = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);

	if (edad<18 && estado!="Soltero") {
		alert("Es muy pequeño para no ser soltero");
	}
}//FIN DE LA FUNCIÓN