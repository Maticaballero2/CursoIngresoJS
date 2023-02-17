function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	const  ESTADIA = 15.000;
	let aumento;
	let descuento;
	let porcentaje;

	aumento = 0;
	descuento = 0;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada)
	{
		case ("Invierno"):
			if (destinoIngresado == "Bariloche")
			{
				aumento = 20;
			}else
			{
				if (destinoIngresado == "Mar del plata")
				{
					descuento = 20;
				}else
				{
					descuento = 10;
				}
			}
			break;
		case ("Verano"):
			if (destinoIngresado == "Bariloche")
			{
				descuento = 20;
			}else
			{
				if (destinoIngresado == "Mar del plata")
				{
					aumento = 20;
				}else
				{
					aumento = 10;
				}
			}
			break;
		case ("Otoño"):
		case ("Primavera"):
			if (destinoIngresado != "Bariloche")
			{
				aumento = 10;
			}
			break;
		default:
			alert("No existe el dato");
			break;
	}

	if (aumento != 0) 
	{
		precioFinal = ESTADIA + (ESTADIA * aumento / 100);
	}else
	{
		if (descuento != 0) 
		{
			precioFinal = ESTADIA - (ESTADIA * descuento / 100);
		}else
		{
			precioFinal = ESTADIA;
		}
	}

	alert("El precio final es: " + precioFinal);

}//FIN DE LA FUNCIÓN