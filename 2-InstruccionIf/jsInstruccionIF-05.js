/*
	Matías Leonardo Caballero
	DIF-F IF 05
*/
function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if ( edad <13 || edad >17) {

		alert("Usted no es adolecente");
	}
}//FIN DE LA FUNCIÓN