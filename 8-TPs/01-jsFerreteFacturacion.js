/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
	let precio2;
	let precio3;
	let suma;

	precio1=txtIdPrecioUno.value;
	precio1=parseFloat(precio1);

	precio2=txtIdPrecioDos.value;
	precio2=parseFloat(precio2);

	precio3=txtIdPrecioTres.value;
	precio3=parseFloat(precio3);

	suma= precio1+precio2+precio3;

	alert("La suma de los precios es: "+suma);
}


function Promedio () 
{

	let precio1;
	let precio2;
	let precio3;
	let Promedio;

	precio1=txtIdPrecioUno.value;
	precio1=parseFloat(precio1);

	precio2=txtIdPrecioDos.value;
	precio2=parseFloat(precio2);

	precio3=txtIdPrecioTres.value;
	precio3=parseFloat(precio3);

	Promedio= (precio1+precio2+precio3)/3;

	alert("La Promedio de los precios es: "+Promedio.toFixed(2));

}
function PrecioFinal () 
{
	
	let precio1;
	let precio2;
	let precio3;
	let suma;
	let iva;
	let precioFinal;


	precio1=txtIdPrecioUno.value;
	precio1=parseFloat(precio1);

	precio2=txtIdPrecioDos.value;
	precio2=parseFloat(precio2);

	precio3=txtIdPrecioTres.value;
	precio3=parseFloat(precio3);

	suma=precio1+precio2+precio3;

	iva=21;

	porcentaje=suma*iva/100;

	precioFinal=suma+porcentaje;

	alert("El precio final más el iva es: "+precioFinal);


}