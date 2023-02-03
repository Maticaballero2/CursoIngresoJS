
// Matias Leonardo Caballero
//	DIV-F E/S 07

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//Declaro Variables
	let numeroIngresado1;
	let numeroIngresado2;
	let suma;

	//Tomo datos por ID
	numeroIngresado1=txtIdNumeroUno.value;
	//Parseo el dato del ID
	numeroIngresado1=parseInt(numeroIngresado1);
	//Tomo datos por ID
	numeroIngresado2=txtIdNumeroDos.value;
	//Parseo el dato del ID
	numeroIngresado2=parseInt(numeroIngresado2);
	//Sumo las vareables parseadas
	suma=numeroIngresado1+numeroIngresado2;
	//Muestro la suma por alert
	alert("La suma es: "+suma);

}

function restar()
{
	let numeroIngresado1;
	let numeroIngresado2;
	let resta;

	numeroIngresado1=txtIdNumeroUno.value;

	numeroIngresado1=parseInt(numeroIngresado1);

	numeroIngresado2=txtIdNumeroDos.value;

	numeroIngresado2=parseInt(numeroIngresado2);

	resta= numeroIngresado1 - numeroIngresado2;

	alert("Su resta es: "+resta);

}

function multiplicar()
{ 
	
	let numeroIngresado1;
	let numeroIngresado2;
	let multiplicacion;

	numeroIngresado1=txtIdNumeroUno.value;

	numeroIngresado1=parseInt(numeroIngresado1);

	numeroIngresado2=txtIdNumeroDos.value;

	numeroIngresado2=parseInt(numeroIngresado2);

	multiplicacion= numeroIngresado1 * numeroIngresado2;

	alert("Su multiplicación es: "+multiplicacion);

}

function dividir()
{

	let numeroIngresado1;
	let numeroIngresado2;
	let divicion;

	numeroIngresado1=txtIdNumeroUno.value;

	numeroIngresado1=parseInt(numeroIngresado1);

	numeroIngresado2=txtIdNumeroDos.value;

	numeroIngresado2=parseInt(numeroIngresado2);

	divicion= numeroIngresado1/numeroIngresado2;

	alert("Su divición es: "+divicion);
	
}

