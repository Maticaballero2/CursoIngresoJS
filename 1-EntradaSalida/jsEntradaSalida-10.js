// Matias Leonardo Caballero
//	DIV-F E/S 10
/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	let importe;
	let resultado;
	let descuento;
	let porcentaje;

	importe=txtIdImporte.value;

	importe=parseFloat(importe);

	porcentaje=25;

	descuento= importe*porcentaje/100;

	resultado= importe-descuento;

	txtIdResultado.value=resultado.toFixed(2);
}
