/*
	Matías Leoanrdo Caballero
	DIF-F IF 06
*/
function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	


}//FIN DE LA FUNCIÓN

	if ( edad>=18 ) {

		alert("Usted es mayor de edad");
	}else{

		if (edad<13) {

			alert("Usted es niño");
		}else{

			alert("Usted es un adolecente");
		}
	}