/*  
    Matías Leonardo Caballero
    DIF-F Ejercicio Integrador
*/    


function mostrar()
{
    let razonSocial;
    let nombreTitular;
    let dniDelTitular;
    let fechaDeInicio;
    let numeroAleatorio;

    razonSocial=prompt("Ingrese la razón social de la empresa aqui: ");
    nombreTitular=prompt("Ingrese su nombre aqui: ");

    dniDelTitular=dniTitular.value;
    fechaDeInicio=fechaInicio.value;

    numeroAleatorio = Math.floor(Math.random() * 9);

    alert("La razón social de la empresa es: " + razonSocial);
    alert("El nombre del titular de la empresa es: "+nombreTitular);
    alert("El DNI del titular es: "+dniDelTitular);
    alert("La fecha de inicio de su empresa es: "+fechaDeInicio);
    alert("Su Cuit es: 30-" + dniDelTitular + "-" + numeroAleatorio);
}
