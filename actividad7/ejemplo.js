/**
 * Funcion de ejemplo:
 * 
 * Crear una funcion que reciba una lista de elementos numericos,
 * y que reciba un numero como segundo parametro, y que busque dentro de la lista
 * ese numero y si esta lo retorne el index.
 */

var lista = [1, 55, 3, 10, 7, 99]

function buscarNumero (array, numero){
    for (var i = 0; i < array.length; i++){
        if (lista[i] === numero)
        console.log("El número ingresado fue: ", + numero, "y se encuentra en la index: ", i)
        }
}

buscarNumero(lista, 99)
