/*
	Matías Leonardo Caballero
	DIF-F IF 02
*/

/*
function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	//edad es mayor o igual a
	if ( edad >= 18)
	{
		alert("Usted es mayor de edad");
	}

}//FIN DE LA FUNCIÓN
*/

/*
	Matías Leonardo Caballero
	DIF-F Integrador 4
*/
function mostrar()
{
	let altura;
	let edad;

	altura = prompt("Introduzca su altura aquí");

	altura = parseInt(altura);
	
	if (altura >=120){

		edad = prompt("Introduzca su edad aquí");
		edad = parseInt(edad);

		if (edad<18 || edad>=80) {
			alert("El monto que tiene que pagar es de: $200");
		}else{
			alert("El monto que tiene que pagar es de: $400");
		}
	}else{
		alert("Usted no puede subirse a la montaña rusa");
	}
}