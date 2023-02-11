/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

/*
    Matías Leonardo Caballero
    DIF-F Integrador 4
*/

function CalcularPrecio () 
{
 	let cantidadLamparas;
    let precio;
    let porcentaje;
    let precioFinal;
    let marca;
    let impuesto;
    let descuento;

    marca = document.getElementById("Marca").value;
    cantidadLamparas = document.getElementById("txtIdCantidad").value;

    cantidadLamparas = parseInt(cantidadLamparas);

    if (cantidadLamparas>=6){
        descuento = 50;
    }else if (cantidadLamparas==5){
        if (marca=="ArgentinaLuz"){
        descuento = 40;
        }else{
        descuento = 30;
        }
    }else if (cantidadLamparas==4){
        if (marca=="ArgentinaLuz" || marca=="FelipeLamparas"){
        descuento = 25;
        }else{
        descuento = 20;
        }
    }else if (cantidadLamparas==3){
        if (marca=="ArgentinaLuz"){
        descuento = 15;
        }else if (marca=="FelipeLamparas"){
        descuento = 10;
        }else{
        descuento = 5;
        }
    }

    precio = cantidadLamparas * 35;
    porcentaje = precio*descuento/100;
    precioFinal = precio - porcentaje;

    if (precioFinal>120){
        porcentaje = precio *10/100; 
        impuesto = precioFinal + porcentaje;
        document.getElementById("txtIdprecioDescuento").value = ("Su precio final es: " + impuesto.toFixed(2));
        alert("Usted pago de IIBB: " + porcentaje);
    }else{
         document.getElementById("txtIdprecioDescuento").value = ("Su precio con descuento es: " + precioFinal.toFixed(2)); 
    }

}
