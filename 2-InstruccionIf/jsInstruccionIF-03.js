/*
	Matías Leonardo Caballero
	DIF-F IF 03
*/
function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if ( edad >=18) {

		alert("Usted es mayor de edad");
	}else{

		alert("Usted no es mayor de edad");
	}

}//FIN DE LA FUNCIÓN