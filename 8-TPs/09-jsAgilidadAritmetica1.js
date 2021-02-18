/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
    let numeroUno;
    let numeroDos;
    let operacion;

    numeroUno = Math.floor(Math.random() * 10) + 1;
    numeroDos = Math.floor(Math.random() * 10) + 1;
    operacion = Math.floor(Math.random() * 4) + 1;

    switch (operacion)
    {
        case 1:
            operacion = "+";
            respuesta = numeroUno + numeroDos;
            break;
        case 2:
            operacion = "-";
            respuesta = numeroUno - numeroDos;
            break;
        case 3:
            operacion = "x";
            respuesta = numeroUno * numeroDos;
            break;
        case 4:
            operacion = "/";
            respuesta = numeroUno / numeroDos;
            respuesta = respuesta.toFixed(2);

    }

    document.getElementById('txtIdPrimerNumero').value = numeroUno;
    document.getElementById('txtIdOperador').value = operacion;
    document.getElementById('txtIdSegundoNumero').value = numeroDos;

}//FIN DE LA FUNCIÓN
function Responder()
{
    let tuRespuesta;

    tuRespuesta = document.getElementById('txtIdRespuesta').value;
    tuRespuesta = parseFloat(tuRespuesta);
    if (respuesta == tuRespuesta)
    {
        alert("Respuesta CORRECTA");
    }
    else
    {
        alert("Respuesta INCORRECTA");
    }

}//FIN DE LA FUNCIÓN
