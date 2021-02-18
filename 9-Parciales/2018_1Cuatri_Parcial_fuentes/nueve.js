/* 
Murakoshi Leandro
Parcial 2018 ejercicio 9
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 )
Curso de ingreso UTN FRA */

function mostrar()
{
    let marca;
    let peso;
    let pesoMaximo;
    let pesoMinimo;
    let marcaMasPesado;
    let temperatura;
    let cantidadTemperaturasPares;
    let cantidadProductosMenosCeroGrados;
    let continuar;
    let totalPeso
    let promedioPeso;
    let cantidadProductos;

    //INICIALIZACION
    cantidadProductos = 0;
    promedioPeso = 0;
    cantidadProductosMenosCeroGrados = 0;
    pesoMinimo = 0;
    pesoMaximo = 0;
    cantidadTemperaturasPares = 0;

    do
    {
        cantidadProductos++;
        marca = prompt("Ingresar la marca del producto: ");

        peso = prompt("Ingresar el peso del producto (debe estar entre 1kg y 100kg): ");
        peso = parseInt(peso);

        while (isNaN(peso) || peso < 1 || peso > 100)
        {
            peso = prompt("Error, el peso debe estar entre 1kg y 100kg. \nPor favor reingrese el peso de su producto: ")
            peso = parseInt(peso);
        }
        if (cantidadProductos == 1)
        {
            pesoMaximo = peso;
            pesoMinimo = peso;
            marcaMasPesado = marca;
        }
        else
        {
            if (pesoMaximo < peso)
            {
                pesoMaximo = peso;
                marcaMasPesado = marca;
            }
            if (pesoMinimo > peso)
            {
                pesoMinimo = peso;
            }
        }

        totalPeso = promedioPeso + peso;

        temperatura = prompt("Ingresar la temperatura de su producto (debe estar entre -30° y 30°): ");
        temperatura = parseInt(temperatura);
        while (isNaN(temperatura) || temperatura < -30 || temperatura > 30)
        {
            temperatura = prompt("Error, la temperatura del producto debe estar entre -30° y 30°. \nPor favor reingrese la temperatura de su producto: ");
            temperatura = parseInt(temperatura);
        }
        if (temperatura % 2 == 0)
        {
            cantidadTemperaturasPares++;
        }
        if (temperatura < 0)
        {
            cantidadProductosMenosCeroGrados++;
        }

        continuar = prompt("Desea ingresar otro producto? ");
    } while (continuar == "Si" || continuar == "si")

    promedioPeso = totalPeso / cantidadProductos;

    document.write("Cantidad de temperaturas pares: " + cantidadTemperaturasPares);
    document.write("<br>Marca del producto mas pesado: " + marcaMasPesado);
    document.write("<br>Cantidad de productos que se conservan a menos de 0°: " + cantidadProductosMenosCeroGrados);
    document.write("<br>Promedio del peso: " + promedioPeso);
    document.write("<br>Peso Maximo: " + pesoMaximo);
    document.write("<br>Peso Minimo: " + pesoMinimo);
}
