// Matias Leonardo Caballero
//	DIV-F E/S 06
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numIngresado1;
	let numIngresado2;
	let suma;

	numIngresado1=txtIdNumeroUno.value;

	numIngresado1=parseInt(numIngresado1);

	numIngresado2=txtIdNumeroDos.value;

	numIngresado2=parseInt(numIngresado2);

	suma=numIngresado1+numIngresado2;

	alert("La suma es "+suma);

}

