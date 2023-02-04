/*
	Matías Leonardo Caballero
	DIV-F TP 03
*/
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaIngresada;
	let conversion;
	let temperaturaCentigrados;

	temperaturaIngresada = document.getElementById("txtIdTemperatura").value;

	temperaturaIngresada = parseFloat(temperaturaIngresada);

	conversion = (temperaturaIngresada - 32) * 5/9;

	temperaturaCentigrados = conversion;

	alert(temperaturaIngresada.toFixed(3) + "° Fahrenheit son: " + temperaturaCentigrados.toFixed(3) + "° Centigrados");

}

function CentigradosFahrenheit () 
{
	let temperaturaIngresada;
	let conversion;
	let temperaturaFahrenheit;

	temperaturaIngresada = document.getElementById("txtIdTemperatura").value;

	temperaturaIngresada = parseFloat(temperaturaIngresada);

	conversion = (temperaturaIngresada * 9/5) + 32;

	temperaturaFahrenheit = conversion;

	alert(temperaturaIngresada.toFixed(3) + "° Centigrados son: " + temperaturaFahrenheit.toFixed(3) + "° Fahrenheit")
}
