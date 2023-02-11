/*
	Matías Leonardo Caballero
	DIF-F IF 04
*/
function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad>=13 && edad<=17) {

		alert("Usted es adolecente");
	} 

}//FIN DE LA FUNCIÓN