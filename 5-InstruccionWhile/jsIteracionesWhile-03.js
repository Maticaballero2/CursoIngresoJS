/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	//claveIngresada = prompt("Ingresar clave aqui");

	do 
	{
		claveIngresada = prompt("Ingresar clave aqui");

		while(claveIngresada != "utn750");
		{
			alert("Te confundiste");
		}
	}
}//FIN DE LA FUNCIÓN
