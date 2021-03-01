/* 
pedir el ingreso de 10 mascotas
validar
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) 
y  si es de tipo "otros" o pájaro , pedir solo un texto
edad entre 1 y 20 para gatos y perros ,  para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza */
function mostrar()
{
    for (contador = 0; contador < 10; contador++)
    {
        tipoIngresado = prompt("Ingrese el tipo de animal(gato, perro, pajaro o otros): #" + (contador + 1));
        while (isNaN(tipoIngresado) == false || tipoIngresado != 'gato' && tipoIngresado != 'perro' && tipoIngresado != 'pajaro' && tipoIngresado != 'otros')
        {
            tipoIngresado = prompt("Error. Ingrese el tipo de animal(gato, perro, pajaro o otros): #" + (contador + 1));
        }

        raza = prompt("Ingrese la raza del " + tipoIngresado + ": ");
        while (isNaN(raza) == false || (tipoIngresado == 'perro' && raza != 'pastor' && raza != 'toy' && raza != 'callejero') || tipoIngresado == 'gato' && raza != 'siames' && raza != 'turco' && raza != 'peterbald' && raza != 'generico')
        {
            raza = prompt("Error. Ingrese la raza del " + tipoIngresado + ": #" + (contador + 1));
        }

        edadIngresada = prompt("Ingrese la edad del animal: #" + (contador + 1));
        while (isNaN(edadIngresada) || ((tipoIngresado == 'perro' || tipoIngresado == 'gato') && (edadIngresada < 1 || edadIngresada > 20)) || (tipoIngresado == 'otros' && (edadIngresada < 1 || edadIngresada > 100)) || ((tipoIngresado == 'pajaro') && (edadIngresada < 1 || edadIngresada > 50)))
        {
            edadIngresada = prompt("Error. Ingrese la edad del animal: #" + (contador + 1));
        }

        nombre = prompt("Ingrese el nombre del " + tipoIngresado + ": ");
        while (isNaN(nombre) == false)
        {
            nombre = prompt("Error. Ingrese el nombre del " + tipoIngresado + ": #" + (contador + 1));
        }
    }
}
