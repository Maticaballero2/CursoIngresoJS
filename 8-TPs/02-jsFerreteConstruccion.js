/*
	Matías Leonrdo Caballero
	DIF-F TP 02
*/

/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largoTerreno;
	let anchoTerreno;
	let cantidadAlambre;
	let perimetro;

	largoTerreno = txtIdLargo.value;

	largoTerreno = parseInt(largoTerreno);

	anchoTerreno = txtIdAncho.value;

	anchoTerreno = parseInt(anchoTerreno);

	perimetro = (largoTerreno + anchoTerreno) * 2;

	cantidadAlambre = perimetro * 3;

	alert("La cantidad de alambre que necesita es: " + cantidadAlambre + ("m"));

}

function Circulo () 
{
	let radioTerreno;
	let cantidadAlambre;
	let diametro;
	let perimetro;

	radioTerreno = txtIdRadio.value;

	radioTerreno = parseFloat(radioTerreno);

	diametro = radioTerreno * 2;

	perimetro = diametro * Math.PI;

	cantidadAlambre = perimetro*3;

	alert("La cantidad de alambre que necesitas es:" + cantidadAlambre.toFixed(3));

}

function Materiales () 
{
	let largoTerreno;
	let anchoTerreno;
	let bolsaCemento;
	let bolsaCal;
	let superficie;
	let bolsaCalTotal;
	let bolsaCementoTotal;

	largoTerreno = txtIdLargo.value;

	largoTerreno = parseInt(largoTerreno);

	anchoTerreno = txtIdAncho.value;

	anchoTerreno = parseInt(anchoTerreno);
 
	superficie = largoTerreno * anchoTerreno;

	bolsaCemento = 2;

	bolsaCal = 3;

	bolsaCementoTotal = superficie * bolsaCemento;

	bolsaCalTotal = superficie * bolsaCal;

	alert("La cantidad total de bolsas que necesitas para " + superficie + " m2 son: " + bolsaCementoTotal + " bolsas de cemento y, " + bolsaCalTotal + " bolsas de cal.");


}