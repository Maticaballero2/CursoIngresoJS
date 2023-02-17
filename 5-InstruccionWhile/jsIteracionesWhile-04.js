/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	do {

		numeroIngresado = prompt("Ingrese un numero entre el 0 y el 9");

	}while(numeroIngresado <0 || numeroIngresado >9);
		
		alert("El numero ingresado es incorrecto, volve a poner un numero");
		
}
//FIN DE LA FUNCIÓN