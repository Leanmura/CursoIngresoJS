/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
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
    document.getElementById('txtIDSegundoNumero').value = numeroDos;
    temporizador = setTimeout(Responder, 4000);

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
